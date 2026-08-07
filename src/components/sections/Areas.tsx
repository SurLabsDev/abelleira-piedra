"use client";

import { useState } from "react";
import { areas } from "@/lib/contenido";

/**
 * Indice con panel de detalle, no seis tarjetas iguales.
 *
 * La demo ponia las seis areas en seis celdas identicas separadas por filetes.
 * El problema no es estetico: sin jerarquia, el area que mas plata les da se ve
 * exactamente igual que la que menos. Aca la primera de la lista es la que
 * manda, y el orden lo define el estudio cuando responda el brief 1.5.
 *
 * Desktop: lista a la izquierda, detalle a la derecha, se cambia con hover,
 * foco o click. Mobile: se apila y cada fila muestra su resumen, sin
 * interaccion, porque en un telefono el hover no existe y esconder texto detras
 * de un tap solo lo hace mas dificil de leer.
 */
export default function Areas() {
    const [activa, setActiva] = useState(0);
    const area = areas[activa];

    return (
        <section id="areas" className="px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-[1240px]">
                <div className="anim-scroll max-w-[34ch]">
                    <h2 className="tipo-display-suelto text-[2rem] sm:text-5xl">
                        En qué podemos ayudarlo
                    </h2>
                </div>

                <div className="mt-12 grid gap-x-16 gap-y-2 sm:mt-16 lg:grid-cols-12">
                    {/* Indice */}
                    <ul className="lg:col-span-7">
                        {areas.map((a, i) => (
                            <li
                                key={a.id}
                                className="anim-scroll border-t border-filete last:border-b"
                                style={{ transitionDelay: `${i * 55}ms` }}
                            >
                                <button
                                    type="button"
                                    onMouseEnter={() => setActiva(i)}
                                    onFocus={() => setActiva(i)}
                                    onClick={() => setActiva(i)}
                                    aria-current={activa === i}
                                    aria-describedby={`detalle-${a.id}`}
                                    className="group flex w-full items-baseline justify-between gap-6 py-5 text-left sm:py-6"
                                >
                                    {/* La fila inactiva va atenuada, no en color de texto.
                                        En Tribunal el acento ES el hueso del texto, asi que si
                                        la inactiva quedara en texto pleno el estado activo no
                                        se veria en esa paleta. Atenuar funciona en las cuatro. */}
                                    <span
                                        className={`tipo-display-suelto text-[1.375rem] transition-colors duration-300 sm:text-3xl ${
                                            activa === i ? "text-acento" : "text-tenue"
                                        }`}
                                    >
                                        {a.titulo}
                                    </span>
                                    <span
                                        aria-hidden
                                        className={`hidden h-px shrink-0 bg-acento transition-all duration-500 lg:block ${
                                            activa === i ? "w-10 opacity-100" : "w-0 opacity-0"
                                        }`}
                                    />
                                </button>

                                {/* En mobile el detalle vive dentro de la fila. */}
                                <p
                                    id={`detalle-${a.id}`}
                                    className="tipo-cuerpo -mt-1 pb-5 text-[0.9375rem] lg:hidden"
                                >
                                    {a.resumen}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Panel de detalle, solo desktop */}
                    <div className="hidden lg:col-span-5 lg:block">
                        <div className="sticky top-28 rounded-marca border border-filete bg-superficie p-8">
                            <p key={area.id} className="tipo-cuerpo text-texto">
                                {area.resumen}
                            </p>
                            <p className="tipo-etiqueta mt-8">Consultas típicas</p>
                            <ul className="mt-3 space-y-2.5">
                                {area.ejemplos.map((e) => (
                                    <li key={e} className="tipo-cuerpo text-[0.9375rem] italic">
                                        &ldquo;{e}&rdquo;
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
