<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Abelleira & Piedra Abogados

Sitio del estudio jurídico Abelleira & Piedra, Montevideo. Cliente de SurLabs.
Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4, deploy en Vercel.

## Comandos

```bash
npm run dev     # :3000
npm run build   # el único typecheck real
npm run lint
```

No hay framework de tests. `npm run build` y `npm run lint` son toda la superficie de
verificación. No afirmar que "pasan los tests".

## Estado del proyecto

**El brief con el cliente todavía no está cerrado.** El documento que se le mandó está
en [docs/brief.pdf](docs/brief.pdf) y el detalle interno de cada pregunta en
[docs/preguntas-cliente.md](docs/preguntas-cliente.md). Los comentarios `PENDIENTE` del
código citan el número de bloque de ese documento.

La demo que mandó el cliente quedó congelada en [demo/index.html](demo/index.html), y
[docs/auditoria-demo.md](docs/auditoria-demo.md) explica qué se conservó y qué no.

## Reglas que no se negocian

**Prohibido inventar datos del estudio.** Nombres de socios, años de trayectoria,
dirección, teléfonos, matrículas, cantidad de casos, testimonios. Si un dato no está
confirmado, va como placeholder con un comentario `PENDIENTE`, nunca como texto
plausible. La demo original decía "más de 10 años" sin fuente: ese es el error a no
repetir. Un dato inventado en la web de un estudio jurídico es un problema del cliente.

Los nombres del equipo dicen `Dr. Nombre Apellido` a propósito, con la misma forma que
traía la demo, para que nadie los confunda con datos reales en una presentación.

**Sin emojis.** Los iconos salen de `@phosphor-icons/react/dist/ssr` (la entrada SSR,
para que rendericen en Server Components). Una sola familia, imports nombrados para que
`optimizePackageImports` los pueda podar.

**Sin em-dashes** (`—` ni `–`) en ningún string visible. Guion común, coma, o dos
oraciones.

**Copy en español rioplatense**, registro profesional: el visitante puede estar
atravesando un divorcio o un despido. Código, comentarios y commits en inglés.

## Las cuatro paletas

La dirección visual todavía no está decidida, así que el sitio soporta las cuatro del
brief en caliente. Los tokens son variables CSS sobre `<html data-tema>` y Tailwind las
referencia con `@theme inline`, que es lo único que permite cambiar de paleta sin
recompilar. Tailwind v4 es CSS-first: **no hay `tailwind.config.js`**.

| Tema | Fondo | Acento | Tipografía |
|---|---|---|---|
| `institucional` | `#0b1b2e` | `#c3a265` | Lora + Inter Tight |
| `tribunal` (por defecto) | `#0e2a21` | `#f1eee4` | Instrument Sans |
| `expediente` | `#f4f2ed` | `#8a2233` | Newsreader + Inter Tight |
| `abierto` | `#fbfaf8` | `#1b4965` | Geist |

**En `tribunal` el acento es el mismo hueso que el color de texto.** Cualquier estado
que se comunique con `text-acento` sobre un fondo de página va a ser invisible en esa
paleta. El índice de Áreas lo resuelve atenuando lo inactivo en vez de acentuar lo
activo. Antes de usar el acento para distinguir algo, probá las cuatro.

Dos paletas son claras y dos oscuras, así que **nada de blancos, negros ni sombras
hardcodeadas**: todo sale de un token.

**Un solo acento y un solo radio** (`--radius-brand`, 4px, definido una vez).

**Botones: texto oscuro sobre acento claro, nunca al revés.** Verificar WCAG AA (4.5:1).

### Cuando el estudio elija

1. Borrar `src/components/SelectorTema.tsx` y su import en `page.tsx`.
2. Borrar el `<script>` inline y el `suppressHydrationWarning` de `layout.tsx`.
3. Dejar un solo bloque `[data-tema]` en `globals.css` y fijar ese valor en `<html>`.
4. Dejar las dos fuentes que use el ganador. Hoy se cargan cinco familias.

## Motion

Sin librería, a propósito. CSS más un `IntersectionObserver` en `ScrollAnimator`, que
agrega `.a-la-vista` y deja de observar. El escalonado va con `transitionDelay` inline.

**Nunca `window.addEventListener("scroll")`** para efectos de página: corre en cada frame
y janquea. El estado fijo del header mira un centinela de 1px con IntersectionObserver.

Clase de animación nueva se registra en cuatro lugares: el CSS, el selector de
`ScrollAnimator`, el reset del `<noscript>` en `layout.tsx`, y el bloque de
`prefers-reduced-motion`.

## Layout

Cinco secciones y cinco familias de layout distintas: hero distribuido a altura completa,
índice con panel de detalle, declaración más fila dividida por filetes, grilla de
personas, split con formulario. Sumar una sección es elegir una familia que no esté
tomada.

**El hero distribuye en tres anclas, no en dos.** Con dos, el sobrante se juntaba en un
solo hueco de 338px en una pantalla de 1080 y se leía como error. Con tres, el mismo aire
se parte al medio. En teléfono la sección es 88dvh: lo que asoma abajo es el padding de
la sección siguiente y no un titular cortado.

**No hay fotos.** La demo llenaba el hero con una oficina de banco de imágenes que no es
la de ellos, y eso cuesta confianza en el primer scroll. Si el estudio acepta la sesión
(brief 1.2), el retrato entra en el hero con `priority` y hay que volver a medir el LCP.
No usar stock de personas ni de oficinas.

## Contacto

El formulario no postea a ningún lado: arma un mensaje con los campos y abre `wa.me`.
El de la demo disparaba un `alert()`. Si el estudio elige mail (brief 1.1), se cambia por
una API route con Resend y el resto del componente queda igual.

Tres cosas que no se pueden sacar:

- **Etiqueta arriba del input**, nunca placeholder como etiqueta.
- **Detección de popup bloqueado con enlace manual.** Un submit que se traga en silencio
  es una consulta perdida, y es el único objetivo del sitio.
- **La casilla de consentimiento arranca sin marcar**, y su redacción la escribe el
  estudio (brief 1.4). El texto actual es de referencia.

Sin número confirmado el formulario no abre nada: muestra el mensaje que se mandaría,
que además sirve para revisar la redacción con el cliente.

## Verificar cambios visuales

Chrome en macOS **fuerza un ancho mínimo de 500px en headless**, así que
`--window-size=390,844` renderiza a 500 y recorta. Los bugs de mobile "encontrados" así
no suelen existir. Usar `playwright-core` con `executablePath` apuntando al Chrome real
y un viewport explícito, en un directorio scratch y no en este repo.

Afirmar siempre `document.documentElement.scrollWidth === clientWidth` para cachar
overflow, que es el bug que no se ve en una captura. Las secciones bajo el fold necesitan
scroll real: los observers no disparan solos y quedan invisibles en la captura.
