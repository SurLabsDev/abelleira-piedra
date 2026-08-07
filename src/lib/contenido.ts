/**
 * Todo el contenido del sitio en un solo lugar.
 *
 * REGLA: nada de esto se inventa. Cada campo marcado PENDIENTE espera una
 * respuesta del estudio y hasta que llegue lleva un valor que se lee como
 * relleno a proposito. La demo original decia "mas de 10 anios" sin ninguna
 * fuente y ese es exactamente el error a no repetir: un dato inventado en la
 * web de un estudio juridico es un problema del cliente, no un detalle de
 * maqueta. Ver docs/brief.pdf, Parte 1.
 */

/** PENDIENTE (brief 1.1). Con "&" o con "y", con "Abogados" o "Estudio Juridico". */
export const ESTUDIO = "Abelleira & Piedra";
export const ESTUDIO_BAJADA = "Abogados";

/** PENDIENTE (brief 1.1). Numero real con codigo de pais, y si es linea del estudio o celular personal. */
export const WHATSAPP = "";
/** PENDIENTE (brief 1.1). Casilla que alguien lee todos los dias. */
export const EMAIL = "";
/** PENDIENTE (brief 1.2). Calle, numero, piso y apartamento, si deciden publicarla. */
export const DIRECCION = "Montevideo, Uruguay";
/** PENDIENTE (brief 1.3). Mismo dia habil, 24 o 48 horas, o sin plazo. */
export const PLAZO_RESPUESTA = "";

export interface Area {
    id: string;
    titulo: string;
    resumen: string;
    /** Lo que diria un cliente, no lo que diria un abogado. PENDIENTE (brief 1.2). */
    ejemplos: string[];
}

/**
 * PENDIENTE (brief 1.1): confirmar cuales atienden de verdad, cual sobra y cual
 * falta. PENDIENTE (brief 1.5): el orden. Hoy es el de la demo, que no responde
 * a ningun criterio de negocio. Cuando prioricen, la primera es la que mas peso
 * tiene que llevar en la pagina.
 */
export const areas: Area[] = [
    {
        id: "laboral",
        titulo: "Derecho laboral",
        resumen:
            "Despidos, reclamos, negociaciones y litigios, del lado de la empresa o del trabajador.",
        ejemplos: ["Me despidieron y no sé qué me corresponde", "Tengo un reclamo de un ex empleado"],
    },
    {
        id: "sucesorio",
        titulo: "Derecho sucesorio",
        resumen:
            "Sucesiones, testamentos, particiones y planificación para que el trámite no se convierta en un conflicto.",
        ejemplos: ["Tengo que hacer la sucesión de mi papá", "Quiero dejar todo ordenado en vida"],
    },
    {
        id: "inmobiliario",
        titulo: "Derecho inmobiliario",
        resumen:
            "Compraventas, arrendamientos, títulos, fideicomisos y desarrollos, desde la promesa hasta la escritura.",
        ejemplos: ["Quiero sacar a un inquilino que no paga", "Voy a comprar y quiero revisar el título"],
    },
    {
        id: "comercial",
        titulo: "Derecho comercial",
        resumen:
            "Sociedades, contratos, reestructuras y la operativa diaria de una empresa que necesita respaldo.",
        ejemplos: ["Vamos a armar una sociedad entre socios", "Necesito revisar un contrato antes de firmar"],
    },
    {
        id: "civil",
        titulo: "Derecho civil",
        resumen:
            "Contratos, obligaciones, responsabilidad civil, daños y perjuicios.",
        ejemplos: ["Tuve un accidente y quiero reclamar", "Me incumplieron un contrato"],
    },
    {
        id: "litigios",
        titulo: "Litigios",
        resumen:
            "Representación en juicio y en arbitraje, cuando ya no queda margen para acordar.",
        ejemplos: ["Me llegó una demanda", "Agoté las instancias y hay que ir a juicio"],
    },
];

export interface Integrante {
    nombre: string;
    rol: string;
    areas: string;
}

/**
 * PENDIENTE (brief 1.1). La demo trae cuatro tarjetas que dicen literalmente
 * "Dr. Nombre Apellido", asi que ni siquiera sabemos si son cuatro o son dos.
 * Se dejan con nombre de relleno a proposito, para que nadie los confunda con
 * datos reales en una presentacion. Cada persona ademas tiene que confirmar
 * por escrito que acepta que se publique su nombre.
 */
export const equipo: Integrante[] = [
    { nombre: "Dr. Nombre Apellido", rol: "Socio fundador", areas: "Civil y comercial" },
    { nombre: "Dra. Nombre Apellido", rol: "Socia fundadora", areas: "Laboral" },
    { nombre: "Dr. Nombre Apellido", rol: "Asociado", areas: "Inmobiliario" },
    { nombre: "Dra. Nombre Apellido", rol: "Asociada", areas: "Sucesorio" },
];

/**
 * La demo tenia estos cuatro valores dos veces: una en "El estudio" y otra en
 * "Por que elegirnos". Era la misma seccion repetida. Van una sola vez.
 *
 * PENDIENTE (brief 1.2): son atributos que declara cualquier estudio del pais.
 * Cuando contesten por que un cliente los elige a ellos y no al de la esquina,
 * esto se reescribe con la respuesta real y pasa a ser el argumento del sitio.
 */
/**
 * PENDIENTE (brief 1.2). La primera version decia "Un estudio chico atiende
 * distinto", que afirma el tamaño del estudio, y nadie nos lo confirmo. Esta
 * version es una promesa de servicio, que el estudio puede aprobar o corregir,
 * y no un dato sobre ellos que nos inventamos.
 */
export const DECLARACION =
    "Quien escucha su caso la primera vez es quien lo lleva hasta el final.";

export const valores = [
    {
        titulo: "Reserva",
        texto: "Cada asunto se maneja con la discreción que el caso exige, dentro y fuera del estudio.",
    },
    {
        titulo: "Respuesta",
        texto: "Sabe a quién escribirle y cuánto va a tardar en tener una respuesta.",
    },
    {
        titulo: "Criterio",
        texto: "Le decimos si conviene litigar y también si no conviene. Las dos respuestas son trabajo.",
    },
    {
        titulo: "Claridad",
        texto: "Le explicamos en qué situación está y qué opciones tiene, sin lenguaje de expediente.",
    },
];
