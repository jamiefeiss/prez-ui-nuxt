# Prez UI
This is a refactor of Prez UI in Nuxt 3, using the `prez-utils` & `prez-lib` libraries.

This application is designed to be extended for themed instances through the use of Nuxt layers. The pages, routing and Pinia logic are contained in this project. 

Relevant components are re-exported in `components/` from `prez-lib` to be exposed to Nuxt in the layer to be extended.