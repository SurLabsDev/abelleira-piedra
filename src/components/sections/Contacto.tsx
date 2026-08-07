"use client";

import { useState } from "react";
import { WhatsappLogo, EnvelopeSimple, MapPin, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP, EMAIL, DIRECCION, PLAZO_RESPUESTA, areas } from "@/lib/contenido";

/**
 * El formulario no postea a ningun lado: arma un mensaje con los campos y abre
 * WhatsApp. El de la demo disparaba un alert() y no mandaba nada.
 *
 * Si el estudio elige mail en vez de WhatsApp (brief 1.1), esto se cambia por
 * una API route con Resend y el resto del componente queda igual.
 *
 * Los nombres y el orden de los campos son los de la demo. Se agrego el area,
 * porque un mensaje que ya dice de que se trata se contesta mucho mejor.
 *
 * Tres cosas que no se pueden sacar:
 *  - Etiqueta arriba del input, nunca placeholder como etiqueta. Al empezar a
 *    escribir el usuario pierde la referencia de que campo es.
 *  - Deteccion de popup bloqueado con enlace manual. Un submit que se traga en
 *    silencio es una consulta perdida, y es el unico objetivo del sitio.
 *  - La casilla de consentimiento arranca sin marcar.
 */

type Estado =
    | { tipo: "inicial" }
    | { tipo: "abierto" }
    | { tipo: "bloqueado"; url: string }
    | { tipo: "vista-previa"; mensaje: string };

const campo =
    "w-full rounded-marca border border-filete bg-transparent px-3.5 py-3 text-[0.9375rem] text-texto transition-colors focus:border-acento focus:outline-none";

/* Etiqueta arriba del input y en caja normal. Nunca placeholder como etiqueta:
   al empezar a escribir el usuario pierde la referencia de que campo es. */
const etiqueta = "text-[0.8125rem] font-medium text-tenue";

export default function Contacto() {
    const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });

    const enviar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const nombre = String(d.get("nombre") ?? "").trim();
        const email = String(d.get("email") ?? "").trim();
        const telefono = String(d.get("telefono") ?? "").trim();
        const area = String(d.get("area") ?? "").trim();
        const consulta = String(d.get("consulta") ?? "").trim();

        const lineas = [
            `Hola, soy ${nombre}.`,
            area ? `Les escribo por un tema de ${area.toLowerCase()}.` : "Les escribo por una consulta.",
            consulta && `\n${consulta}`,
            `\nMis datos: ${email}${telefono ? ` / ${telefono}` : ""}`,
        ].filter(Boolean);

        const mensaje = lineas.join(" ").replace(/ \n/g, "\n");

        // PENDIENTE (brief 1.1): sin numero confirmado no abrimos nada. Mostramos
        // el mensaje que se mandaria, que ademas sirve para revisarlo con el estudio.
        if (!WHATSAPP) {
            setEstado({ tipo: "vista-previa", mensaje });
            return;
        }

        const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
        const ventana = window.open(url, "_blank", "noopener,noreferrer");
        setEstado(ventana ? { tipo: "abierto" } : { tipo: "bloqueado", url });
    };

    return (
        <section
            id="contacto"
            className="scroll-mt-24 bg-superficie px-5 py-24 sm:px-8 sm:py-32"
        >
            <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-12 lg:gap-20">
                <div className="anim-scroll lg:col-span-5">
                    <h2 className="tipo-display-suelto text-[2rem] sm:text-5xl">
                        Cuéntenos su caso
                    </h2>
                    <p className="tipo-cuerpo mt-4 max-w-[44ch]">
                        Una primera conversación sirve para saber si podemos ayudarlo. Si el
                        tema no es nuestro, se lo decimos.
                    </p>

                    <div className="mt-10 space-y-4">
                        {/* PENDIENTE (brief 1.1): numero, casilla y direccion reales. */}
                        <p className="flex items-center gap-3 text-[0.9375rem] text-tenue">
                            <WhatsappLogo size={18} weight="light" className="shrink-0 text-acento" />
                            {WHATSAPP || "WhatsApp a confirmar"}
                        </p>
                        <p className="flex items-center gap-3 text-[0.9375rem] text-tenue">
                            <EnvelopeSimple size={18} weight="light" className="shrink-0 text-acento" />
                            {EMAIL || "Casilla a confirmar"}
                        </p>
                        <p className="flex items-center gap-3 text-[0.9375rem] text-tenue">
                            <MapPin size={18} weight="light" className="shrink-0 text-acento" />
                            {DIRECCION}
                        </p>
                    </div>

                    {PLAZO_RESPUESTA && (
                        <p className="tipo-etiqueta mt-8">Respondemos {PLAZO_RESPUESTA}</p>
                    )}
                </div>

                <div className="anim-scroll lg:col-span-7" style={{ transitionDelay: "120ms" }}>
                    <form onSubmit={enviar} className="grid gap-5 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="nombre" className={etiqueta}>
                                Nombre y apellido
                            </label>
                            <input id="nombre" name="nombre" required className={campo} />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="email" className={etiqueta}>
                                Correo electrónico
                            </label>
                            <input id="email" name="email" type="email" required className={campo} />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="telefono" className={etiqueta}>
                                Teléfono (opcional)
                            </label>
                            <input id="telefono" name="telefono" type="tel" className={campo} />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="area" className={etiqueta}>
                                Tema
                            </label>
                            <div className="relative">
                                <select
                                    id="area"
                                    name="area"
                                    defaultValue=""
                                    className={`${campo} cursor-pointer appearance-none bg-fondo pr-10`}
                                >
                                    <option value="">No sé / otro</option>
                                    {areas.map((a) => (
                                        <option key={a.id} value={a.titulo}>
                                            {a.titulo}
                                        </option>
                                    ))}
                                </select>
                                <CaretDown
                                    size={14}
                                    weight="bold"
                                    aria-hidden
                                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-tenue"
                                />
                            </div>
                        </div>

                        <div className="grid gap-2 sm:col-span-2">
                            <label htmlFor="consulta" className={etiqueta}>
                                Su consulta
                            </label>
                            <textarea
                                id="consulta"
                                name="consulta"
                                rows={5}
                                required
                                className={`${campo} resize-y`}
                            />
                            <p className="text-[0.8125rem] leading-snug text-tenue">
                                Con un resumen alcanza. No hace falta que adjunte documentación
                                en este primer mensaje.
                            </p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="flex items-start gap-3 text-[0.8125rem] leading-snug text-tenue">
                                <input
                                    type="checkbox"
                                    name="consentimiento"
                                    required
                                    className="mt-0.5 size-4 shrink-0 accent-[var(--color-acento)]"
                                />
                                {/* PENDIENTE (brief 1.4): la redaccion exacta la escribe el estudio. */}
                                <span>
                                    Acepto que mis datos se usen para responder esta consulta. Entiendo
                                    que este mensaje no constituye asesoramiento ni crea una relación
                                    profesional hasta que se acuerde por escrito.
                                </span>
                            </label>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-marca bg-acento px-7 py-3.5 text-[0.9375rem] font-medium text-acento-fg transition-opacity hover:opacity-85 active:scale-[0.98]"
                            >
                                <WhatsappLogo size={18} weight="fill" />
                                Enviar por WhatsApp
                            </button>
                        </div>
                    </form>

                    {/* Estados. Ninguno es un alert(). */}
                    <div aria-live="polite" className="mt-5 empty:mt-0">
                        {estado.tipo === "abierto" && (
                            <p className="rounded-marca border border-filete p-4 text-[0.9375rem] text-tenue">
                                Se abrió WhatsApp con su mensaje listo. Solo falta que lo envíe.
                            </p>
                        )}

                        {estado.tipo === "bloqueado" && (
                            <p className="rounded-marca border border-acento p-4 text-[0.9375rem] text-tenue">
                                El navegador bloqueó la ventana.{" "}
                                <a
                                    href={estado.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-acento underline underline-offset-4"
                                >
                                    Abrir WhatsApp manualmente
                                </a>
                                .
                            </p>
                        )}

                        {estado.tipo === "vista-previa" && (
                            <div className="rounded-marca border border-acento p-4">
                                <p className="tipo-etiqueta">Falta el número del estudio</p>
                                <p className="mt-2 text-[0.9375rem] text-tenue">
                                    Así llegaría el mensaje:
                                </p>
                                <pre className="mt-3 whitespace-pre-wrap font-[inherit] text-[0.9375rem] leading-relaxed text-texto">
                                    {estado.mensaje}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
