/**
 * Todo el contenido del sitio en un solo lugar.
 *
 * Actualizado con lo que el estudio respondio en el formulario el 18/08/2026.
 * Lo que sigue marcado PENDIENTE es lo que NO contestaron o dijeron que iba a
 * llegar despues. Nada de eso se completa a ojo: un dato inventado en la web de
 * un estudio juridico es un problema del cliente, no un detalle de maqueta.
 */

/** Confirmado: "Abelleira & Piedra Abogados". */
export const ESTUDIO = "Abelleira & Piedra";
export const ESTUDIO_BAJADA = "Abogados";
/** Confirmado: la forma corta que usan es A&P. */
export const MARCA_CORTA = "A&P";

/** PENDIENTE. Dijeron que sacan una linea nueva para esto y todavia no la tienen. */
export const WHATSAPP = "";
/**
 * PENDIENTE. Hoy usan abelleirajimena@gmail.com y danielpiedra@hotmail.com.
 * No se publican: una casilla de gmail en la web de un estudio juridico resta
 * mas de lo que suma, y ademas van a tener casilla propia con el dominio.
 */
export const EMAIL = "";
/** PENDIENTE. Estan comprando oficina; publican la direccion cuando se instalen. */
export const DIRECCION = "Montevideo, Uruguay";
/** Confirmado: dentro de las 48 horas habiles. */
export const PLAZO_RESPUESTA = "dentro de las 48 horas hábiles";
/** Confirmado: lunes a viernes de 10 a 18, con cita previa, urgencias 24 horas. */
export const HORARIO = "Lunes a viernes de 10 a 18 h, con cita previa";
export const URGENCIAS = "Urgencias, las 24 horas";
/** Confirmado. Sirve para decir donde trabajan sin publicar todavia una direccion. */
export const ALCANCE =
    "Montevideo y Ciudad de la Costa, con asuntos en todo el país. También atendemos a extranjeros y a uruguayos en el exterior, por videollamada.";

export interface Area {
    id: string;
    titulo: string;
    /** Nombre del icono de Phosphor. El mapa esta en Areas.tsx. */
    icono: string;
    resumen: string;
    /** Lo que diria un cliente, no lo que diria un abogado. */
    ejemplos: string[];
}

/**
 * Las CUATRO areas que el estudio confirmo que ejerce, en el orden de prioridad
 * que ellos mismos dieron: penal, laboral y familia son las que quieren que la
 * web les traiga.
 *
 * La demo listaba seis y solo dos coincidian. Sucesorio, Inmobiliario, Comercial
 * y Litigios salieron: no los ejercen. "Litigios" ademas no era un area, era una
 * modalidad que atraviesa a las otras cuatro.
 *
 * OJO con el resumen de Civil: dijeron que la unica consulta que NO quieren es
 * responsabilidad medica, que es una especie de responsabilidad civil por danos.
 * Por eso ese texto habla de contratos e incumplimientos y no de "danos y
 * perjuicios", que era justo el anzuelo.
 */
export const areas: Area[] = [
    {
        id: "penal",
        icono: "Gavel",
        titulo: "Derecho penal",
        resumen:
            "Defensa y representación en todas las etapas del proceso, desde la primera citación hasta el juicio.",
        ejemplos: ["Me citaron a declarar y no sé qué hacer", "Detuvieron a un familiar"],
    },
    {
        id: "laboral",
        icono: "Briefcase",
        titulo: "Derecho laboral",
        resumen:
            "Asesoramiento a empresas en su relación con el personal, y representación en reclamos y litigios.",
        ejemplos: ["Tengo un reclamo de un ex empleado", "Necesito ordenar los contratos del personal"],
    },
    {
        id: "familia",
        icono: "UsersThree",
        titulo: "Derecho de familia",
        resumen:
            "Divorcios, tenencia, visitas y pensiones, en un momento donde lo que más se necesita es claridad.",
        ejemplos: ["Nos estamos separando y hay hijos", "No me está pasando la pensión"],
    },
    {
        id: "civil",
        icono: "Handshake",
        titulo: "Derecho civil",
        resumen:
            "Contratos, obligaciones y reclamos por incumplimiento, antes de firmar y después también.",
        ejemplos: ["Me incumplieron un contrato", "Quiero revisar algo antes de firmarlo"],
    },
];

export interface Integrante {
    nombre: string;
    rol: string;
    areas: string;
}

/**
 * Confirmado: son DOS, no cuatro. La demo traia cuatro tarjetas de relleno y dos
 * de ellas decian "Asociado", que contradice de frente el diferencial que el
 * propio estudio enuncio: el trabajo no se delega en nadie.
 *
 * PENDIENTE: no dijeron que area lleva cada uno. Se deja vacio a proposito hasta
 * que lo confirmen, no se reparte a ojo.
 */
export const equipo: Integrante[] = [
    { nombre: "Dra. María Jimena Abelleira", rol: "Socia", areas: "" },
    { nombre: "Dr. Daniel Piedra", rol: "Socio", areas: "" },
];

/**
 * Confirmado, y es textual de ellos: "Somos un estudio boutique. Los clientes
 * cuando vienen saben que el trabajo lo haremos nosotros y no sera delegado en
 * nadie." Ese es el diferencial que dieron y reemplaza al de relleno.
 */
export const DECLARACION =
    "El trabajo lo hacemos nosotros. No se delega en nadie.";

/**
 * PENDIENTE: dijeron que tienen una frase propia y todavia no la pasaron.
 * Este claim es provisorio y no se publica sin que lo aprueben.
 */
export const CLAIM = "Asesoramiento jurídico con criterio propio";

/**
 * Los 15 anos son de ELLOS ejerciendo, no del estudio con esta integracion, que
 * arranco en agosto de 2026. Redactado asi es cierto y lo pueden sostener si se
 * lo preguntan. Decir "el estudio tiene 15 anos" seria falso.
 */
export const TRAYECTORIA = "Quince años ejerciendo, con un estudio propio desde 2026";

/**
 * Reescritos con lo que respondieron. "Reserva" y "Criterio" sobrevivieron
 * porque encajan; los otros dos salen de respuestas concretas: no delegan el
 * trabajo, y responden dentro de las 48 horas habiles con urgencias 24 horas.
 */
export const valores = [
    {
        icono: "Lock",
        titulo: "Reserva",
        texto: "Cada asunto se maneja con la discreción que el caso exige, dentro y fuera del estudio.",
    },
    {
        icono: "ChatCircleDots",
        titulo: "Respuesta",
        texto: "Respondemos dentro de las 48 horas hábiles. Las urgencias, a cualquier hora.",
    },
    {
        icono: "Compass",
        titulo: "Criterio",
        texto: "Le decimos si conviene litigar y también si no conviene. Las dos respuestas son trabajo.",
    },
    {
        icono: "Eye",
        titulo: "Claridad",
        texto: "Le explicamos en qué situación está y qué opciones tiene, sin lenguaje de expediente.",
    },
];
