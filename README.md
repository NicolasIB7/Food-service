# Food service

<p align="right">
  <img height="200" src="./cooking.png" />
</p>

## Descripción:

El proyecto consiste en una web para la búsqueda de diferentes recetas donde el usuario puede utilizar el buscador para una búsuqeda más eficiente, puede agregar a favoritos las recetas que desee, asi como tambíen puede crear su propia receta.

Todo esto se logró mediante la realizacion de un BACKEND adquiriendo informacion mediante el consumo de una API sumado a las recetas que serán creadas por los diferentes clientes, donde estas últimas serán guarfadas en una base de datos relacional.


[![Video](https://img.youtube.com/vi/b7-VvbJBKM8/0.jpg)](https://www.youtube.com/watch?v=b7-VvbJBKM8)



## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Versiones:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.



En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `food`

El contenido de `client` fue creado usando: Create React App.

La idea general es crear una aplicación en la cual se puedan ver distintas recetas de comida junto con información relevante de las mismas utilizando la api externa [spoonacular](https://spoonacular.com/food-api) y a partir de ella poder, entre otras cosas:

- Buscar recetas
- Filtrarlos / Ordenarlos
- Crear nuevas recetas propias

#### Tecnologías usadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres



deploy:
https://pi-foods-steel.vercel.app/
