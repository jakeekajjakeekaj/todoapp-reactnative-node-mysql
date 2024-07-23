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

// Para conectar a la base de datos, nos diirigimos a database.js y dentro importamos mysql, dotenv (variables de entorno) y continuamos con el código
// Una vez finalizado el código de database.js se creará un nuevo archivo dentro de 'server' llamado .env, dentro del mismo se meterán las variables de database.js

// Una vez finalizado lo que sería el app.js hemos terminado de crear nuestra API para así poder ser utilizada del lado front, nosotros de hecho al escribir en la barra de búsqueda las direcciones correspondientes efectivamente ya podemos visualizar la información, así mismo usamos CORS PARA LIMITAR EL ACCESO A NUESTRA API Y ASÍ MEJORAR NUESTRA SEGURIDAD

// -- FRONTEND --

// -- HASTA AQUÍ YA PODEMOS EMPEZAR AHORA DEL LADO DEL FRONT, por lo que podemos cerrar todo y ahora abrir la carpeta client --

// En la consola escribimos la ruta de client y escribimos lo siguiente "npx create-expo-app ." de esta manera creamos un proyecto expo

// EXPO ES UN CONJUNTO DE HERRAMIENTAS Y SERVICIOS DISEÑADOS PARA FACILITAR LA CREACIÓN DE APLICACIONES CON REACT NATIVE, ESTE FACILITA EL TRABAJO DE LA CREACIÓN DE APLICACIONES Y ES IDEAL PARA PROTOTIPOS, APLICACIONES PEQUEÑAS O MEDIANAS; OTRA GRAN OPCIÓN SERÍA REACT NATIVE CLI, SIN EMBARGO ESTA OPCIÓN ES MÁS COMPLEJA, SE NECESITA MÁS CONOCIMIENTO PARA EL DESARROLLO DE APLICACIONES Y ES IDEAL PARA APLICACIONES MEDIANAS Y GRANDES.

// Una vez se acabe de instalar la aplicacion expo, ejecutamos "npx expo start"

// Ahora podemos visualizar esto de diferentes maneras, en el navegador como nos lo indica desde consola, en Android o iOS desde la propia app desde nuestros propios dispositivos, o desde emuladores que es como accederemos nosotros.
// En nuestro caso accederemos desde Android Studio, por lo que después de descargar Android Studio, seleccionamos "more actions" y después "cirtual device manager", una vez dentro del menú podemos visualizar la máquina virtual que tenemos por defecto instalada, para activarlo le damos al símbolo de play y así ya tenemos el emulador abierto, una vez realizado esto, desde la consola escribimos a, para así poder ejecutar expo en nuestro emulador

// Si te da problemas como a mi de que no carga en el eulador pero si en la web, podemos pasar el ejemplo con "npm run reset-project" de esta manera como lo indica en el readme nos pasa el ejemplo a la carpeta de proyecto de ejemplo, y al ejecutar "npx expo start -c" ejecutamos expo pero eliminando la caché, a su vez hay que cerrar android studio antes de ejecutar este último comando, y de esta manera ya funciona

// ** PARA ESTE CASO LLEGAMOS A TENER UN ERROR ** Lo que pasa es que de la nada nuestro MYSQL se llega a buggear y no permite la conexión de nuestro back con nuestra DB de MYSQL, e incluso al abrir nuestro MYSQL client y meter la contraseña, este de la nada se cierra, la manera de corregirlo es entrar a la terminal, y usar la siguiente direccion: C:\Program Files\MySQL\MySQL Server 8.0\bin, una vez esto podemos ejecutar mysql -u root para entrar en el entorno de desarrollo, este no funcionará pero nos arrojará un error, el cuál sería: ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost:3306' (10061); no pasa nada, lo que se tiene que hacer es primero entrar a las variables del entorno del sistema y agregar en el patch la dirección hasta el bin, posterior a esto entrarmos a 'services' igual del propio windows y buscamos el que diga MYSQL80 y lo ejecutamos de forma manual, y listo, ya debería de estar funcionando.

// Ya que por fin hemos corregido todos los bugs y ya pudimos conectar nuestra API con nuestro Front, es momento de ya poder visualizar con el formato esperado nuestras todos, es decir visualizar en la pantalla a la izquierda todo con el formato esperado, ahora lo que se hará es crear una nueva carpeta dentro de client llamada components (Para este caso ya está creada con este proyecto), creamos Task.jsx

// LLegados al punto en donde del lado del cliente ya odemos seleccionar, quitar la selección y marcar las casillas, viene ahora que al momento de hacer clic sobre los íconos nos aparezca nuestra interfaz para compartir y eso, dicho esto tenemos que instalar dependencias aparte del lado del cliente, estas serían: npm i @gorhom/bottom-sheet y una vez instalado, para trabajar con expo se tienen que instalar otras dependencias las cuales serían: npx expo install react-native-reanimated react-native-gesture-handler
// Una vez finalizado esto, dentro de nuestro babel.config.js, agregamos un plugin abajo de presets, el cual quedaría: 
// plugins : ['react-native-reanimated/plugin'],

// Al cambiar el babel necesitamos reiniciar el server y ya volvemos a iniciar la aplicación del lado del cliente, ahora si solo agregamos las librerías a nuestro Task y a nuestro index y listo: 
// para Task
// import { BottomSheetModal } from "@gorhom/bottom-sheet";
// para index
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// Hasta ahorita, después de ya haber creado el TodoModalContent, si nosotros actualizamos el estado de algún todo desde nuestra app, el estado no será actualizado en nuestra DB, para que sea actualizado lo que se debe hacer es que en el TodoModalContent se especifican los headers, pues de igual manera tenemos que especificar esos headers en nuestro Task