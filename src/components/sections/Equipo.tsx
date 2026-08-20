import { UserFocus } from "@phosphor-icons/react/dist/ssr";
import { equipo } from "@/lib/contenido";

/**
 * Cada integrante lleva un lugar reservado con forma de retrato.
 *
 * NO es una foto de banco de imagenes: poner una cara de stock y presentarla
 * como socia del estudio es directamente mentir, y si eso llega a produccion el
 * problema es del cliente. Es un espacio con la proporcion 3:4 de un retrato,
 * las iniciales, y el rotulo "Foto pendiente" a la vista.
 *
 * Que se vea el hueco tiene dos funciones. La seccion deja de leerse como una
 * lista de nombres sueltos, y el estudio entiende de una que ahi va su cara, que
 * es exactamente lo que hay que empujar para que acepten la sesion (brief 1.2).
 * Cuando lleguen las fotos, entran en este mismo lugar sin tocar el layout.
 */

function iniciales(nombre: string) {
    // Dra antes que Dr: con la alternacion al reves, "Dra. Maria" perdia solo
    // "Dr" y quedaba "a. Maria", que daba las iniciales "AM" en vez de "MA".
    const partes = nombre.replace(/^(Dra|Dr|Esc)\.?\s*/i, "").split(/\s+/).filter(Boolean);
    if (partes.length === 0) return "";
    // Nombre y apellido, no los dos nombres de pila: "Maria Jimena Abelleira" es MA.
    return (partes[0][0] + (partes.length > 1 ? partes[partes.length - 1][0] : "")).toUpperCase();
}

export default function Equipo() {
    return (
        <section id="equipo" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
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

                {/* auto-fit y no columnas fijas: los filetes son el fondo asomando
                    por el gap, asi que con 3 o 5 integrantes las columnas fijas
                    dejaban celdas pintadas del color del filete. El estudio todavia
                    no confirmo cuantos son (brief 1.1). */}
                <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-[repeat(auto-fit,minmax(15rem,20rem))]">
                    {equipo.map((p, i) => (
                        <article
                            key={`${p.nombre}-${i}`}
                            className="anim-scroll group overflow-hidden rounded-marca border border-filete bg-fondo"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {/* PENDIENTE (brief 1.2): retrato profesional, 3:4. */}
                            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden bg-superficie">
                                <span
                                    aria-hidden
                                    className="tipo-display-suelto text-[2.75rem] text-texto/18 transition-colors duration-500 group-hover:text-texto/20"
                                >
                                    {iniciales(p.nombre)}
                                </span>
                                <span className="absolute bottom-3 flex items-center gap-1.5 text-[0.625rem] uppercase tracking-[0.14em] text-tenue/70">
                                    <UserFocus size={12} weight="light" aria-hidden />
                                    Foto pendiente
                                </span>
                            </div>

                            <div className="p-6">
                                {/* PENDIENTE: no dijeron que area lleva cada uno. Si esta
                                    vacio no se renderiza, en vez de dejar un hueco. */}
                                {p.areas && <p className="tipo-etiqueta">{p.areas}</p>}
                                <h3 className="tipo-display-suelto mt-3 text-[1.25rem] leading-tight">
                                    {p.nombre}
                                </h3>
                                <p className="tipo-cuerpo mt-1 text-sm">{p.rol}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
