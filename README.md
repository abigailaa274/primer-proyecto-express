# Primer Proyecto Express

Este es un proyecto básico desarrollado con Node.js y Express para aprender el uso de rutas y plantillas EJS en una aplicación web sencilla.

## Descripción

La aplicación sirve una página inicial en la ruta principal `/` y renderiza la vista `views/pages/index.ejs`. Actualmente muestra un mensaje de bienvenida:

> Hola! 👋

## Tecnologías utilizadas

- Node.js
- Express
- EJS

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- npm

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd primer-proyecto-express
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecución

Inicia el servidor con:

```bash
node app.js
```

Si todo funciona correctamente, la consola mostrará:

```bash
Aplicación funcionando en el puerto 3000
```

Luego abre tu navegador en:

```text
http://localhost:3000/
```

## Estructura del proyecto

```text
primer-proyecto-express/
├── app.js
├── package.json
├── README.md
├── views/
│   ├── pages/
│   │   └── index.ejs
│   └── partials/
└── node_modules/
```

## Ruta principal

- `GET /` → renderiza la vista principal `views/pages/index.ejs`

## Notas

- El archivo `app.js` contiene la configuración principal de Express.
- La línea `app.set("view engine", "ejs")` configura EJS como motor de plantillas.
- La app escucha en el puerto `3000`.

