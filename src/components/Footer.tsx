import { ESTUDIO, ESTUDIO_BAJADA, DIRECCION } from "@/lib/contenido";

export default function Footer() {
    return (
        <footer className="border-t border-filete px-5 py-10 sm:px-8">
            <div className="mx-auto flex max-w-[1240px] flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="flex items-baseline gap-2.5">
                    <span className="tipo-display text-base">{ESTUDIO}</span>
                    <span className="tipo-etiqueta text-[0.625rem]">{ESTUDIO_BAJADA}</span>
                </p>
                {/* PENDIENTE (brief 1.4): razon social y RUT, si deciden publicarlo. */}
                <p className="text-[0.8125rem] text-tenue">
                    {DIRECCION} · {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
