import { ChatCircleDots, Compass, Eye, Lock } from "@phosphor-icons/react/dist/ssr";
import { DECLARACION, valores } from "@/lib/contenido";

const iconos = { Lock, ChatCircleDots, Compass, Eye } as const;

/**
 * Declaracion a ancho completo y despues los cuatro valores.
 *
 * La version anterior los separaba con filetes verticales y se leia como una
 * tabla: cuatro celdas de una planilla, no cuatro promesas. Ahora cada uno se
 * agrupa con su propio icono dentro de un disco tenue y con aire alrededor, sin
 * ninguna linea entre medio. El disco es el mismo recurso en las cuatro paletas
 * porque sale del acento, y aguanta que sean tres o cinco valores sin que quede
 * una celda vacia.
 *
 * La demo tenia estos mismos cuatro valores dos veces, una en "El estudio" y
 * otra en "Por que elegirnos". Era la misma seccion repetida con otro titulo.
 *
 * No hay ningun numero aca. La demo afirmaba "mas de 10 anios" sin fuente. Los
 * anios reales entran cuando el estudio los confirme (brief 1.2).
 */
export default function Estudio() {
    return (
        <section id="estudio" className="bg-superficie px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
            <div className="mx-auto max-w-[1240px]">
                <p className="anim-scroll tipo-display-suelto max-w-[24ch] text-[1.75rem] leading-[1.25] sm:text-4xl lg:text-[2.75rem]">
                    {DECLARACION}
                </p>

                <div className="mt-16 grid gap-x-10 gap-y-12 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
                    {valores.map((v, i) => {
                        const Icono = iconos[v.icono as keyof typeof iconos];
                        return (
                            <div
                                key={v.titulo}
                                className="anim-scroll group"
                                style={{ transitionDelay: `${i * 70}ms` }}
                            >
                                <div className="flex size-12 items-center justify-center rounded-full bg-acento/12 ring-1 ring-inset ring-acento/25 transition-colors duration-500 group-hover:bg-acento/20">
                                    <Icono size={22} weight="light" aria-hidden className="text-acento" />
                                </div>
                                <h3 className="tipo-display-suelto mt-5 text-xl sm:text-2xl">
                                    {v.titulo}
                                </h3>
                                <p className="tipo-cuerpo mt-2.5 max-w-[34ch] text-[0.9375rem]">
                                    {v.texto}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
