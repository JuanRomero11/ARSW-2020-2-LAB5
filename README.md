# 🛠️ARSW-2020-2-LAB5
## Juan Romero - Andres Sotelo
## Parte I - Ajustes Backend
Trabaje sobre la base del proyecto anterior una vez solucionado (REST-API Cinema).
Incluya dentro de las dependencias de Maven los 'webjars' de jQuery y Bootstrap (esto permite tener localmente dichas librerías de JavaScript al momento de construír el proyecto):

          <dependency>
              <groupId>org.webjars</groupId>
              <artifactId>webjars-locator</artifactId>
          </dependency>

          <dependency>
              <groupId>org.webjars</groupId>
              <artifactId>bootstrap</artifactId>
              <version>3.3.7</version>
          </dependency>

          <dependency>
              <groupId>org.webjars</groupId>
              <artifactId>jquery</artifactId>
              <version>3.1.0</version>
          </dependency>                
## Parte II - Front-End - Vistas
Cree el directorio donde residirá la aplicación JavaScript. Como se está usando SpringBoot, la ruta para poner en el mismo contenido estático (páginas Web estáticas, aplicaciones HTML5/JS, etc) es:
src/main/resources/static
Cree, en el directorio anterior, la página index.html, sólo con lo básico: título, campo para la captura del nombre del cine, un campo de captura tipo fecha, botón de 'Get Functions', campodonde se mostrará el nombre del cine seleccionado, la tabla HTML donde se mostrará el listado de funciones (con sólo los encabezados). Recuerde asociarle identificadores a dichos componentes para facilitar su búsqueda mediante selectores.
En el elemento <head> de la página, agregue las referencia a las librerías de jQuery, Bootstrap y a la hoja de estilos de Bootstrap.
  
          <head>
              <title>Cinema bookings</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">

              <script src="/webjars/jquery/jquery.min.js"></script>
              <script src="/webjars/bootstrap/3.3.7/js/bootstrap.min.js"></script>
              <link rel="stylesheet"
                href="/webjars/bootstrap/3.3.7/css/bootstrap.min.css" />
          </head>
          
Suba la aplicación (mvn spring-boot:run), y rectifique:
Que la página sea accesible desde:
http://localhost:8080/index.html
Al abrir la consola de desarrollador del navegador, NO deben aparecer mensajes de error 404 (es decir, que las librerías de JavaScript se cargaron correctamente).
## Parte III - Front-End - Lógica
Ahora, va a crear un Módulo JavaScript que, a manera de controlador, mantenga los estados y ofrezca las operaciones requeridas por la vista. Para esto tenga en cuenta el patrón Módulo de JavaScript, y cree un módulo en la ruta static/js/app.js .
Copie el módulo provisto (apimock.js) en la misma ruta del módulo antes creado. En éste agréguele más planos (con más puntos) a los autores 'quemados' en el código.
Agregue la importación de los dos nuevos módulos a la página HTML (después de las importaciones de las librerías de jQuery y Bootstrap):

                    <script src="js/apimock.js"></script>
                    <script src="js/app.js"></script>
Haga que el módulo antes creado mantenga de forma privada:
          - El nombre del cine seleccionado.
          - La fecha de las funciones a consultar
          - El listado de nombre, género y hora de las películas de las funciones del cine seleccionado. Es decir, una lista objetos, donde cada objeto tendrá tres propiedades:             nombre de la película, género de la misma y hora de la función.Junto con dos operaciones públicas, una que permita cambiar el nombre del cinema actualmente                       seleccionado y otra que permita cambiar la fecha.

Agregue al módulo 'app.js' una operación pública que permita actualizar el listado de las funciones,esto, a partir del nombre del cine y la fecha de la función (dados como parámetro). Para hacerlo, dicha operación debe invocar la operación 'getFunctionsByCinemaAndDate' del módulo 'apimock' provisto, enviándole como callback una función que:
          - Tome el listado de las funciones, y le aplique una función 'map' que convierta sus elementos a objetos con: el nombre, el género de la película y la hora de la                   función.
          - Sobre el listado resultante, haga otro 'map', que tome cada uno de estos elementos, y a través de jQuery agregue un elemento <tr> (con los respectvos <td>) a la                  tabla creada en el punto 4. Tenga en cuenta los selectores de jQuery y los tutoriales disponibles en línea. Por ahora no agregue botones a las filas generadas.

Asocie la operación antes creada (la de app.js) al evento 'on-click' del botón de consulta de la página.

Verifique el funcionamiento de la aplicación. Inicie el servidor, abra la aplicación HTML5/JavaScript, y rectifique que al ingresar un cine existente, y una fecha en donde estén agendadas funciones, se cargue el listado de funciones del mismo.
  
## Parte IV
A la página, agregue un elemento de tipo Canvas, con su respectivo identificador. Haga que sus dimensiones no sean demasiado grandes para dejar espacio para los otros componentes, pero lo suficiente para poder visualizar cómodamente los asientos de la sala.

Al módulo app.js agregue una operación que, dado el nombre de un cine, la fecha (con hora de la función "yyyy-mm-dd hh:mm"), y el nombre de la película dados como parámetros, haciendo uso del método getFunctionsByCinemaAndDate de apimock.js y de una función callback:

Consulte los asientos de la función correspondiente, y con los mismos dibuje la respectiva sala del cine, haciendo uso de los elementos HTML5 (Canvas, 2DContext, etc) disponibles* Actualice con jQuery el campodonde se muestra el nombre de la película de la función que se está viendo (si dicho campo no existe, agruéguelo al DOM).

Verifique que la aplicación ahora, además de mostrar el listado de las funciones del cine, permita seleccionar una de éstas y graficar su disponibilidad. Para esto, haga que en las filas generadas para el punto 5 incluyan en la última columna un botón con su evento de clic asociado a la operación hecha anteriormente (enviándo como parámetro los nombres correspondientes).

Verifique que la aplicación ahora permita: consultar las funciones de un cine y graficar la disponibilidad de asientos de aquella que se seleccione.
Una vez funcione la aplicación (sólo front-end), haga un módulo (llámelo 'apiclient') que tenga las mismas operaciones del 'apimock', pero que para las mismas use datos reales consultados del API REST. Para lo anterior revise cómo hacer peticiones GET con jQuery, y cómo se maneja el esquema de callbacks en este contexto.

Modifique el código de app.js de manera que sea posible cambiar entre el 'apimock' y el 'apiclient' con sólo una línea de código.
Revise la documentación y ejemplos de los estilos de Bootstrap (ya incluidos en el ejercicio), agregue los elementos necesarios a la página para que sea más vistosa, y más cercana al mock dado al inicio del enunciado.

