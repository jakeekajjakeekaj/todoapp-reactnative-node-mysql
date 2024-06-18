// Para empezar se creará al server, después se creará la base de datos; una vez ya creado el server y la API, crearemos el client-side o la aplicación con REACT NATIVE, conectando con el back-end; crearemos nuestro sistema antes de empezar a programar todo para saber qué tecnologías vamos a utilizar y por qué utilizaremos esas tecnologías.

// -- POR QUÉ SE UTILIZARÁN LAS TECNOLOGÍAS?
// Para esta TODO APP, necesitaremos una DB, tomando en cuenta que necesitaremos una DB necesitaremos un server para manejar las requests de los usuarios, así mismo utilizaremos REACT NATIVE para tenerlo disponible en Android y iOS.

// El server puede contener PYTHON O JAVA, sin embargo para este caso utilizaremos JS con NODEJS, junto con el framework de Express.

// Para la DB utilizaremos una tabla relacional (SQL), esto porque sería una aplicación sencilla en donde las conexiones se facilitarían bastante; si nosotros usamos una DB NO RELACIONAL (NO SQL) como Facebook por ejemplo que tiene una gran cantidad de datos, almacena todo en forma de JSON y así lo jala todo de una, el problema de esto es que las queries serán mucho más complejas mientras que con SQL serán mucha más simples.


// Ahora procedemos a buscar el mysql installer en la web para así instalar mysql (se recomienda buscar algún video para las opciones reocmendadas de configuración y esas cosas). Una vez finalizada la instalación, podemos escribir en la consola mysql -u root (-u : user), de esta manera entramos en un entorno de ejecución del propio sql, si escribimos "show databases" nos aparecerán todas las bases de datos que se tienen