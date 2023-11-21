# Prez UI
Now separated into multiple projects for reusability.

- `prez-utils` - for JS logic for API request & N3.js store patterns
- `prez-lib` - Vue.js component library to be used by `prez-nuxt` & other Vue.js apps. Later might export as a web component library.
- `prez-nuxt` - Nuxt app using `prez-lib` re-exporting components as a layer for running Prez UI instances with `prez-nuxt-theme`. Contains the pages & routing for Prez UI.
- `prez-nuxt-theme` - a Nuxt template for customisable Prez UI themes. Inherits the components & page routing which can be overridden by using Nuxt layers.