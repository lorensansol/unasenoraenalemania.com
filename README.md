# unasenoraenalemania.com

[![Una señora en Alemania](https://unasenoraenalemania.com/assets/img/logo.svg)](https://unasenoraenalemania.com/)

Instalar con terminal desde carpeta root:

```bash
gem install bundler
bundle install
```

Servidor para jekyll:

```bash
# local (development)
bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml

# production
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

Subir a producción previo minificar y purgar css + minificar js (no olvidar descomentar site.critical-path-css y comentar site.include en \_config.yml):

```bash
# purgar css
purgecss --css _site/_assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/

# minificar archivos js
terser _site/_assets/js/scripts.js --comments false --output assets/js/scripts.js
terser _site/_assets/js/search.js --comments false --output assets/js/search.js
terser _site/_assets/js/smooth-scroll.js --comments false --output assets/js/smooth-scroll.js

# deploy con fecha actual
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```


## Explicar

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