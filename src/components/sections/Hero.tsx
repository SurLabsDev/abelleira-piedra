import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { areas } from "@/lib/contenido";

/**
 * Hero a pantalla completa con foto de fondo.
 *
 * La foto es de archivo y NO es la oficina del estudio, y esta elegida a
 * proposito asi: libros encuadernados leen como "institucion", no como "esta es
 * nuestra sede". Esa es la diferencia con la foto de la demo original, que era
 * una oficina de stock cualquiera y se notaba. Ver public/img/ORIGEN.md.
 * Se reemplaza en cuanto haya fotos reales (brief 1.2).
 *
 * Va detras de una cortina del color de la paleta, con una opacidad distinta por
 * tema (--t-foto-op): en los temas oscuros se deja ver, en los claros queda de
 * textura. Una sola foto sirve para las cuatro direcciones.
 *
 * Es el LCP, asi que lleva `priority`. Antes el LCP era el titular, que pintaba
 * mas rapido: si se cambia la foto hay que volver a medir.
 */
export default function Hero() {
    const destacadas = areas.slice(0, 3);
    // El estudio todavia no confirmo cuales son sus areas (brief 1.1). Si quedan
    // tres o menos, "y 0 areas mas" seria un bug visible en produccion.
    const restantes = areas.length - destacadas.length;

    return (
        <section
            id="inicio"
            className="relative isolate flex min-h-[100dvh] flex-col justify-between overflow-hidden px-6 pb-14 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-14"
        >
            {/* Foto y cortina. pointer-events-none para no comerse ningun click. */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <Image
                    src="/img/hero.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-[var(--opacity-foto)]"
                />
                {/* Dos capas: una vertical que asienta el texto de arriba y abajo,
                    y una horizontal que despeja la izquierda, que es donde vive el
                    titular. Las dos salen del color de fondo del tema. */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-fondo)_0%,transparent_38%,transparent_58%,var(--color-fondo)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-fondo)_0%,color-mix(in_srgb,var(--color-fondo)_72%,transparent)_46%,transparent_88%)]" />
            </div>

            <div className="mx-auto w-full max-w-[1240px]">
                {/* PENDIENTE (brief 1.2): el claim lo tiene que aprobar el estudio. */}
                <h1
                    className="anim-entrada tipo-display max-w-[13ch] text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
                    style={{ animationDelay: "80ms" }}
                >
                    Asesoramiento jurídico con criterio propio
                </h1>
            </div>

            {/* Ancla del medio. Con dos bloques el sobrante se juntaba en un solo
                hueco de 338px en una pantalla de 1080. Con tres se parte en dos. */}
            <p
                className="anim-entrada tipo-cuerpo mx-auto w-full max-w-[1240px]"
                style={{ animationDelay: "200ms" }}
            >
                <span className="block max-w-[46ch] text-texto/85">
                    Acompañamos a personas y empresas en las decisiones legales que no
                    admiten improvisación.
                </span>
            </p>

            <div className="mx-auto w-full max-w-[1240px]">
                {/* Indice, no navegacion: el boton "Ver areas" ya lleva a la seccion. */}
                <ul
                    className="anim-entrada mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mb-8"
                    style={{ animationDelay: "320ms" }}
                >
                    {destacadas.map((a) => (
                        <li key={a.id} className="tipo-etiqueta">
                            {a.titulo.replace("Derecho ", "")}
                        </li>
                    ))}
                    {restantes > 0 && (
                        <li className="tipo-etiqueta text-acento">
                            y {restantes} {restantes === 1 ? "área más" : "áreas más"}
                        </li>
                    )}
                </ul>

                <div className="anim-entrada h-px w-full bg-filete" style={{ animationDelay: "380ms" }} />

                <div
                    className="anim-entrada mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
                    style={{ animationDelay: "440ms" }}
                >
                    <a
                        href="#contacto"
                        className="group inline-flex items-center gap-2 rounded-marca bg-acento px-6 py-3.5 text-[0.9375rem] font-medium text-acento-fg transition-opacity hover:opacity-85 active:scale-[0.98]"
                    >
                        Hablemos
                        <ArrowRight
                            size={16}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    </a>
                    <a
                        href="#areas"
                        className="rounded-marca border border-borde-control bg-fondo/40 px-6 py-3.5 text-[0.9375rem] backdrop-blur-sm transition-colors hover:border-texto active:scale-[0.98]"
                    >
                        Ver áreas
                    </a>
                </div>
            </div>
        </section>
    );
}
