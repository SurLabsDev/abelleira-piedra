# Preguntas para Abelleira & Piedra

Documento interno. La version que se le manda al cliente es `brief.pdf`, que no
incluye la columna "Por que". Generado a partir de un fan-out de seis lentes
(datos duros, negocio, etica y datos personales, infraestructura, marca y contenido,
SEO local), sintetizado y despues pasado por un critico de completitud.

Correcciones que aplico el critico y que conviene no revertir:

- No decirle a un estudio juridico que redactar textos legales "no les cuesta plata".
- Registro parejo en "ustedes". El voseo rioplatense es singular; a un estudio se le habla en plural.
- Toda pregunta que abre trabajo cotizable (logo, fotos, casillas, panel, mantenimiento) lo dice.
- No explicarle a un abogado su propio marco etico ni la ley 18.331. Se le pregunta.
- La eleccion de analitica es una recomendacion tecnica, no una decision que se delega en el cliente.
- Nada de elegir entre "abono mensual" y "pago por pedido" sin numeros al lado.

## 1.1 Bloqueantes

1. **¿Cómo se escribe el nombre del estudio, exacto y letra por letra? Nos importa si va con & o con y, y si lleva la palabra Abogados o Estudio Jurídico. Queda fijado en el logo, en el título del navegador, en Google y en cualquier listado donde figuren, y tiene que ser idéntico en todos.**
   - Opciones: Abelleira & Piedra Abogados / Abelleira y Piedra Abogados / Estudio Jurídico Abelleira & Piedra / Otra, se las escribimos
   - Por qué: Queda fijado en logo, metadatos, pie y schema. Si difiere entre fuentes, Google no une la entidad.
   - Si no responden: Usamos el nombre tal cual la demo y lo dejamos anotado como pendiente.

2. **¿Quiénes integran el estudio hoy? De cada uno necesitamos nombre y apellido tal como quieren que aparezca, el tratamiento (Dr., Dra., Esc.), el rol dentro del estudio y de qué áreas se ocupa. La demo trae cuatro tarjetas que dicen literalmente Dr. Nombre Apellido, así que ni siquiera sabemos si son cuatro o son dos.**
   - Por qué: Dato no inventable. La seccion de equipo es donde se juega la confianza en una web de abogados.
   - Si no responden: No publicamos sección de equipo. El estudio queda presentado como una unidad sin nombres propios, y se pierde la mayor palanca de confianza del sitio.

3. **¿Cada persona que aparezca en la web nos confirma por escrito que está de acuerdo con que se publiquen su nombre, su cargo y su foto? Alcanza con un mail de cada uno a la casilla del estudio. Lo pedimos escrito y no de palabra porque quien se va del estudio suele pedir que lo bajen, y conviene tener claro desde el principio con qué quedó cada uno.**
   - Por qué: Consentimiento de uso de imagen y de datos. Sin registro escrito el estudio queda expuesto.

4. **¿Hay alguien que trabaja o trabajó con ustedes cuyo nombre no tiene que aparecer en la web? Y al revés, ¿alguno de ustedes prefiere no quedar asociado públicamente a un área en particular?**
   - Por qué: Situaciones sensibles que el cliente no menciona salvo que se le pregunte de frente.

5. **Las seis áreas de la demo (Civil, Comercial, Laboral, Inmobiliario, Sucesorio y Litigios), ¿son exactamente las que atienden hoy? ¿Sobra alguna que en la práctica derivan a un colega, o falta alguna que sí hacen, tipo Familia, Penal, Tributario, Migraciones o Marcas?**
   - Por qué: Las areas publicadas son la promesa de servicio y hoy salen de una plantilla generica.
   - Si no responden: No publicamos la sección de áreas. Listar un área que no hacen trae consultas para rechazar, y omitir una que sí hacen es trabajo que se pierde.

6. **¿Por dónde quieren que les entren las consultas de la web? Un botón que abre WhatsApp con el mensaje ya armado llega al celular al instante y se contesta rápido, pero deja el número a la vista de cualquiera. Un formulario que llega por mail deja registro escrito y ordenado, pero se responde más lento y se puede perder en la bandeja. También pueden ir los dos, definiendo cuál manda.**
   - Opciones: Solo WhatsApp / Solo formulario por mail / Los dos, con WhatsApp como principal / Los dos, con el formulario como principal
   - Por qué: Define la arquitectura entera del contacto: deep link a WhatsApp o API route con Resend.
   - Si no responden: No publicamos ningún canal de contacto. No asumimos por nuestra cuenta ni un número ni una casilla.

7. **Si va WhatsApp, ¿a qué número exacto, con código de país? ¿Es una línea del estudio o el celular personal de alguno de ustedes? Lo preguntamos por dos motivos: el número queda visible para cualquiera que entre, incluido quien quiera venderles algo, y la gente suele contar cosas sensibles en el primer mensaje.**
   - Opciones: Línea del estudio o chip aparte / Celular personal de un socio / Sacamos una línea nueva para esto
   - Por qué: El numero de la demo es +598 00 000 000. Sin uno real la conversion principal no existe.
   - Si no responden: El botón de WhatsApp queda sin activar y el sitio sale sin ese canal.

8. **¿Qué casilla de mail usan hoy para recibir consultas, y alguien la lee todos los días? La que muestra la demo, contacto@abelleirapiedra.com.uy, hoy no existe. Si quieren que llegue copia a una segunda persona para que no dependa de una sola, díganos a quién.**
   - Por qué: No se publica una direccion que no recibe nada. Define si hay que verificar el dominio para enviar.
   - Si no responden: No publicamos ninguna dirección de mail ni dejamos el formulario activo.

9. **¿Tienen línea fija o teléfono de oficina, y quieren publicarlo? La demo muestra un teléfono aparte del WhatsApp y no sabemos si existe. Si existe, ¿quién lo atiende y en qué horario?**
   - Por qué: La demo lista telefono y WhatsApp como canales distintos. Puede ser uno solo.
   - Si no responden: Publicamos solo el canal que hayan confirmado y no inventamos un teléfono.

10. **¿El estudio ya tiene un dominio propio? Si lo tienen, necesitamos la dirección exacta, a nombre de quién está registrado y quién tiene hoy el usuario y la clave para administrarlo. Puede ser un socio, un familiar o el técnico que les arregla las computadoras. Si no lo tienen, lo compramos nosotros, pero necesitamos que nos lo confirmen por escrito.**
   - Opciones: Ya tenemos y sabemos quién lo administra / Tenemos pero no sabemos quién tiene las claves / No tenemos, cómprenlo ustedes / No estamos seguros
   - Por qué: Sin acceso al panel de DNS la web queda en una URL provisoria. Es el bloqueo mas frecuente y el mas lento.
   - Si no responden: Planificamos sobre una dirección provisoria de prueba. No registramos ni pagamos nada a nombre del estudio sin confirmación escrita.

11. **El correo que usan hoy, ¿corre sobre ese mismo dominio? Es importante saberlo antes de tocar cualquier configuración: publicar una web sobre un dominio que además maneja el correo puede dejar al estudio sin recibir mails si se hace mal. No tocamos nada hasta tener esto claro.**
   - Por qué: Cambiar registros DNS sin saber que el MX vive ahi rompe el correo del cliente. Riesgo real.

12. **¿Tienen el logo en archivo original vectorial (.ai, .svg, .eps o .pdf editable), o lo único que existe es el monograma AP que aparece en la demo? Si lo diseñó alguien, ¿el estudio se quedó con los derechos para usarlo y modificarlo? Si no hay logo utilizable, el diseño de identidad es una etapa aparte que cotizamos por separado.**
   - Opciones: Tenemos el vectorial y lo mandamos / Hay logo pero solo como imagen / No hay logo, cotícennos el diseño / No hay logo, lo resolvemos por nuestro lado
   - Por qué: Sin vectorial no hay favicon ni imagen de previsualizacion decente. Disenar identidad se cotiza aparte.
   - Si no responden: Resolvemos la marca con una solución tipográfica del nombre, sin símbolo, y la presentamos como propuesta y no como logo definitivo.

13. **¿Quién de ustedes aprueba diseño y textos? Necesitamos una sola persona, con nombre y mail. Si cada entrega tiene que pasar por todos los socios el proyecto se estira, y lo decimos por experiencia y no por decir.**
   - Por qué: La aprobacion por comite es la causa numero uno de plazos que se duplican.
   - Si no responden: Tomamos como interlocutor único a la persona que nos contactó.

14. **Si entre ustedes hay opiniones distintas sobre un diseño o sobre un texto, ¿quién tiene la última palabra? Y antes de eso: ¿están todos de acuerdo en que el estudio necesita esta web?**
   - Por qué: Un socio que no compro el proyecto lo frena en la ronda tres. Mejor saberlo el dia uno.

15. **¿Los textos los escriben ustedes o prefieren que los redactemos nosotros a partir de una entrevista, y ustedes corrigen y aprueban? Si ya tienen algo escrito, mándenlo aunque esté crudo: perfil del estudio, una propuesta comercial vieja, los CV de los socios. Nos ahorra media reunión.**
   - Opciones: Los escribimos nosotros / Redáctenlos ustedes y corregimos / Mitad y mitad, les pasamos material de base
   - Por qué: El contenido es la causa mas comun de proyectos frenados.
   - Si no responden: Redactamos nosotros a partir de una entrevista, y nada se publica sin aprobación escrita del estudio.


## 1.2 Marca, contenido y fotos

1. **El azul marino y el dorado de la demo, ¿son colores que el estudio ya usa en tarjetas, membretes o cartelería, o simplemente vinieron con la plantilla? Lo preguntamos porque marino con dorado es lo que usa casi todo el mercado jurídico, y si no es una obligación hay margen real para diferenciarlos. En la Parte 2 les mostramos cuatro caminos.**
   - Opciones: Son los colores del estudio, no se tocan / Vinieron con la plantilla, estamos abiertos / Nos gustan pero queremos ver variantes / Sin preferencia, decidan ustedes
   - Por qué: Determina si hay libertad de direccion visual o si arranca condicionado por una plantilla.

2. **¿Hay material impreso que la web tenga que respetar? Tarjetas personales, membrete, carátulas de escritos, firma de mail, alguna tipografía que usen en documentos, un manual de marca. Si existe, mándennos fotos o los archivos.**
   - Por qué: Evita que la web quede desalineada con la papeleria que ya reparten en reuniones.

3. **¿Existe una forma corta de la marca que ya usen entre ustedes o con clientes, tipo A&P? La necesitamos para el ícono de la pestaña del navegador y para el logo en pantalla de celular, donde el nombre completo no entra.**
   - Por qué: Hace falta una version corta para favicon y para el header en mobile.
   - Si no responden: Usamos solo el nombre completo y el monograma AP únicamente como ícono.

4. **La demo dice más de 10 años brindando asesoramiento legal. ¿Desde qué año funciona el estudio con este nombre, y desde qué año ejerce cada uno de ustedes? Si el estudio es más nuevo que la trayectoria individual, cuéntennos cómo lo quieren contar. No publicamos ninguna cifra que no puedan respaldar si se la piden.**
   - Por qué: Es el unico numero de la demo y viene de la plantilla. No se publica sin confirmacion.
   - Si no responden: Sacamos toda referencia a años de trayectoria, cantidad de casos o de clientes.

5. **De cada integrante, ¿qué credenciales quieren mostrar? Universidad y año de egreso, posgrados o especializaciones, número de matrícula, membresías, docencia o publicaciones, idiomas en los que atienden, y una reseña de tres o cuatro líneas. Si les resulta más cómodo, les mandamos un formulario y lo completa cada uno por su cuenta.**
   - Por qué: Define si el perfil es una tarjeta con un nombre o una ficha profesional completa.
   - Si no responden: Publicamos solo nombre, tratamiento, rol y áreas, sin reseñas ni formación.

6. **¿Tienen retratos profesionales actuales de los socios y del equipo, hechos por un fotógrafo? Si tienen, mándennos uno de muestra para ver calidad, fondo y encuadre.**
   - Por qué: Define si existe seccion de equipo con fotos y si hace falta produccion.

7. **¿Están dispuestos a hacer una sesión de fotos, de las personas y de la oficina? Se los decimos derecho: en un estudio jurídico es lo que más cambia la percepción del visitante, y es justamente lo que hace que la demo actual se lea como plantilla. La producción se cotiza aparte. Si la respuesta es no, diseñamos la sección resuelta con tipografía y no con caras: no usamos bancos de imágenes, porque se nota y resta credibilidad.**
   - Opciones: Sí, coordinemos la sesión / Sí, pero después del lanzamiento / No, preferimos que no haya fotos
   - Por qué: Es la palanca de mayor impacto en la percepcion de seriedad y decide la direccion de arte.
   - Si no responden: Diseñamos sin fotografía de personas ni de oficina, apoyándonos en tipografía, color y textura.

8. **¿La oficina se puede fotografiar? Nos importa si es propia o compartida con otros estudios, y si hay expedientes, pantallas o carteles de terceros que no puedan salir en una foto.**
   - Por qué: Secreto profesional en la produccion fotografica. Nadie lo piensa hasta que el fotografo esta ahi.

9. **El claim de la demo es Soluciones jurídicas con experiencia y compromiso. Es una frase que le queda igual a cualquier estudio del país. ¿La mantenemos, o nos dejan proponer una frase que diga algo que solo puedan decir ustedes?**
   - Opciones: Mantener el claim actual / Que propongamos y ustedes revisan / Tienen una frase propia y nos la pasan
   - Por qué: Es la primera linea de la web y hoy es texto de plantilla.
   - Si no responden: Proponemos un claim nuevo, sobrio y específico, y no publicamos nada sin que lo aprueben.

10. **¿Por qué un cliente los elige a ustedes y no al estudio de la esquina? Buscamos una razón concreta, no valores generales. Confidencialidad, experiencia y compromiso los pone todo el mundo, así que no diferencian nada.**
   - Por qué: Los cuatro valores de la demo son intercambiables con cualquier estudio.
   - Si no responden: Construimos el argumento sobre la forma de trabajar y no sobre atributos declarados.

11. **Cuando un cliente nuevo los llama, ¿con qué palabras describe su problema? Nos sirven frases literales, del estilo me quieren echar del trabajo, tengo que hacer la sucesión de mi papá, quiero sacar a un inquilino que no paga. La gente no busca en Google como escribe un abogado, y esa diferencia es la que decide si los encuentran.**
   - Por qué: Materia prima del contenido y de los titulos. Sin esto no matcheamos ninguna busqueda real.
   - Si no responden: Redactamos con terminología jurídica estándar y se los mandamos para que lo corrijan.

12. **¿Cómo quieren que la web le hable al visitante, de vos o de usted? Nuestro default para Uruguay es el vos, que suena más cercano, pero en un estudio jurídico el usted puede leerse más apropiado. Es una decisión de ustedes y la aplicamos parejo en todo el sitio.**
   - Opciones: De vos / De usted / Decidan ustedes
   - Por qué: Hay que fijarlo una vez y aplicarlo parejo. Mezclar registros se lee descuidado.
   - Si no responden: Escribimos de usted, que es lo más conservador para el rubro.

13. **¿Qué días y en qué horario atienden? ¿Se puede ir sin aviso o siempre es con cita previa?**
   - Por qué: Sin horario confirmado no se completan los datos estructurados del negocio.
   - Si no responden: No publicamos horarios.

14. **¿Cuál es la dirección de la oficina, con calle, número, piso y apartamento, y quieren que se publique completa? La dirección visible es lo que habilita a Google a mostrarlos en el mapa. Sin ella el alcance local queda bastante más limitado.**
   - Opciones: Publicar dirección completa con piso / Mostrar solo calle y barrio / No publicar dirección, atendemos con cita previa
   - Por qué: Decide si va mapa, que se marca en el schema y las chances de entrar al pack local.
   - Si no responden: Dejamos Montevideo, Uruguay, sin mapa ni dirección, y lo anotamos como limitación conocida.

15. **¿La oficina es accesible para alguien en silla de ruedas o con movilidad reducida? Ascensor, escalones en la entrada, ancho de puertas. Si lo es, conviene decirlo en la web: es información que quien la necesita busca y casi ningún estudio publica.**
   - Por qué: Dato util y diferenciador que nadie publica. Tambien evita hacerle perder el viaje a alguien.

16. **¿El estudio tiene LinkedIn, Instagram o Facebook activos, o los socios publican a título personal? Pásennos los links exactos de los que quieran que enlacemos. Si alguno está abandonado, conviene no enlazarlo: un ícono que lleva a un perfil vacío resta más de lo que suma.**
   - Por qué: Es el detalle que el cliente nota el dia del lanzamiento.
   - Si no responden: No incluimos íconos ni enlaces a redes sociales.

17. **Mándennos dos o tres webs de estudios jurídicos que les gusten, de acá o de afuera, y una que no les guste, con una línea de por qué en cada caso. Es la forma más rápida de no presentarles una propuesta que no tiene nada que ver con lo que tienen en la cabeza.**
   - Por qué: Ahorra una ronda entera de rediseno y revela el gusto real.
   - Si no responden: Definimos la dirección visual nosotros y la presentamos en dos opciones contrastantes.


## 1.3 Dominio, correo y operacion

1. **Si hay que comprar el dominio, ¿qué terminación prefieren y a nombre de quién queda? El .com.uy es el estándar local, pide documentación del titular y no se activa el mismo día. El .uy es más corto y más caro. El .com es internacional y se activa al instante. Se renueva todos los años mientras la web exista, así que necesitamos a qué persona y a qué casilla tienen que llegar los avisos de vencimiento. Les mandamos los costos por separado.**
   - Opciones: .com.uy a nombre del estudio / .uy / .com internacional / Queremos ver costos antes de decidir
   - Por qué: Cambia costo, tramite y fecha de lanzamiento. Un dominio vencido tira abajo web y correo juntos.
   - Si no responden: Recomendamos .com.uy a nombre del estudio, pero no iniciamos ningún trámite sin autorización escrita.

2. **¿Quieren casillas de correo con el nombre del estudio, tipo nombre@sudominio? Es un servicio que se paga por casilla y por mes, todos los meses, así que hay que definir quién lo contrata y quién da de alta y de baja cuando entra o sale alguien. Los precios van en la cotización aparte.**
   - Opciones: Una sola casilla general / Una general más una por abogado / Seguimos con el mail que usamos hoy / Cotícennos las opciones
   - Por qué: Costo recurrente por persona. Definir titularidad y administracion antes de configurar nada.
   - Si no responden: Asumimos una sola casilla general y no contratamos ningún servicio pago sin aprobación previa.

3. **Las cuentas donde vive el sitio pueden quedar a nombre del estudio, con nosotros como usuarios de trabajo, o quedar administradas por nosotros. ¿Cuál prefieren? En cualquiera de los dos casos el código y el contenido son del estudio, y si algún día trabajan con otro proveedor se los entregamos completo.**
   - Opciones: Todo a nombre del estudio / Dominio del estudio, hosting administrado por SurLabs / Que administre todo SurLabs
   - Por qué: Evita la discusion de propiedad y portabilidad al final del proyecto.
   - Si no responden: Hosting administrado por SurLabs y dominio a nombre del estudio, documentado por escrito.

4. **¿Tienen hoy alguien que les maneje la parte técnica del estudio? Un empleado, un técnico externo, la empresa que les instaló las computadoras y los mails. Si existe, pásennos el contacto: casi siempre esa persona tiene las claves del dominio y del correo, y hablar directo con ella ahorra semanas de ida y vuelta.**
   - Por qué: El tercero tecnico suele tener las credenciales y nadie se acuerda de el hasta que hace falta.

5. **¿Quién les armó la demo que nos pasaron? Lo preguntamos por dos motivos. Si hay alguien esperando seguir en el proyecto, mejor saberlo ahora. Y si esa persona ya registró un dominio o abrió cuentas a nombre del estudio, necesitamos saberlo antes de abrir las nuestras.**
   - Por qué: Puede haber otro proveedor en carrera, o cuentas ya abiertas a nombre del estudio.

6. **¿Hay hoy algo publicado a nombre del estudio? Una web vieja, una página de Facebook o Instagram, una ficha en Google. Y sobre todo, ¿hay direcciones, mails o teléfonos ya impresos en tarjetas, carteles o firmas de mail que tengan que seguir funcionando igual?**
   - Por qué: Define si hay que armar redirecciones y que datos no se pueden cambiar.
   - Si no responden: Asumimos que la web nueva es la primera presencia online y no configuramos redirecciones.

7. **¿El estudio tiene Ficha de Empresa de Google, que es la tarjeta que aparece a la derecha en el mapa cuando buscás un negocio por su nombre? Si existe, ¿está verificada y quién la administra? Para un estudio local pesa más que la web para aparecer en búsquedas.**
   - Opciones: Sí, la tenemos y está verificada / Existe pero no sabemos quién la maneja / No tenemos / No sabemos qué es
   - Por qué: Sin ficha verificada no entran al pack local. Reclamarla es trabajo aparte de la web.
   - Si no responden: Asumimos que no existe, no prometemos aparición en el mapa, y la dejamos como tarea posterior.

8. **Una vez lanzada, ¿qué tan seguido calculan que van a querer cambiar algo, tipo sumar un abogado, corregir un teléfono o agregar un área? ¿Y prefieren entrar a un panel y editarlo ustedes, o pedírnoslo a nosotros? Les avisamos que el panel encarece el desarrollo, suma un costo mensual y en la mayoría de los estudios termina sin usarse. Van los dos precios en la cotización para que comparen.**
   - Opciones: Casi nunca, se lo pedimos a ustedes / Cada tanto, se lo pedimos a ustedes / Seguido, queremos editarlo nosotros
   - Por qué: Define si hace falta un CMS, que cambia alcance y costo del proyecto.
   - Si no responden: Arrancamos con cambios a pedido, sin panel, y dejamos la puerta abierta a sumarlo después.

9. **Queremos dejar medición de visitas instalada desde el día uno. Nuestra recomendación es una analítica sin cookies: no identifica personas y evita el cartel de consentimiento, que es lo primero que ve un visitante y lo que más molesta. Google Analytics da más detalle pero obliga al banner y a declararlo en la política de privacidad. ¿Vamos con la recomendación o prefieren Google?**
   - Opciones: Vamos con la recomendación / Preferimos Google Analytics / Sin medición
   - Por qué: Reformulada: el critico marco que era una decision tecnica disfrazada de decision de cliente.
   - Si no responden: Analítica sin cookies, sin banner, declarada en la política de privacidad.

10. **¿Quieren que la gente pueda adjuntar documentos desde la web, tipo una carta de despido o una escritura? Se puede hacer, pero implica que el sitio reciba y guarde documentación sensible de alguien que todavía no es cliente del estudio. Nuestra recomendación es no incluirlo en la primera versión.**
   - Opciones: Sin adjuntos, como recomiendan / Sí, queremos adjuntos / Charlémoslo
   - Por qué: Recibir documentos de un no cliente abre un problema de custodia y de secreto profesional.
   - Si no responden: Sin adjuntos.

11. **¿Quieren que se pueda agendar una consulta directo desde la web, eligiendo día y hora contra la agenda de ustedes, o prefieren que primero escriban y ustedes coordinen? Agendar solo levanta bastante la conversión, pero solo funciona si la agenda del estudio está de verdad al día.**
   - Opciones: Que primero escriban y coordinamos nosotros / Queremos agenda online / Queremos verlo pero no en la primera versión
   - Por qué: Es alcance adicional real y depende de una disciplina de agenda que muchos estudios no tienen.
   - Si no responden: Sin agenda online. El visitante escribe y el estudio coordina.

12. **En feria judicial de enero y en Semana de Turismo, ¿el estudio sigue tomando consultas nuevas? Si no, la web tiene que decirlo: una promesa de respuesta que se rompe dos semanas por año hace más daño que no prometer nada.**
   - Por qué: Nadie lo piensa hasta que llega enero y el sitio promete responder en 24 horas.

13. **¿En cuánto tiempo se comprometen a responder una consulta que entra por la web, y quién la lee? ¿Alguien mira ese canal los fines de semana?**
   - Opciones: Mismo día hábil / Dentro de las 24 horas hábiles / Dentro de las 48 horas hábiles / Preferimos no comprometer un plazo
   - Por qué: Una promesa explicita levanta mucho la conversion, pero solo si se cumple.
   - Si no responden: No publicamos ninguna promesa de tiempo de respuesta.

14. **¿Tienen una fecha objetivo para tener la web publicada? ¿Hay algo atado a esa fecha, tipo tarjetas para imprimir, una charla, una presentación o el arranque del año judicial?**
   - Por qué: Un hito externo cambia el orden de trabajo y define que se puede dejar para una segunda etapa.
   - Si no responden: Trabajamos sin fecha comprometida y les proponemos un cronograma al cerrar el alcance.

15. **Cuando les mandamos algo para revisar, ¿en cuántos días hábiles nos lo devuelven? ¿Y hay semanas donde por audiencias, plazos o feria directamente no van a poder mirarlo? Preferimos saberlo ahora y armar el cronograma en función de eso.**
   - Por qué: El tiempo de devolucion del cliente es la mitad del cronograma real y nunca se planifica.

16. **En los próximos seis meses, ¿entra o sale alguien del estudio? ¿Hay alguna chance de que cambie el nombre? Lo preguntamos antes de comprar un dominio y de diseñar un logo, porque las dos cosas son caras de rehacer.**
   - Por qué: Comprar dominio y disenar logo con el nombre a punto de cambiar es tirar plata.


## 1.4 Legales y datos personales

1. **La política de privacidad, los términos de uso y el aviso de cookies van firmados por el estudio, así que la redacción tiene que ser de ustedes o de alguien que ustedes elijan. Nosotros los maquetamos y los publicamos. ¿Les sirve así, y para qué fecha los tendrían? Si prefieren que consigamos un borrador de base para trabajar sobre eso, lo cotizamos aparte.**
   - Opciones: Los redactamos nosotros / Consigan un borrador y lo corregimos / Se lanza sin esas páginas y se agregan después
   - Por qué: Corregida: la version anterior decia que redactarlos no les cuesta plata, que es exactamente el comentario que un abogado no quiere escuchar.
   - Si no responden: No redactamos textos legales por ustedes. El sitio saldría sin esas páginas y sin formulario.

2. **En el formulario y en el mensaje de WhatsApp queremos incluir dos textos cortos: uno que aclare que la consulta inicial no constituye asesoramiento ni crea relación abogado cliente hasta que se acuerde por escrito, y una casilla de consentimiento sin premarcar para el tratamiento de datos. ¿Nos pasan ustedes la redacción exacta de los dos?**
   - Por qué: Texto legal de su especialidad. La casilla condiciona el diseno del formulario.
   - Si no responden: Dejamos una versión mínima marcada como pendiente y no publicamos el formulario hasta que la aprueben.

3. **Sobre las consultas que lleguen por la web, necesitamos tres datos para el aviso de privacidad: cuánto tiempo las conservan si no derivan en cliente, quién del estudio puede verlas, y a qué dirección escribe alguien que quiera acceder a sus datos o pedir que los borren. Esa dirección tiene que figurar en el sitio.**
   - Por qué: Datos del aviso de privacidad que no se pueden inventar.
   - Si no responden: Publicamos la casilla general como canal, dejamos el plazo sin especificar y lo anotamos como pendiente.

4. **¿Tienen alguna base de datos inscripta ante la URCDP, o la de consultas de la web habría que inscribirla? Nos guiamos por lo que nos digan: ustedes conocen el marco mejor que nosotros.**
   - Por qué: Reformulada para no explicarle a un abogado su propio marco normativo.
   - Si no responden: Les avisamos por escrito que la inscripción queda pendiente de su lado.

5. **¿Hasta dónde podemos llegar con el texto? Ustedes nos marcan el límite y nosotros lo respetamos al pie: superlativos del tipo el mejor estudio, comparaciones con otros estudios, promesas de resultado. Nuestro default es tono sobrio y descriptivo, sin nada de eso.**
   - Opciones: Tono sobrio y descriptivo / Algo más afirmativo, con frases que aprobamos nosotros / Lo revisamos juntos frase por frase
   - Por qué: Fija el techo del copy y el tono del claim del hero.
   - Si no responden: Claim sobrio y descriptivo, sin superlativos, sin comparaciones y sin promesas de resultado.

6. **¿Podemos publicar testimonios o reseñas de clientes, aunque sean anónimos o con iniciales? ¿Y están dispuestos a pedirle reseñas de Google a clientes conformes? Si el marco no lo permite, lo damos por cerrado y no volvemos sobre el tema.**
   - Opciones: Sí, con nombre y autorización escrita / Sí, pero anónimos o con iniciales / Solo enlazar reseñas de Google / No, ninguno
   - Por qué: Es la prueba social mas fuerte de una web de servicios.
   - Si no responden: Salimos sin testimonios ni reseñas. La confianza se construye con el equipo real y el proceso de trabajo.

7. **¿Podemos mencionar casos, sentencias, montos, tasas de éxito o nombres de empresas y organismos a los que asesoran? Preferimos que el límite lo marquen ustedes y no nosotros.**
   - Por qué: Casos y resultados son el contenido que mas vende y el que mas rapido choca con el secreto profesional.
   - Si no responden: No mencionamos ningún caso, resultado, monto ni nombre de cliente en ninguna parte de la web.

8. **Para el pie de página: ¿cuál es la razón social del estudio y el RUT? ¿Es una sociedad o cada profesional factura por su cuenta? Díganos también si quieren que el RUT figure a la vista.**
   - Por qué: La demo pone solo nombre y ano. No sabemos si hay persona juridica detras.
   - Si no responden: El pie lleva solo el nombre del estudio y el año.


## 1.5 Para la llamada

1. ¿Para qué quieren la web, en concreto? ¿Para que empiecen a entrar consultas de gente que hoy no los conoce, o para que sea el respaldo serio que mira alguien que ya les llegó por recomendación y quiere confirmar que son un estudio de verdad? Son dos webs distintas.

2. ¿A quién le facturan hoy la mayor parte, a empresas o a personas físicas? ¿Y eso es lo que quieren para adelante, o lo quieren cambiar?

3. De las áreas que atienden, ¿cuáles dos o tres quieren que la web les traiga de verdad, y cuál les gustaría hacer menos? Si nos priorizan armamos una página propia por área, que es lo que permite competir por búsquedas del tipo abogado laboral Montevideo. Si van todas parejas queda una sola página y compite peor.

4. En Laboral, ¿asesoran a la empresa o al trabajador? ¿Y en Litigios, suelen estar del lado de quien demanda o de quien se defiende? El texto de esas dos áreas es directamente opuesto según el lado, y escribir para los dos a la vez espanta a ambos.

5. ¿Qué tipo de consulta preferirían no recibir? Hay búsquedas con mucho volumen que traen consultas que después no les sirven, y filtrar con el texto es gratis.

6. ¿La primera consulta la cobran o es sin cargo? ¿Y quieren que eso figure en la web o prefieren hablarlo por teléfono? Cambia por completo el texto del botón principal.

7. ¿Cómo cobran normalmente: por hora, iguala mensual, porcentaje sobre resultado, precio cerrado por trámite? ¿Algo de eso puede figurar en la web?

8. ¿Atienden solo Montevideo, todo el país, o también a extranjeros y uruguayos en el exterior con temas acá? ¿Trabajan por videollamada? Si el exterior pesa, ¿hace falta una versión en inglés?

9. ¿Cuántas consultas nuevas más podrían atender por mes sin que se les caiga la calidad? Un orden de magnitud alcanza. Si la capacidad es chica, conviene una web que filtre antes que una que capte.

10. ¿Qué dos o tres estudios consideran competencia directa, o cuáles ven que aparecen primero cuando buscan lo que ustedes ofrecen?

11. ¿Con qué presupuesto se están manejando para este proyecto y cómo prefieren pagarlo? Preguntamos temprano para proponerles un alcance que entre, en vez de una propuesta que no van a poder tomar.

12. ¿Cuántas rondas de correcciones esperan? Nuestra propuesta es dos sobre el diseño y dos sobre los textos, y que lo que venga después se presupueste aparte. Es para que ninguno de los dos lados se sorprenda.

13. Si dentro de seis meses tuvieran que decir si la web valió la pena, ¿qué tendría que haber pasado?
