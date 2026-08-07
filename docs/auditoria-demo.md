# Auditoría de la demo original

Documento interno. La demo tal como la mandó el cliente quedó congelada en
[`demo/index.html`](../demo/index.html). Esto es qué se conserva, qué se tira y por qué.

## Modo de rediseño

**Overhaul, no preservación.** No hay marca previa que respetar: la demo es una plantilla
genérica, no una identidad del estudio. No hay sitio en producción, así que no hay
riesgo de migración SEO ni de romper URLs indexadas. Eso libera la parte visual por
completo. Lo que sí se preserva es la arquitectura de información, que está bien.

## Lectura de dials de la demo

| Dial | Demo | Rediseño | Por qué |
|---|---|---|---|
| `DESIGN_VARIANCE` | 2 | 6 | Todo centrado y simétrico. Sube, pero sin llegar a experimental: el rubro castiga el exceso. |
| `MOTION_INTENSITY` | 0 | 4 | Cero animación hoy. Sube a reveals en scroll y hover con intención, nada más. |
| `VISUAL_DENSITY` | 4 | 3 | El espacio en blanco es lo que hace que un estudio se lea caro. |

## Qué se conserva

- **La arquitectura de información.** Inicio, El estudio, Áreas de práctica, Equipo, Contacto
  es el orden correcto y es lo que la gente busca. Los anchors (`#estudio`, `#areas`,
  `#equipo`, `#contacto`) se mantienen.
- **Las seis áreas de práctica** como punto de partida, sujetas a que el estudio confirme
  cuáles son reales y en qué orden las quiere. Hoy están en orden arbitrario, no por
  prioridad de negocio.
- **El nombre y el monograma AP.** Es lo único parecido a una marca que existe.

## Qué se tira

| Elemento | Problema |
|---|---|
| Paleta navy `#041c34` + dorado `#b99652` | Es la paleta por defecto del rubro. Funciona el primer segundo y después vuelve al sitio invisible. Se proponen cuatro direcciones en el brief. |
| Georgia y Arial | Fuentes de sistema. Ninguna decisión tipográfica tomada. |
| Hero con foto de Unsplash | Foto de stock de una oficina que no es la de ellos. Un visitante que la reconoce pierde confianza justo en el primer scroll. |
| Sección "¿Por qué elegirnos?" | Repite literalmente los cuatro valores de "El estudio": confidencialidad, atención personalizada, experiencia, compromiso. Es la misma sección dos veces. Se fusiona en una. |
| Iconos `⚖ ▥ ♙ ⌂ ▤ ⚒` | Caracteres Unicode sueltos, no iconos. Renderizan distinto en cada sistema y el `♙` es literalmente un peón de ajedrez. Van a Phosphor. |
| Grilla de 6 tarjetas iguales | Seis celdas idénticas con un filete entre cada una. No hay jerarquía: el área que más plata les da se ve igual que la que menos. |
| Formulario con `alert()` | No manda nada a ningún lado. Se reemplaza por WhatsApp con mensaje prellenado o por Resend, según decida el estudio. |
| "Más de 10 años" | Número sin respaldo. No se publica hasta que el estudio confirme la cifra real. |
| Menú mobile `☰` | Es un caracter, no un botón. No abre nada. |

## Contenido que hoy es placeholder y bloquea el lanzamiento

Nada de esto se puede inventar. Todo está en la Parte 1 del brief al cliente.

- Los cuatro integrantes figuran como `Dr. Nombre Apellido` y `Dra. Nombre Apellido`.
- Las fotos del equipo son un cuadrado con las iniciales.
- Teléfono `+598 0000 0000` y WhatsApp `+598 00 000 000`.
- Dirección: dice "Montevideo, Uruguay" y nada más. No hay calle.
- El mail `contacto@abelleirapiedra.com.uy` asume un dominio que puede no existir.
- Los años de trayectoria.

## Problemas técnicos y de accesibilidad

- `placeholder` usado como etiqueta en los cuatro campos del formulario. Al empezar a
  escribir el usuario pierde la referencia de qué campo es. Las etiquetas van arriba del input.
- Los inputs son `rgba(255,255,255,.035)` sobre navy con borde dorado al 45%. El borde no
  llega a AA contra el fondo.
- El botón dorado lleva texto `#061b31`, que sí pasa AA. Eso se conserva en cualquier
  paleta que use un acento claro: texto oscuro sobre el acento, nunca al revés.
- `scroll-behavior: smooth` global sin `prefers-reduced-motion`.
- No hay `lang` por sección, ni Open Graph, ni favicon, ni datos estructurados, ni sitemap.
- El hero es `min-height: 760px` fijo. En un celular corto el CTA queda abajo del fold.

## Decisiones de arquitectura ya tomadas

- **Next.js 16 + React 19 + Tailwind v4**, desplegado en Vercel. Elegido porque el
  formulario por mail necesita una API route si el estudio se inclina por Resend, y porque
  es el stack que ya opera SurLabs.
- **Una sola página** con anchors, salvo que el estudio pida posicionar por área en Google.
  Si lo pide, cada área pasa a ser su propia página. Esa decisión está en la Parte 1.
- **Sin CMS por ahora.** Se agrega solo si el estudio confirma que va a editar textos
  seguido. Un CMS que nadie usa es costo de mantenimiento sin contrapartida.
