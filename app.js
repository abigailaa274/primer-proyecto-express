//NOTA: INICIAR EL SERVIDOR.
//Desde la terminal, con la carpeta del proyecto abierta,
//node app.js       debe devolver por consola "Aplicación funcionando en el puerto 3000"
//Luego abrir el navegador y escribir la URL: http://localhost:3000/


// Importamos la dependencia
const express = require('express'); //require sirve para cargar un módulo de Node.js.

const app = express();  // Instanciamos nuestra app
//A partir de aquí usamos app para definir rutas, configurar el servidor y arrancarlo.

const port = 3000;  //Define el puerto en el que estará escuchando la app.

app.set("view engine", "ejs");  //Configura Express para usar EJS como motor de plantillas. Esto permite renderizar archivos .ejs en las vistas.

//Define una ruta GET en la raíz del sitio: /. Cuando un usuario entra a la URL principal, esta función se ejecuta.
app.get("/", (req, res) => {
	res.render("pages/index");
}); //Express espera de forma automática que todas las vistas estén dentro de la carpeta “views”

// Iniciamos el servidor
app.listen(port, () => {
	console.log(`Aplicación funcionando en el puerto ${port}`);
});
