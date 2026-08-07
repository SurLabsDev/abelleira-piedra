import { equipo } from "@/lib/contenido";

/**
 * Equipo resuelto con tipografia, no con fotos de banco de imagenes.
 *
 * Hoy no hay retratos. La demo llenaba el hueco con un cuadrado gris con las
 * iniciales, que es peor que no tener nada: se lee como una web sin terminar.
 * Aca el nombre carga la seccion y queda lugar reservado para el retrato: si el
 * estudio hace la sesion (brief 1.2), la foto entra arriba de cada bloque sin
 * tocar el resto del layout.
 *
 * Los nombres son de relleno a proposito, con la misma forma que traia la demo,
 * para que nadie los confunda con datos reales en una presentacion.
 */
export default function Equipo() {
    return (
        <section id="equipo" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-[1240px]">
                <div className="anim-scroll max-w-[40ch]">
                    <h2 className="tipo-display-suelto text-[2rem] sm:text-5xl">
                        Quiénes lo van a atender
                    </h2>
                    <p className="tipo-cuerpo mt-4 max-w-[52ch]">
                        No hay un equipo de atención al cliente en el medio. Estas son las
                        personas con las que va a hablar.
                    </p>
                </div>

                <div className="mt-12 grid gap-px border border-filete bg-filete sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {equipo.map((p, i) => (
                        <article
                            key={`${p.nombre}-${i}`}
                            className="anim-scroll flex min-h-[13rem] flex-col justify-between bg-fondo p-7 transition-colors duration-300 hover:bg-superficie"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {/* PENDIENTE (brief 1.2): retrato profesional, 3:4. */}
                            <p className="tipo-etiqueta">{p.areas}</p>
                            <div className="mt-10">
                                <h3 className="tipo-display-suelto text-[1.375rem] leading-tight">
                                    {p.nombre}
                                </h3>
                                <p className="tipo-cuerpo mt-1.5 text-sm">{p.rol}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
