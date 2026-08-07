/**
 * Verifica contraste, foco y saltos por ancla en las cuatro paletas, contra un
 * Chrome de verdad. No reemplaza mirar la pagina, pero cachea la clase de bug
 * que no se ve en una captura.
 *
 * Chrome en macOS fuerza un ancho minimo de 500px en headless, asi que esto
 * necesita playwright-core con executablePath al Chrome real. Se instala en un
 * directorio scratch, NO en este repo:
 *
 *   npm run dev                                  # en una terminal
 *   cd /tmp/scratch && npm install playwright-core
 *   node <ruta-al-repo>/scripts/verificar-a11y.mjs
 *
 * Falla con exit 1 si algo baja de los minimos WCAG AA.
 */
import { chromium } from "playwright-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const TEMAS = ["institucional", "tribunal", "expediente", "abierto"];

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
let fallos = 0;
const ok = (c, msg) => { if (!c) fallos++; console.log((c ? "OK   " : "FALLA") + " " + msg); };

for (const tema of TEMAS) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.addInitScript((t) => { try { localStorage.setItem("ap-tema", t); } catch {} }, tema);
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);

    const r = await page.evaluate(() => {
        // luminancia relativa WCAG
        const lum = ([r, g, b]) => {
            const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
            return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
        };
        const parse = (s) => s.match(/[\d.]+/g).map(Number);
        // compone un color con alfa sobre su fondo real
        const componer = (fg, bg) => {
            const a = fg.length > 3 ? fg[3] : 1;
            return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a));
        };
        const ratio = (c1, c2) => {
            const [a, b] = [lum(c1), lum(c2)].sort((x, y) => y - x);
            return (a + 0.05) / (b + 0.05);
        };

        const cs = getComputedStyle;
        const out = {};

        // 1. tipo-etiqueta + text-acento tiene que rendir acento, no tenue
        const chip = document.querySelector(".tipo-etiqueta.text-acento");
        const acento = cs(document.documentElement).getPropertyValue("--t-acento").trim();
        out.chipColor = chip ? cs(chip).color : null;
        out.acentoToken = acento;

        // 2. borde de los campos del formulario contra su fondo real
        const input = document.querySelector("#nombre");
        const seccion = document.querySelector("#contacto");
        out.bordeRatio = input
            ? ratio(componer(parse(cs(input).borderTopColor), parse(cs(seccion).backgroundColor)),
                    parse(cs(seccion).backgroundColor))
            : null;

        // 3. texto tenue sobre fondo y sobre superficie
        const body = parse(cs(document.body).backgroundColor);
        const sup = parse(cs(seccion).backgroundColor);
        const tenue = parse(cs(document.documentElement).getPropertyValue("--t-tenue").trim()
            .replace(/^#(..)(..)(..)$/, (_, a, b, c) => `rgb(${parseInt(a,16)},${parseInt(b,16)},${parseInt(c,16)})`));
        out.tenueSobreFondo = ratio(tenue, body);
        out.tenueSobreSuperficie = ratio(tenue, sup);

        // 4. contraste del texto del boton primario contra su fondo
        const cta = document.querySelector('#inicio a[href="#contacto"]');
        out.ctaRatio = cta ? ratio(parse(cs(cta).color), parse(cs(cta).backgroundColor)) : null;

        return out;
    });

    const acentoRgb = r.acentoToken.replace(/^#(..)(..)(..)$/, (_, a, b, c) =>
        `rgb(${parseInt(a, 16)}, ${parseInt(b, 16)}, ${parseInt(c, 16)})`);

    console.log(`\n--- ${tema} ---`);
    ok(r.chipColor === acentoRgb, `chip .tipo-etiqueta.text-acento rinde acento (${r.chipColor} vs ${acentoRgb})`);
    ok(r.bordeRatio >= 3, `borde de input ${r.bordeRatio.toFixed(2)}:1 (minimo 3:1)`);
    ok(r.tenueSobreFondo >= 4.5, `texto tenue sobre fondo ${r.tenueSobreFondo.toFixed(2)}:1`);
    ok(r.tenueSobreSuperficie >= 4.5, `texto tenue sobre superficie ${r.tenueSobreSuperficie.toFixed(2)}:1`);
    ok(r.ctaRatio >= 4.5, `texto del CTA primario ${r.ctaRatio.toFixed(2)}:1`);

    // 5. foco no tapado por el header fijo (WCAG 2.2 SC 2.4.11)
    // Se espera a que el scroll frene en vez de adivinar un timeout: medir a
    // mitad de un scroll suave da posiciones de paso, no la final. Y el selector
    // excluye el header, que tiene su propio "Hablemos" y siempre esta ahi arriba.
    const quieto = () => page.evaluate(() => new Promise((res) => {
        let prev = -1, q = 0, n = 0;
        const t = setInterval(() => {
            const y = Math.round(window.scrollY);
            if (y === prev) q++; else q = 0;
            prev = y;
            if (q > 6 || ++n > 60) { clearInterval(t); res(y); }
        }, 50);
    }));
    for (const sel of ['#inicio a[href="#contacto"]', '#contacto button[type="submit"]', '#nombre']) {
        await page.evaluate(() => window.scrollTo(0, 2600));
        await page.waitForTimeout(400);
        await page.evaluate((s) => document.querySelector(s).focus(), sel);
        await quieto();
        const f = await page.evaluate((s) => {
            const e = document.querySelector(s).getBoundingClientRect();
            const h = document.querySelector("header").getBoundingClientRect();
            return { bottom: Math.round(e.bottom), header: Math.round(h.bottom) };
        }, sel);
        ok(f.bottom > f.header, `foco visible en ${sel} (bottom=${f.bottom}, header=${f.header})`);
    }

    // 6. el salto por ancla deja el titular a una distancia razonable del header
    await page.evaluate(() => { location.hash = ""; location.hash = "#areas"; });
    await page.waitForTimeout(1100);
    const ancla = await page.evaluate(() => {
        const sec = document.querySelector("#areas").getBoundingClientRect();
        const hd = document.querySelector("header").getBoundingClientRect();
        return { seccion: Math.round(sec.top), header: Math.round(hd.bottom) };
    });
    ok(ancla.seccion >= ancla.header,
        `salto a #areas deja la seccion en ${ancla.seccion}px, debajo del header (${ancla.header}px)`);

    await ctx.close();
}

console.log(fallos === 0 ? "\nTODO OK" : `\n${fallos} FALLAS`);
await browser.close();
process.exit(fallos === 0 ? 0 : 1);
