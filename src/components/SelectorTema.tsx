"use client";

import { useState, useSyncExternalStore } from "react";

/**
 * TEMPORAL. Existe solo para mostrarle al estudio las cuatro direcciones del
 * brief sobre el sitio de verdad y no sobre un mockup.
 *
 * Cuando elijan: borrar este archivo, sacar el import de page.tsx, borrar el
 * script de layout.tsx, dejar un solo bloque [data-tema] en globals.css y las
 * dos fuentes que use el ganador. Con eso el sitio se lleva unos 200 KB menos
 * de tipografia.
 *
 * El tema vive en el DOM, no en estado de React: lo aplica un script inline
 * antes de la hidratacion para que no haya un parpadeo con la paleta por
 * defecto. useSyncExternalStore es la forma correcta de leer algo que vive
 * afuera de React y evita el setState dentro de un efecto.
 */

export const TEMA_POR_DEFECTO = "archivo";
export const CLAVE_TEMA = "ap-tema";

const temas = [
    { id: "institucional", label: "A. Institucional", punto: "#c3a265", fondo: "#0b1b2e" },
    { id: "archivo", label: "B. Archivo", punto: "#ce8b4e", fondo: "#241c17" },
    { id: "expediente", label: "C. Expediente", punto: "#8a2233", fondo: "#f4f2ed" },
    { id: "abierto", label: "D. Estudio abierto", punto: "#1b4965", fondo: "#fbfaf8" },
] as const;

const oyentes = new Set<() => void>();

function suscribir(avisar: () => void) {
    oyentes.add(avisar);
    return () => {
        oyentes.delete(avisar);
    };
}

function leerTema() {
    return document.documentElement.dataset.tema ?? TEMA_POR_DEFECTO;
}

function aplicarTema(id: string) {
    document.documentElement.dataset.tema = id;
    try {
        localStorage.setItem(CLAVE_TEMA, id);
    } catch {
        // navegacion privada: el tema igual se aplica, solo no persiste
    }
    for (const avisar of oyentes) avisar();
}

export default function SelectorTema() {
    const activo = useSyncExternalStore(suscribir, leerTema, () => TEMA_POR_DEFECTO);
    const [abierto, setAbierto] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
            {abierto && (
                <div className="mb-2 w-60 overflow-hidden rounded-marca border border-filete bg-superficie shadow-2xl shadow-black/30">
                    <p className="border-b border-filete px-3.5 py-2.5 text-[0.6875rem] leading-snug text-tenue">
                        Cuatro direcciones posibles. Ninguna está decidida.
                    </p>
                    {temas.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => aplicarTema(t.id)}
                            aria-current={activo === t.id}
                            className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[0.8125rem] transition-colors ${
                                activo === t.id ? "text-texto" : "text-tenue hover:text-texto"
                            }`}
                        >
                            <span
                                aria-hidden
                                className="size-4 shrink-0 rounded-full border border-filete"
                                style={{
                                    background: `linear-gradient(135deg, ${t.fondo} 50%, ${t.punto} 50%)`,
                                }}
                            />
                            {t.label}
                        </button>
                    ))}
                </div>
            )}

            <button
                type="button"
                onClick={() => setAbierto((v) => !v)}
                aria-expanded={abierto}
                className="flex items-center gap-2 rounded-marca border border-filete bg-superficie px-3.5 py-2.5 text-[0.75rem] text-tenue shadow-xl shadow-black/20 transition-colors hover:text-texto"
            >
                <span
                    aria-hidden
                    className="size-3 rounded-full"
                    style={{ background: temas.find((t) => t.id === activo)?.punto }}
                />
                Cambiar paleta
            </button>
        </div>
    );
}
