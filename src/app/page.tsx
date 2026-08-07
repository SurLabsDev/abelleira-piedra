import ScrollAnimator from "@/components/ScrollAnimator";
import SelectorTema from "@/components/SelectorTema";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Areas from "@/components/sections/Areas";
import Estudio from "@/components/sections/Estudio";
import Equipo from "@/components/sections/Equipo";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/Footer";

/**
 * Cinco secciones, cada una con una familia de layout distinta:
 * hero distribuido a altura completa, indice con panel, declaracion mas fila
 * dividida, grilla de personas, y split con formulario. Sumar una seccion es
 * elegir una familia que no este tomada.
 *
 * Server Components por defecto. Solo son cliente los cuatro que necesitan
 * estado: Header, Areas, Contacto y el selector de paleta, que es temporal.
 */
export default function Page() {
    return (
        <>
            <ScrollAnimator />
            <Header />
            <main>
                <Hero />
                <Areas />
                <Estudio />
                <Equipo />
                <Contacto />
            </main>
            <Footer />
            <SelectorTema />
        </>
    );
}
