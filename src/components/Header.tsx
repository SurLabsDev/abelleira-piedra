"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { ESTUDIO, ESTUDIO_BAJADA } from "@/lib/contenido";

const enlaces = [
    { href: "#areas", label: "Áreas" },
    { href: "#estudio", label: "El estudio" },
    { href: "#equipo", label: "Equipo" },
];

export default function Header() {
    const [fijo, setFijo] = useState(false);
    const [abierto, setAbierto] = useState(false);
    const centinela = useRef<HTMLDivElement>(null);

    /**
     * El estado "scrolleado" mira un centinela de 1px arriba de todo con un
     * IntersectionObserver. Un listener de scroll haria lo mismo corriendo en
     * cada frame.
     */
    useEffect(() => {
        const el = centinela.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => setFijo(!e.isIntersecting));
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!abierto) return;
        const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
        document.addEventListener("keydown", cerrar);
        return () => document.removeEventListener("keydown", cerrar);
    }, [abierto]);

    return (
        <>
            <div ref={centinela} aria-hidden className="absolute top-0 h-px w-full" />

            <header
                className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
                    fijo
                        ? "border-b border-filete bg-fondo/85 backdrop-blur-md"
                        : "border-b border-transparent"
                }`}
            >
                <nav className="mx-auto flex h-18 max-w-[1240px] items-center justify-between px-6 sm:px-10 lg:px-14">
                    <a href="#inicio" className="group flex items-baseline gap-2.5">
                        <span className="tipo-display text-[1.0625rem] leading-none sm:text-lg">
                            {ESTUDIO}
                        </span>
                        <span className="tipo-etiqueta hidden text-[0.625rem] sm:inline">
                            {ESTUDIO_BAJADA}
                        </span>
                    </a>

                    <div className="hidden items-center gap-9 md:flex">
                        {enlaces.map((e) => (
                            <a
                                key={e.href}
                                href={e.href}
                                className="text-sm text-tenue transition-colors hover:text-texto"
                            >
                                {e.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="rounded-marca bg-acento px-5 py-2.5 text-sm font-medium text-acento-fg transition-opacity hover:opacity-85"
                        >
                            Hablemos
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setAbierto((v) => !v)}
                        aria-expanded={abierto}
                        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
                        className="-mr-2 p-2 md:hidden"
                    >
                        {abierto ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
                    </button>
                </nav>

                {abierto && (
                    <div className="border-t border-filete bg-fondo px-5 pb-6 pt-2 md:hidden">
                        {enlaces.map((e) => (
                            <a
                                key={e.href}
                                href={e.href}
                                onClick={() => setAbierto(false)}
                                className="block border-b border-filete py-3.5 text-[0.9375rem] text-tenue"
                            >
                                {e.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setAbierto(false)}
                            className="mt-5 block rounded-marca bg-acento py-3 text-center text-sm font-medium text-acento-fg"
                        >
                            Hablemos
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}
