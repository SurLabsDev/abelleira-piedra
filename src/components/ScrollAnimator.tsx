"use client";

import { useEffect } from "react";

const SELECTOR = ".anim-scroll, .anim-linea";

/**
 * Un solo observer para todos los reveals de la pagina. Cuando un elemento
 * entra, le pone .a-la-vista y lo deja de observar: la animacion es de una vez,
 * no un loop.
 *
 * Nunca window.addEventListener("scroll") para esto. Corre en cada frame y
 * janquea. Un MutationObserver levanta lo que monte despues.
 */
export default function ScrollAnimator() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            document
                .querySelectorAll(SELECTOR)
                .forEach((el) => el.classList.add("a-la-vista"));
            return;
        }

        const observer = new IntersectionObserver(
            (entradas) => {
                for (const entrada of entradas) {
                    if (!entrada.isIntersecting) continue;
                    entrada.target.classList.add("a-la-vista");
                    observer.unobserve(entrada.target);
                }
            },
            { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
        );

        const observar = (raiz: ParentNode) =>
            raiz.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el));

        observar(document);

        const mutaciones = new MutationObserver((lista) => {
            for (const m of lista) {
                m.addedNodes.forEach((nodo) => {
                    if (!(nodo instanceof Element)) return;
                    if (nodo.matches(SELECTOR)) observer.observe(nodo);
                    observar(nodo);
                });
            }
        });
        mutaciones.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutaciones.disconnect();
        };
    }, []);

    return null;
}
