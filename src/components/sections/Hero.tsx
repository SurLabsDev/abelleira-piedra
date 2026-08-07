import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { areas } from "@/lib/contenido";

/**
 * Hero tipografico, sin imagen.
 *
 * La demo traia una foto de stock de Unsplash de una oficina que no es la de
 * ellos. Un visitante que la reconoce pierde confianza en el primer scroll, que
 * es el peor momento posible. Si el estudio acepta la sesion de fotos (brief
 * 1.2), aca entra un retrato real, hay que darle `priority` y volver a medir el
 * LCP. Mientras tanto el LCP es un nodo de texto, que es lo mas rapido que
 * puede pintar un browser.
 *
 * La seccion es 100dvh y el contenido va distribuido, no centrado. Altura
 * completa para que la seccion siguiente no asome sobre el fold: una tira del
 * titulo de abajo abarata la pagina entera.
 *
 * Pero distribuir solo funciona si los dos bloques pesan. La primera version
 * tenia el titular arriba y un parrafo abajo, y quedaban 470px de nada en el
 * medio: eso no se lee como composicion, se lee como un error. Por eso el
 * bloque de arriba lleva titular mas bajada, y el de abajo lleva el indice de
 * areas, el filete y los botones.
 *
 * Cuatro elementos de texto en total, que es el maximo que aguanta un hero. No
 * entra nada mas aca: ni una linea de confianza, ni una nota abajo de los
 * botones, ni un indicador de scroll.
 */
export default function Hero() {
    const destacadas = areas.slice(0, 3);
    // El estudio todavia no confirmo cuales son sus areas (brief 1.1). Si quedan
    // tres o menos, "y 0 areas mas" seria un bug visible en produccion.
    const restantes = areas.length - destacadas.length;

    return (
        <section
            id="inicio"
            /* 88dvh en telefono, 100dvh de sm para arriba. A 88dvh lo que asoma
               abajo es el padding de la seccion siguiente y no un titular
               cortado, que es lo que abarata la pagina. A 100dvh en un telefono
               quedaban 265px de nada en el medio. */
            className="relative flex min-h-[88dvh] flex-col justify-between px-5 pb-12 pt-28 sm:min-h-[100dvh] sm:px-8 sm:pb-16 sm:pt-32"
        >
            <div className="mx-auto w-full max-w-[1240px]">
                {/* PENDIENTE (brief 1.2): el claim lo tiene que aprobar el estudio.
                    El de la demo, "Soluciones juridicas con experiencia y compromiso",
                    le queda igual a cualquier estudio del pais. */}
                <h1
                    className="anim-entrada tipo-display max-w-[13ch] text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
                    style={{ animationDelay: "80ms" }}
                >
                    Asesoramiento jurídico con criterio propio
                </h1>
            </div>

            {/* Ancla del medio. Con dos bloques el sobrante se juntaba todo en un
                solo hueco: 338px en una pantalla de 1080 y 370px en iPad. Con tres
                el mismo aire se parte en dos y se lee como composicion. */}
            <p
                className="anim-entrada tipo-cuerpo mx-auto w-full max-w-[1240px] sm:max-w-[1240px]"
                style={{ animationDelay: "200ms" }}
            >
                <span className="block max-w-[46ch]">
                    Acompañamos a personas y empresas en las decisiones legales que no
                    admiten improvisación.
                </span>
            </p>

            <div className="mx-auto w-full max-w-[1240px]">
                {/* Indice, no navegacion. Eran enlaces a #areas, igual que el boton
                    "Ver areas" que esta 40px mas abajo: dos enlaces al mismo lugar con
                    etiquetas distintas. El boton se queda con esa intencion. */}
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

                <div
                    className="anim-entrada h-px w-full bg-filete"
                    style={{ animationDelay: "380ms" }}
                />

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
                        className="rounded-marca border border-borde-control px-6 py-3.5 text-[0.9375rem] transition-colors hover:border-texto active:scale-[0.98]"
                    >
                        Ver áreas
                    </a>
                </div>
            </div>
        </section>
    );
}
