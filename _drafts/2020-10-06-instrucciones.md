---
title: Instrucciones
categories: Instrucciones
image: /assets/img/maria.jpg
toc: true
# published: false
last_modified_at: 2020-09-07
---

¡Señora!

Te dejo unas instrucciones para que puedas usar tu blog.

Ten paciencia, al principio te puede parecer complejo, pero ya verás con el tiempo que es súper fácil.

## Hosting (GITHUB)

Te he enviado una invitación para colaborar en el proyecto (también llamado repositorio) de __github.com__ al email que me indicaste.

### Sistema de carpetas

Al acceder, veras una lista de carpetas y archivos con nombres raros. De entrada, __sólo te tienes que fijar en 3 carpetas__:

1. `_posts`
2. `_drafts`
3. `assets` (sin la barra baja del principio)
  - `img` <- Dentro de assets, fíjate sólo en la carpeta con este nombre


### Sistema de archivos

- Dentro de la carpeta `_posts` es donde se encuentran los archivos equivalentes a los __posts__.
- Dentro de la carpeta `_drafts` es donde se encuentran los archivos equivalentes a los posts de tipo __borradores__.
- Dentro de `assets/img/` es donde se encuentran las __imágenes__ a las que quieras hacer referencia en cada post.


#### Imágenes

- Dentro de la carpeta `img` puedes __subir imágenes__ (`Add file > Uploads files`).
- __Antes de subir cualquier imagen__, ten en cuenta lo siguiente:
  - El __formato__ de la imagen.
    - Puede ser casi cualquiera, pero por lo general JPG será el más usual.
  - El __nombre del archivo__ de la imagen.
    - Tiene que ser descriptivo, en minúsculas y sin espacios (usa guiones medios en su lugar) ni caracteres extraños (ni siquiera eñes ni barras bajas).
      - _Ejemplo_: `dia-de-paseo-por-el-nuevo-barrio.jpg`
    - Será el que utilices para indicar en la redacción de posts que esa es la que quieres utilizar, y tendrá que indicarse con la ruta completa (esto lo entenderás más adelante).
      - _Ejemplo_: `/assets/img/dia-de-paseo-por-el-nuevo-barrio.jpg`
  - __Resolución__ de la imagen.
    - El diseño del blog nunca mostrará más de 700 pixeles de ancho, por lo que no tiene sentido imágenes con mayor ancho que ese. Puedes usar photoshop o cualquier programa de edición de imagen (online o no) para usar ese ancho máximo. _Ejemplo_: [pixlr.com](https://pixlr.com/es/)
  - __Peso__ de la imagen.
    - Es recomendable comprimir la imagen para que no pese tantos kilobites (por no saturar el hosting y por que no tarde en cargar demasiado el sitio web para los usuarios).
    - Para ello, puedes usar alguno de esos programas, pero personalmente te recomendaría que usaras esta herramiento online donde arrastras/sueltas los archivos con las opciones por defecto y al terminar le das a downloads: [kraken.io](https://kraken.io/web-interface)


#### Posts

- Dentro de la carpeta `_posts_` puedes:
  - __Subir archivos__ que ya tengas preparados (`Add file > Uploads files`).
  - __Crear un nuevo archivo__ (`Add file > Create new file`).
    - Directamente se abriría la interfaz de edición.
  - __Abrir un archivo existente__ (`clic en el nombre del archivo deseado`).
    - Puedes editar un archivo existente (`clic en el icono de lápiz`).
- Cuando estás __editando__ un archivo tienes varias opciones:
  - Sección __nombre__ del archivo para indicarlo/modificarlo (justo a la derecha de `_posts`).
    - Es muy importante que tenga este formato `año-mes-día-nombre`
      - El año con 4 dígitos
      - El més y el día con 2 dígitos
      - El nombre:
        - Tiene que ser descriptivo.
        - En minúsculas y sin espacios (usa guiones medios en su lugar) ni caracteres extraños (ni siquiera eñes ni barras bajas).
        - Sin stop words ni palabras irrelevantes (de, por, el, la, los...)
        - Lo más corto posible.
        - Debe terminar en `.md`
    - _Ejemplo_: de un post titulado `Día de paseo por el nuevo barrio` con fecha `6 de octubre de 2020`, el archivo podría tener este nombre: `2020-10-06-paseo-nuevo-barrio.md`.
    - La URL o enlace para acceder al contenido del post sería: `{{ site.url }}{{ site.baseurl }}/paseo-nuevo-barrio`.
  - Sección de __edición__ del archivo.
    - Cabecera (en formato `YAML`).
      - Todos los archivos deben de empezar por una cabecera delimitada por 2 líneas con 3 guiones cada una, entre las cuales se indican detalles y características que tendrá el post, de entre las cuales están las siguientes:
        - `title`: Título del post. _Ejemplo_: `title: Día de paseo por el nuevo barrio`.
        - `categories`: Categorías del post. _Ejemplos_:
          - Una sola: `categories: General`.
          - Varias: `categories: [General, Cultura, Molando]`.
          - _Nota_: Los __artículos relacionados__ que aparecen se tomarán de la misma categoría que el post visualizado. Por lo que recomiendo añadir siempre al menos una categoría, aunque se lleme "General"
        - `tags`: Etiquetas. Se usan exactamente igual que las categorías.
        - `image`: Ruta de la imagen principal que ______. _Ejemplo_: `image: /assets/img/dia-de-paseo-por-el-nuevo-barrio.jpg`.
         en carpeta /assets/img/ y e indicar el nombre del archivo -> ej: "image: maria.jpg"
        - `toc`: Índice (Table Of Contents). Se trata de un índice generado automáticamente con enlaces hacia los encabezados usados en el contenido (puedes ver el ejemplo en este post que estás leyendo). Si quieres usarlo, indica `toc: true`, si no, `toc: false`.
        - `published`: Esto indica si el post aparecerá o no. Si quieres que no aparezca, indica `published: false`, de lo contrario, `published: true`.
        - `last_modified_at`: Fecha de última actualización del post. _Ejemplo_: `last_modified_at: 2020-09-07` (no indicar nada si el artículo es nuevo o no hay modificaciones posteriores).
    - Contenido (en formato `Markdown`).
      - Tutorial que explica de qué va esto y cómo escribir con este formato: [markdown.es](https://markdown.es/).
        - _Nota_: el encabezado principal (el que empieza sólo por un numeral `#`) no hay que indicarlo, ya que mediante programación se obtiene de la cabecera `title`.
      - Editor online de este tipo de formato: [stackedit.io](https://stackedit.io/app).
    - _Ejemplos_: Puedes ver el contenido del post [Presentación](/presentacion) y este mismo post/borrador llamado [Instrucciones](/drafts/instrucciones) dándole a editar para que te hagas una idea del formato.
  - Sección de __previsualización__ del post.
    - Pues previsualizar cómo quedará el post (en cuanto al formato, pero __CREO__ que las imágenes no se puede previsualizar cómo quedarán).
  - Sección para __guardar cambios__ en el archivo.
    - Básicamente puedes dejarlo todo a como está por defecto y darle a `Commit changes`.


#### Borradores (drafts)


## Sistema de comentarios (DISQUS)

- Título del artículo title: Presentación
- Para añadir categorías, indicarlo así:
  - Una sola -> "categories: General"
  - Varias -> "categories: [General, Cultura, Molando]"
- Los artículos ralacionados que aparecen se tomarán de la misma categoría que el post visualizado. Te recomiendo añadir siempre al menos una categoría, aunque se lleme "General"
- Las etiquetas se usan exactamente igual que las categorías, solo que cambiando "categories" por "tags"
- Imágenes principales en carpeta /assets/img/ y e indicar el nombre del archivo -> ej: "image: maria.jpg"
- Si quieres índice, añadir "toc: true"

- drafts
- published: false
- last_modified_at