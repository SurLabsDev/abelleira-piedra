# docs

| Archivo | Qué es | Va al cliente |
|---|---|---|
| `brief.pdf` | El documento que se le manda al estudio. 11 páginas: preguntas, cuatro direcciones visuales y próximos pasos. | Sí |
| `brief.html` | La fuente del PDF. Es el archivo que se edita. | No |
| `mensaje-envio.md` | El texto que acompaña al PDF, en versión larga y en versión corta de seis puntos. | El texto sí, el archivo no |
| `preguntas-cliente.md` | Las mismas preguntas con el "por qué" interno de cada una y el default que asumimos si no la responden. | No |
| `auditoria-demo.md` | Qué se conserva de la demo original y qué se tira. | No |

## Regenerar el PDF

`brief.html` es la fuente. Después de editarlo:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
  --print-to-pdf=docs/brief.pdf "file://$PWD/docs/brief.html"
```

El `--virtual-time-budget` no es opcional: sin él Chrome imprime antes de que
bajen las fuentes de Google y el PDF sale con las de sistema.

**Verificar la paginación antes de mandarlo.** El documento arma las hojas con
`@page` y saltos, así que una edición puede dejar una página en blanco o un
párrafo huérfano al final. Se ve por peso: una hoja en blanco pesa unos 5 KB.

```bash
pdftoppm -png -r 70 docs/brief.pdf /tmp/pg && stat -f "%N %z" /tmp/pg*.png
```

Dos cosas que ya rompieron la paginación una vez y conviene no repetir:

- `break-inside: avoid` en un bloque más alto que una hoja. Chrome resuelve el
  conflicto dejando la página anterior vacía. Va en cada pregunta, no en el grupo.
- Bloques de altura fija de 297mm. Cuando el contenido desborda, la continuación
  pierde el margen superior. Por eso la portada es lo único con altura fija y el
  resto fluye con los márgenes de `@page`.
