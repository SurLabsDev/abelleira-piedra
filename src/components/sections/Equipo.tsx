import { equipo } from "@/lib/contenido";

/**
 * Retrato circular con monograma.
 *
 * La version anterior reservaba un rectangulo 4:5 vacio por persona: cuatro
 * agujeros de 400px de alto con dos iniciales flotando. Reservaba el lugar, si,
 * pero se leia como una pagina sin terminar.
 *
 * El circulo resuelve las dos cosas a la vez. Vacio se lee como un avatar, que
 * es una forma que la gente entiende y que no pide disculpas. Lleno, la foto
 * recortada entra en el mismo lugar sin tocar el layout. Es ademas el recorte
 * que mejor aguanta un retrato hecho con el celular, que es lo que probablemente
 * llegue primero.
 *
 * Sigue sin haber caras de stock: presentar a un desconocido como socio del
 * estudio es mentir, y si eso llega a produccion el problema es del cliente.
 */

function iniciales(nombre: string) {
    return nombre
        .replace(/^(Dr|Dra|Esc)\.?\s*/i, "")
        .split(/\s+/)
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase();
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

                {/* Sin cajas ni filetes entre celdas: el aire alcanza para separar y
                    no deja rectangulos vacios cuando el equipo no es de cuatro. */}
                <div className="mt-14 grid gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    {equipo.map((p, i) => (
                        <article
                            key={`${p.nombre}-${i}`}
                            className="anim-scroll group"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {/* PENDIENTE (brief 1.2): retrato profesional, recorte 1:1. */}
                            <div className="relative size-28 sm:size-32">
                                <div className="flex size-full items-center justify-center rounded-full bg-superficie ring-1 ring-inset ring-filete transition-colors duration-500 group-hover:ring-acento/40">
                                    <span
                                        aria-hidden
                                        className="tipo-display-suelto text-2xl text-tenue transition-colors duration-500 group-hover:text-acento sm:text-[1.75rem]"
                                    >
                                        {iniciales(p.nombre)}
                                    </span>
                                </div>
                            </div>

                            <h3 className="tipo-display-suelto mt-6 text-[1.375rem] leading-tight">
                                {p.nombre}
                            </h3>
                            <p className="tipo-cuerpo mt-1.5 text-[0.9375rem]">{p.rol}</p>

                            <div className="mt-4 h-px w-10 bg-acento/50" />
                            <p className="tipo-etiqueta mt-4">{p.areas}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
