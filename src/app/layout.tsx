import type { Metadata } from "next";
import {
    Lora,
    Instrument_Sans,
    Newsreader,
    Geist,
    Inter_Tight,
} from "next/font/google";
import { ESTUDIO, ESTUDIO_BAJADA } from "@/lib/contenido";
import "./globals.css";

/**
 * Cinco familias porque hay que poder mostrar las cuatro direcciones del brief
 * en vivo. Al elegir una quedan dos y las otras tres se borran de aca.
 */
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });

export const metadata: Metadata = {
    // PENDIENTE (brief 1.1 y 1.3): dominio propio y nombre exacto del estudio.
    title: `${ESTUDIO} ${ESTUDIO_BAJADA} | Montevideo`,
    description:
        "Estudio jurídico en Montevideo. Asesoramiento en derecho laboral, sucesorio, inmobiliario, comercial y civil, y representación en juicio.",
    robots: { index: false, follow: false }, // hasta que el contenido sea real
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="es"
            data-tema="tribunal"
            /* El script de abajo cambia data-tema antes de que React hidrate, asi
               que el atributo del servidor y el del cliente difieren a proposito.
               suppressHydrationWarning aplica solo a este elemento y un nivel de
               profundidad, no tapa nada mas. Se va junto con el selector. */
            suppressHydrationWarning
            className={`${lora.variable} ${instrument.variable} ${newsreader.variable} ${geist.variable} ${interTight.variable}`}
        >
            <body>
                {/*
                  TEMPORAL, se va junto con SelectorTema. Aplica la paleta guardada
                  antes de que React hidrate, para que no se vea un parpadeo con la
                  paleta por defecto en cada carga.
                */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `try{var t=localStorage.getItem('ap-tema');if(t)document.documentElement.dataset.tema=t}catch(e){}`,
                    }}
                />
                {/*
                  Sin JS el observer nunca corre y todo lo animado queda invisible.
                  Este reset lo destapa. Toda clase de animacion nueva va aca.
                */}
                <noscript>
                    <style>{`.anim-scroll,.anim-entrada{opacity:1;transform:none;animation:none}.anim-linea{transform:scaleX(1)}`}</style>
                </noscript>
                {children}
            </body>
        </html>
    );
}
