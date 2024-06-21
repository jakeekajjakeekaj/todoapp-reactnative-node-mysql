// Para empezar se creará al server, después se creará la base de datos; una vez ya creado el server y la API, crearemos el client-side o la aplicación con REACT NATIVE, conectando con el back-end; crearemos nuestro sistema antes de empezar a programar todo para saber qué tecnologías vamos a utilizar y por qué utilizaremos esas tecnologías.

// -- POR QUÉ SE UTILIZARÁN LAS TECNOLOGÍAS?
// Para esta TODO APP, necesitaremos una DB, tomando en cuenta que necesitaremos una DB necesitaremos un server para manejar las requests de los usuarios, así mismo utilizaremos REACT NATIVE para tenerlo disponible en Android y iOS.

// El server puede contener PYTHON O JAVA, sin embargo para este caso utilizaremos JS con NODEJS, junto con el framework de Express.

// Para la DB utilizaremos una tabla relacional (SQL), esto porque sería una aplicación sencilla en donde las conexiones se facilitarían bastante; si nosotros usamos una DB NO RELACIONAL (NO SQL) como Facebook por ejemplo que tiene una gran cantidad de datos, almacena todo en forma de JSON y así lo jala todo de una, el problema de esto es que las queries serán mucho más complejas mientras que con SQL serán mucha más simples.


// Ahora procedemos a buscar el mysql installer en la web para así instalar mysql (se recomienda buscar algún video para las opciones reocmendadas de configuración y esas cosas). Una vez finalizada la instalación, podemos escribir en la consola mysql -u root (-u : user), de esta manera entramos en un entorno de ejecución del propio sql, si escribimos "show databases" nos aparecerán todas las bases de datos que se tienen; para este caso nos apareció un error, por lo que la consola usada es la misma proporcionada por mysql y no solo eso, sino que para solucionar un problema tuvimos que buscar en Windows "servicios" y buscar el servicio de MySQL80 (nombre predeterminado) y lo iniciamos manualmente.

// Una vez finalizado hasta este punto, lo que se realiza es escribir "SHOW DATABASES;" y así nos aparecen las bases de datos que se tienen hasta el momento

// Ahora se creará una nueva base de datos, primero nos dirigiremos a la ubicación en donde crearemos nuestra base de datos, para este caso se creó una carpeta de client y otra de server, dentro de la carpeta de server escribimos schema.sql; el schema lo que hará es mantener las queries y cómo crear las tablas, ya que es buena práctica realizar esto antes de escribirlas en la terminal.

// Dicho esto escribimos CREATE DATABASE todo_app; en el archivo y luego en la terminal realizamos lo mismo, después si escribimos SHOW DATABASES; ya nos aparecerá la que acabamos de crear, posterior a esto para entrar en esta DB escribimos primero en el archivo USE todo_app; y luego en la terminal y listo, ya estamos dentro de la APP.

// Una vez llegado a este punto comenzaremos con las consultas para la creación de nuestras tablas 
// *** PARA EL EJEMPLO LA PASSWORD NO VENDRÁ ENCRIPTADA, SOLO SERÁ UN SIMPLE VARCHAR, PERO ES IMPORTANTÍSIMO QUE ESTÉ ENCRIPTADA, una vez finalizada la consulta en el archivo, peguemos en la consola y así con las demás

// Si escribimos SHOW TABLES; ya nos aparecerá la tabla que acabamos de crear

// Hemos creado hasta la tabla shared_todos, sin embargo si nosotros escribimos SELECT * FROM USERS; nos aparece vacía, esto es porque ahora tenemos que empezar a llenar la tabla

// Una vez que ya hayamos llenado las tablas con el INSERT INTO, ahora si podemos usar el SELECT * FROM users

// *** NOS EQUIVOCAMOS EN LA TABLE DE shared_todos, POR LO QUE UNA VEZ MODIFICADA, ESCRIBIMOS EN LA CONSOLA "DROP TABLE shared_todos;" Y POSTERIOR A ESTO PEGAMOS EL CÓDIGO PARA CREAR LA TABLA PERO YA CON LAS MODIFICACIONES Y LISTO

// -----------------------

// Una vez que ya terminamos de crear la base de datos, es decir hasta ahorita ya realizamos la consulta para ver los compartidos, es momento de comenzar con el backend, nos dirigimos a la carpeta de server y dentro creamos database.js y así conectaremos nuestra DB y crearemos nuestra API con NODE

// Para esto se tiene que crear un nuevo proyecto con npm ó yarn con el npm init, después hay que instalar mysql2, esto como npm install --save mysql2, agregar mysql 2 es importante ya que tiene más funciones y es más reciente.
// Posterior a esto, dentro del package.json escribimos "type" : "module" y de esta manera ya podremos importar módulos ya que de lo contrario tendriamos que usar el require
// Después instalamos cors "npm install cors", esto es un middleware que nos dejará hacer requests a nuestro server desde nuestra aplicación de react native (el local host)
// Después instalamos dotenv "npm install dotenv --save" lo que ayudará a crear variables de entorno (es opcional pero recomendable para así no subirlo a github)
// Después isntalamos express "npm install express"
// Después instalamos nodemon "npm install --save-dev nodemon" con -dev indicamos que es una dependencia de desarrollo y nodemon ejecuta automáticamente cualquier cambio de los archivos del lado back

// Para finalizar creamos un script dentro del package.json:
/* 
"scripts" : {
"dev" : "npx nodemon app.js"
}
*/
// Esto nos ayuda para que al correr el comando dev se ejecuta lo que se indica para dev, de igual manera es importante mencionar que se tiene que crear un archivo app.js en nuestra carpeta de server, es así como al ejecutar npm run dev ya se ejecutaría nuestro entorno de desarrollo

// -------------------------------

