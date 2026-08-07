<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Abelleira & Piedra Abogados

Sitio del estudio jurídico Abelleira & Piedra, Montevideo. Cliente de SurLabs.
Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4, deploy en Vercel.

## Comandos

```bash
npm run dev     # :3000
npm run build   # el único typecheck real
npm run lint
```

No hay framework de tests. `npm run build` y `npm run lint` son toda la superficie de
verificación. No afirmar que "pasan los tests".

## Estado del proyecto

**El brief con el cliente todavía no está cerrado.** Ver
[docs/brief.html](docs/brief.html), que es el documento que se le mandó al estudio, y
[docs/auditoria-demo.md](docs/auditoria-demo.md), que explica qué se conserva de la demo
original y qué no.

La demo que mandó el cliente está congelada en [demo/index.html](demo/index.html). Es una
plantilla genérica con todo el contenido en placeholder. Sirve como referencia de la
arquitectura de información y de nada más.

## Reglas que no se negocian

**Prohibido inventar datos del estudio.** Nombres de socios, años de trayectoria, dirección,
teléfonos, matrículas, cantidad de casos, testimonios. Si un dato no está confirmado por el
cliente, va como placeholder marcado con un comentario `TODO`, nunca como texto plausible.
La demo original dice "más de 10 años" sin ninguna fuente: ese es exactamente el error a no
repetir. Un dato inventado en la web de un estudio jurídico es un problema del cliente, no
un detalle de maqueta.

**Sin emojis.** Los iconos salen de `@phosphor-icons/react/dist/ssr` (la entrada SSR, para
que rendericen en Server Components). Una sola familia.

**Sin em-dashes** (`—` ni `–`) en ningún string visible. Guion común, coma, o dos oraciones.

**Copy en español rioplatense.** Voseo, pero registro profesional: el visitante puede estar
atravesando un divorcio o un despido. Código, comentarios y commits en inglés.

**Contraste sobre el acento.** Cualquier botón con fondo de acento claro lleva texto oscuro,
nunca texto claro. Verificar WCAG AA (4.5:1) antes de shipear.

## Dirección visual

Todavía sin decidir. El brief le propone cuatro caminos al cliente y la decisión se toma
sobre dos ejes: oscuro/imponente contra claro/accesible, y convencional para el rubro contra
diferenciado. Ver la Parte 2 de `docs/brief.html`.

Cuando se decida, la paleta se define una sola vez en el bloque `@theme` de
`src/app/globals.css`. Tailwind v4 es CSS-first: **no hay `tailwind.config.js`**.

Un solo acento en toda la página. Un solo radio de borde. Una sola familia tipográfica de
display.

## Contacto

El canal todavía no está decidido. Las dos opciones que se le plantearon al cliente:

- **WhatsApp con mensaje prellenado.** El formulario no postea a ningún lado: arma el texto
  con los campos y abre `wa.me/<numero>`. Hay que detectar el popup bloqueado y ofrecer un
  enlace manual, porque un submit que se traga silenciosamente es una consulta perdida.
- **Mail vía Resend** en una API route, si el estudio prefiere formalidad y registro escrito.

Sea cual sea, el formulario necesita etiquetas arriba del input (nunca placeholder como
etiqueta) y una nota de que la consulta no constituye asesoramiento ni crea relación
abogado-cliente. Esa nota la redacta el estudio.
