import { valores } from "@/lib/contenido";

/**
 * Declaracion a ancho completo y despues los valores en una fila dividida por
 * filetes. Sin tarjetas: el filete alcanza para agrupar y la caja solo agrega
 * ruido cuando no hay jerarquia real que comunicar.
 *
 * La demo tenia estos mismos cuatro valores dos veces, una en "El estudio" y
 * otra en "Por que elegirnos". Era la misma seccion repetida con otro titulo.
 *
 * No hay ningun numero aca. La demo afirmaba "mas de 10 anios" sin fuente. Los
 * anios reales entran cuando el estudio los confirme (brief 1.2).
 */
export default function Estudio() {
    return (
        <section
            id="estudio"
            className="scroll-mt-24 bg-superficie px-5 py-24 sm:px-8 sm:py-32"
        >
            <div className="mx-auto max-w-[1240px]">
                <p className="anim-scroll tipo-display-suelto max-w-[24ch] text-[1.75rem] leading-[1.25] sm:text-4xl lg:text-[2.75rem]">
                    Un estudio chico atiende distinto. Quien escucha su caso la primera vez
                    es el mismo que lo lleva hasta el final.
                </p>

                <div
                    className="anim-linea mt-14 h-px w-full bg-filete sm:mt-20"
                    style={{ transitionDelay: "120ms" }}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {valores.map((v, i) => (
                        <div
                            key={v.titulo}
                            className="anim-scroll border-b border-filete py-8 sm:border-b-0 sm:border-r sm:py-10 sm:pr-8 sm:last:border-r-0 lg:pr-10"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            <h3 className="tipo-display-suelto text-xl sm:text-2xl">{v.titulo}</h3>
                            <p className="tipo-cuerpo mt-2.5 max-w-[34ch] text-[0.9375rem]">
                                {v.texto}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
