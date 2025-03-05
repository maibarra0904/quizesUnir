export const desarrollo = [
    {
        question: "¿Qué tipo de lenguaje es HTML?",
        options: {
            A: "Lenguaje de programación funcional.",
            B: "Lenguaje de marcas.",
            C: "Lenguaje de diseño gráfico.",
            D: "Lenguaje de programación orientada a objetos."
        },
        answer: "B",
        detail: "HTML es un lenguaje de marcas."
    },
    {
        question: "¿Qué es un elemento HTML vacío (o void element)?",
        options: {
            A: "Un elemento HTML que no tiene ningún atributo, pero sí contenido.",
            B: "Un elemento HTML que siempre tiene atributos, pero no contenido.",
            C: "Un elemento HTML que puede o no tener atributos y no tiene contenido. No necesita etiqueta de cierre.",
            D: "Un elemento HTML que puede o no tener atributos, y no tiene contenido. Necesita una etiqueta de cierre."
        },
        answer: "C",
        detail: "Un elemento HTML vacío no tiene contenido y no necesita etiqueta de cierre."
    },
    {
        question: "¿Qué entidad es la encargada de mantener los estándares de la web y lenguajes como HTML y CSS?",
        options: {
            A: "Google.",
            B: "The World Wide Web Consortium (W3C).",
            C: "Amazon Web Services.",
            D: "Facebook."
        },
        answer: "B",
        detail: "El W3C es responsable de los estándares de la web."
    },
    {
        question: "¿Cuál de los siguientes elementos HTML es correcto?",
        options: {
            A: "<a¡Error! Referencia de hipervínculo no válida...>",
            B: "<a href='http://www.misitio.com'></a>.",
            C: "<a value='http://www.misitio.com'>/a>.",
            D: "<a url='http://www.misitio.com'></a>."
        },
        answer: "B",
        detail: "La sintaxis correcta para un enlace es <a href='...'></a>."
    },
    {
        question: "¿Cuál header de los siguientes tiene mayor tamaño?",
        options: {
            A: "h3.",
            B: "h1.",
            C: "h5.",
            D: "h6."
        },
        answer: "B",
        detail: "El elemento h1 tiene el mayor tamaño."
    },
    {
        question: "Un elemento <div>, ¿es de tipo block o inline?",
        options: {
            A: "Block, únicamente si tiene contenido.",
            B: "Block, independientemente de su contenido.",
            C: "Inline, independientemente de su contenido.",
            D: "Inline, únicamente si no tiene contenido."
        },
        answer: "B",
        detail: "Un <div> es un elemento de tipo block siempre."
    },
    {
        question: "¿Qué entendemos por front-end?",
        options: {
            A: "La parte de una aplicación web visible únicamente por otras máquinas, no accesible para los usuarios.",
            B: "La parte de una aplicación web con la que los usuarios interactúan directamente, por eso se la conoce como “lado del cliente”.",
            C: "Unos diseños en papel que dejan ver la apariencia que tendrá la aplicación.",
            D: "Un prototipo de alta fidelidad."
        },
        answer: "B",
        detail: "El front-end es lo que los usuarios ven e interactúan."
    },
    {
        question: "¿Cuál es la forma correcta de referenciar un archivo CSS desde un documento HTML?",
        options: {
            A: "<style src='miEstilo.css'>.",
            B: "<link rel='stylesheet' href='miEstilo.css'>.",
            C: "<style='miEstilo.css'>.",
            D: "<stylesheet>miEstilo.css</stylesheet>."
        },
        answer: "B",
        detail: "La referencia correcta es con un <link>."
    },
    {
        question: "¿Dentro de qué elemento HTML debemos colocar la referencia a una hoja de estilos CSS?",
        options: {
            A: "<body>.",
            B: "<head>.",
            C: "<title>.",
            D: "Es indiferente."
        },
        answer: "B",
        detail: "Las hojas de estilo se colocan dentro del <head>."
    },
    {
        question: "¿Qué quiere decir la siguiente sentencia CSS?",
        options: {
            A: "La sentencia no es correcta.",
            B: "Todos los elementos <img> dentro de un elemento <td> cuyo atributo estilo sea abstracto, tendrán un borde sólido de 5 píxeles de color naranja oscuro.",
            C: "Todos los elementos <img> cuyo atributo estilo sea abstracto y estén dentro de un elemento <td> tendrán un borde sólido de 5 píxeles de color naranja oscuro.",
            D: "Todos los elementos <img> inmediatamente después de un elemento <td> cuyo atributo estilo sea abstracto tendrán un borde sólido de 5 píxeles de color naranja oscuro."
        },
        answer: "B",
        detail: "La sentencia CSS describe el estilo aplicado a <img> dentro de <td>."
    },
    {
        question: "Una cadena de texto (string) en JavaScript es:",
        options: {
            A: "Un objeto.",
            B: "Un tipo de dato básico.",
            C: "Lo mismo que un array.",
            D: "Todas las anteriores son falsas."
        },
        answer: "B",
        detail: "Las cadenas de texto son un tipo de dato básico."
    },
    {
        question: "¿Cómo debemos comparar la igualdad entre dos valores?",
        options: {
            A: "Con el operador triple igual.",
            B: "Con un único signo igual.",
            C: "Con el operador flecha.",
            D: "Con el método .isSameAs()."
        },
        answer: "A",
        detail: "El operador triple igual (===) compara sin hacer conversión de tipos."
    },
    {
        question: "¿Qué ocurre cuando igualamos una variable a null?",
        options: {
            A: "Nada en absoluto, javascript ignora esa línea de código.",
            B: "Estamos indicando explícitamente que dicha variable puede tener cualquier valor.",
            C: "Estamos dándole un valor al azar.",
            D: "Ninguna de las anteriores."
        },
        answer: "D",
        detail: "Igualar a null significa que la variable no tiene valor."
    },
    {
        question: "¿Qué símbolo se usa para notación exponencial?",
        options: {
            A: "Exp.",
            B: "Power.",
            C: "**.",
            D: "^."
        },
        answer: "C",
        detail: "El símbolo ** se usa para notación exponencial en JavaScript."
    },
    {
        question: "¿Qué permite una cadena de texto literal?",
        options: {
            A: "Una cadena de texto de un solo carácter.",
            B: "Una cadena de texto cuyo mensaje es siempre verdadero.",
            C: "Una cadena de texto vacía.",
            D: "Una cadena de texto que admite instrucciones JavaScript internamente."
        },
        answer: "D",
        detail: "Las cadenas de texto literales pueden contener JavaScript."
    },
    {
        question: "¿Qué símbolo se utiliza para indicar una cadena de texto literal?",
        options: {
            A: "Dobles comillas invertidas.",
            B: "Dobles comillas.",
            C: "Dos signos de admiración.",
            D: "Tres puntos suspensivos a cada lado."
        },
        answer: "A",
        detail: "Las cadenas de texto literales se indican con comillas invertidas."
    },
    {
        question: "JavaScript admite solo comillas dobles para indicar una cadena de texto:",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "B",
        detail: "JavaScript admite tanto comillas dobles como simples."
    },
    {
        question: "Las cadenas de texto admiten métodos:",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "A",
        detail: "Las cadenas de texto tienen métodos disponibles."
    },
    {
        question: "La asignación de valores por referencia:",
        options: {
            A: "Es lo mismo que la asignación directa.",
            B: "Se puede realizar con números enteros positivos.",
            C: "Se utiliza, por defecto, con objetos.",
            D: "No existe en JavaScript."
        },
        answer: "C",
        detail: "La asignación por referencia se aplica a objetos."
    },
    {
        question: "¿Qué significa NaN?",
        options: {
            A: "Not a Negation.",
            B: "Not and Neither.",
            C: "Not a Number.",
            D: "Ninguna de las anteriores."
        },
        answer: "C",
        detail: "NaN significa Not a Number."
    },
    {
        question: "¿Cómo podemos filtrar los contenidos de un array?",
        options: {
            A: "No es posible en JavaScript.",
            B: "Con el método filter(), el cual acepta como parámetro el número mínimo de elementos del array.",
            C: "Con el método filter().",
            D: "Con el método filter(), el cual acepta como parámetro el número máximo de elementos del array."
        },
        answer: "C",
        detail: "El método filter() se usa para filtrar arrays."
    },
    {
        question: "¿Qué devuelve Object.values(objeto)?",
        options: {
            A: "Undefined.",
            B: "Un array con todos los valores de las propiedades del objeto.",
            C: "Una cadena de texto con el número de propiedades del objeto.",
            D: "Un vector y sin inicializar."
        },
        answer: "B",
        detail: "Object.values devuelve un array de valores del objeto."
    },
    {
        question: "¿Qué símbolo indica una arrow function?",
        options: {
            A: "La palabra reservada function.",
            B: "{}.",
            C: "=>.",
            D: "Un tipo de bucle."
        },
        answer: "C",
        detail: "El símbolo => indica una función flecha."
    },
    {
        question: "¿Qué es un callback?",
        options: {
            A: "Una función llamada por otra función.",
            B: "Una función justamente con ese nombre; callback().",
            C: "Un método.",
            D: "Una propiedad de un array de cuatro elementos."
        },
        answer: "A",
        detail: "Un callback es una función que se pasa como argumento a otra función."
    },
    {
        question: "Los valores de las propiedades de un objeto:",
        options: {
            A: "Solo pueden ser números.",
            B: "Solo pueden ser cadenas de texto.",
            C: "Solo pueden ser otros objetos.",
            D: "Todas las anteriores son falsas."
        },
        answer: "D",
        detail: "Los valores de las propiedades pueden ser de diversos tipos."
    },
    {
        question: "Para referenciar a this dentro de un objeto:",
        options: {
            A: "El objeto tiene que ser siempre un array.",
            B: "Podemos usar una función definida por su nombre.",
            C: "Es imposible.",
            D: "Usamos el método definido como una función flecha."
        },
        answer: "B",
        detail: "Se puede referenciar a this usando una función."
    },
    {
        question: "Es imposible crear un objeto de manera no literal:",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "B",
        detail: "Se pueden crear objetos de manera no literal."
    },
    {
        question: "En JavaScript no hay parámetros por defecto en las funciones:",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "B",
        detail: "JavaScript admite parámetros por defecto."
    },
    {
        question: "El número de parámetros de una función:",
        options: {
            A: "Puede ser cero.",
            B: "Es siempre fijo e igual a 2.",
            C: "Es siempre fijo e igual a 2.",
            D: "Todas las afirmaciones anteriores son falsas."
        },
        answer: "A",
        detail: "Una función puede tener cero o más parámetros."
    },
    {
        question: "Los métodos forEach() y map():",
        options: {
            A: "Hacen exactamente lo mismo.",
            B: "Ambos devuelven valores derivados.",
            C: "Son distintos.",
            D: "Todas las afirmaciones anteriores son falsas."
        },
        answer: "C",
        detail: "forEach() no devuelve un nuevo array, mientras que map() sí."
    },

    {
        question: "¿Qué devuelve innerHTML?",
        options: {
            A: "El tipo de etiqueta del elemento sobre el que se invoca.",
            B: "El contenido HTML de un elemento.",
            C: "El contenido HTML del elemento como un string.",
            D: "Todas son Incorrectas."
        },
        answer: "B",
        detail: "innerHTML devuelve el contenido HTML de un elemento."
    },
    {
        question: "El DOM es:",
        options: {
            A: "Un Framework incluido en JQuery.",
            B: "Lo mismo que JQuery.",
            C: "Una librería incluida solo en Microsoft Internet Explorer 6.0.",
            D: "Todas son incorrectas."
        },
        answer: "D",
        detail: "El DOM es un concepto y no está relacionado con esos elementos."
    },
    {
        question: "¿Qué funcionalidad tiene el método createElement()?",
        options: {
            A: "Crea un nodo de tipo Element.",
            B: "Crea un nodo de tipo Attribute.",
            C: "Crea un nodo de tipo Text.",
            D: "Crea un nodo de tipo Math."
        },
        answer: "A",
        detail: "createElement() crea un nodo de tipo Element."
    },
    {
        question: "¿Para qué sirve el selector #?",
        options: {
            A: "Para seleccionar todos los elementos a partir de un identificador que se supone único. Si hubiese más de un elemento con dicho identificador, se devuelve el primero que encuentre.",
            B: "Para seleccionar todos los elementos a partir de un identificador que se supone único. Si hubiese más de un elemento con dicho identificador, se devuelve el último que se encuentre.",
            C: "Para seleccionar el primer elemento con un identificador único precedido por el símbolo #.",
            D: "Para seleccionar todos los elementos a partir de un identificador que se supone único. Si hubiese más de un elemento con dicho identificador, se devuelven todos."
        },
        answer: "C",
        detail: "El selector # se usa para seleccionar un único elemento por su ID."
    },
    {
        question: "¿Qué permite JSDOM?",
        options: {
            A: "Trabajar con el DOM en el Netscape Navigator 2.0.",
            B: "Trabajar con el DOM en programas escritos en Java.",
            C: "Trabajar con el DOM en JavaScript.",
            D: "Trabajar con el DOM en programas escritos en Node.js."
        },
        answer: "D",
        detail: "JSDOM permite trabajar con el DOM en entornos Node.js."
    },
    {
        question: "Para buscar elementos en el DOM es necesario usar el framework JQuery:",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "B",
        detail: "No es necesario usar JQuery para buscar elementos en el DOM."
    },
    {
        question: "¿Qué parámetro recibe el método getElementsByTagName?",
        options: {
            A: "El ID de cada uno de los elementos, ordenados en un array de cadenas de texto.",
            B: "La etiqueta de los elementos HTML que se quieren recuperar.",
            C: "Ninguno.",
            D: "Todas son incorrectas."
        },
        answer: "B",
        detail: "getElementsByTagName recibe la etiqueta de los elementos HTML."
    },
    {
        question: "¿Cuántos tipos de nodos hay descritos por el DOM?",
        options: {
            A: "8.",
            B: "4, principalmente.",
            C: "1.",
            D: "1."
        },
        answer: "B",
        detail: "El DOM describe 4 tipos principales de nodos."
    },
    {
        question: "¿Qué organismo vela por el estado y revisiones del DOM?",
        options: {
            A: "Microsoft.",
            B: "Apple y Google.",
            C: "ISO, DIN y ECMA.",
            D: "Todas las anteriores."
        },
        answer: "D",
        detail: "Varios organismos velan por el estado del DOM, incluyendo ISO, DIN y ECMA."
    },
    {
        question: "¿Qué es React?",
        options: {
            A: "Un framework para JavaScript.",
            B: "Una librería para JavaScript.",
            C: "Un lenguaje de programación.",
            D: "Un superset de JavaScript."
        },
        answer: "B",
        detail: "React es una librería para construir interfaces de usuario."
    },
    {
        question: "¿Qué es JSX?",
        options: {
            A: "Un superset de JavaScript.",
            B: "Una extensión de la sintaxis de JavaScript (azúcar sintáctico) que facilita el trabajo a la hora de usar React, ya que permite hacer uso de etiquetas HTML e intercalarlo con código JavaScript, el cual es necesario instalar, ya que no se incluye en la distribución oficial de React.",
            C: "Una extensión de la sintaxis de JavaScript (azúcar sintáctico) que facilita el trabajo a la hora de usar React, que permite hacer uso de etiquetas HTML e intercalarlo con código JavaScript, incluido en la propia distribución de React.",
            D: "Un lenguaje de programación."
        },
        answer: "C",
        detail: "JSX es una extensión que permite mezclar HTML con JavaScript en React."
    },
    {
        question: "¿A qué puerto debemos hacer referencia, por defecto, para acceder a una aplicación hecha con React desplegada en una máquina?",
        options: {
            A: "21.",
            B: "3000.",
            C: "53.",
            D: "8080."
        },
        answer: "B",
        detail: "El puerto por defecto para aplicaciones React es 3000."
    },
    {
        question: "¿Cuál de los siguientes comandos crearía un nuevo proyecto con React?",
        options: {
            A: "npm create-react-app nombreProyecto.",
            B: "npx create-react-app nombreProyecto.",
            C: "node create-react-app nombreProyecto.",
            D: "nodejs create-react-app nombreProyecto."
        },
        answer: "B",
        detail: "El comando correcto es npx create-react-app."
    },
    {
        question: "¿Qué es un componente en React?",
        options: {
            A: "Cualquier tipo de función en JavaScript.",
            B: "Trazos de código reutilizables que permiten separar la interfaz de usuario en varias partes, los cuales se mantienen y evolucionan de forma independiente.",
            C: "En React no existe el concepto de componente.",
            D: "Trazos de código reutilizables que permiten tener localizada la integración con un tercero, como podría ser una API o una base de datos."
        },
        answer: "B",
        detail: "Un componente es una parte reutilizable de la interfaz de usuario."
    },
    {
        question: "¿Cuántos componentes puede tener una aplicación hecha con React?",
        options: {
            A: "Un máximo de 10.",
            B: "No hay límite, siempre que no haya problemas de memoria.",
            C: "Un máximo de 1000.",
            D: "Un máximo de 10 000."
        },
        answer: "B",
        detail: "No hay límite en la cantidad de componentes en React."
    },
    {
        question: "¿Qué es un custom hook?",
        options: {
            A: "Una función que permite asociar a un componente funcional una serie de funcionalidades propias de React o definidas por el usuario.",
            B: "Una función que hace uso de otros hooks dentro de bucles.",
            C: "Una función que hace uso de otros hooks dentro de sentencias condicionales.",
            D: "Una función que permite asociar a un componente funcional una serie de funcionalidades propias de React o definidas por el usuario, siempre que la función tenga por objetivo realizar llamadas a una API o acceder a los datos de una base de datos."
        },
        answer: "A",
        detail: "Un custom hook es una función que encapsula lógica reutilizable en componentes."
    },
    {
        question: "¿Cuál es la función principal del hook de estado?",
        options: {
            A: "En React los componentes no tienen estado.",
            B: "Definir el estado de un componente funcional mediante el uso de una o varias variables de estado y una función asociada a cada una, para modificar su valor. La modificación de una de estas variables resultará en una renderización del componente.",
            C: "Definir constantes con valores inmutables a lo largo de todo el ciclo de vida de la aplicación.",
            D: "Definir el estado de un componente funcional mediante el uso de una o diversas variables de estado y una función asociada a cada una para modificar su valor. Para que el componente vuelva a renderizarse, debe producirse un cambio en todas las variables de estado del componente a la vez."
        },
        answer: "B",
        detail: "El hook de estado permite gestionar el estado en componentes funcionales."
    },
    {
        question: "¿Cuántas veces se ejecutaría el código de un hook de efecto si su segundo parámetro es un array vacío?",
        options: {
            A: "Siempre que se renderice el componente.",
            B: "1.",
            C: "Infinitas.",
            D: "No se ejecutaría nunca."
        },
        answer: "B",
        detail: "El código del hook de efecto se ejecuta una vez al montarse el componente."
    },
    {
        question: "Dada la siguiente declaración de Route ¿cuáles de los siguientes paths harían que se renderizase el componente?",
        options: {
            A: "/Pizza/carbonara",
            B: "/Pizza/carbonara/ingredientes",
            C: "/pizza/",
            D: "/Pizza"
        },
        answer: "D",
        detail: "El path /Pizza es el que coincide para renderizar el componente."
    },
    {
        "question": "¿Con cuál de los siguientes componentes de un back-end puede interactuar un usuario de forma directa?",
        "options": {
            A: "Las bases de datos.",
            B: "Los servidores de correo.",
            C: "Los servidores DNS.",
            D: "Ninguna."
         },
        "answer": "D",
         "detail": "Un usuario no interactúa directamente con los componentes del back-end [1]."
    },
    {
        question: "¿Cuáles de los siguientes frameworks están especialmente diseñados para el back-end?",
        options: {
            A: "A. Laravel.",
            B: "B. Spring.",
            C: "C. Angular js.",
            D: "D. a y b"
        },
        answer: "D",
        detail: "**Laravel** y **Spring** son frameworks diseñados para el back-end."
    },
    {
        question: "¿Cuál es la finalidad del lenguaje WSDL?",
        options: {
            A: "A. Indicar en qué dirección está disponible un servicio web.",
            B: "B. Indicar cuáles son las operaciones que puedo realizar en servicio web, así como sus entradas y salidas.",
            C: "Ninguna",
            D: "A. y B."
        },
        answer: "D",
        detail: "El lenguaje WSDL se usa para indicar la dirección de un servicio web y las operaciones que se pueden realizar, incluyendo sus entradas y salidas."
    },
    {
        question: "¿Qué aspectos de la comunicación describe un archivo WSDL?",
        options: {
            A: "Los tipos de datos empleados en todas las operaciones del servicio.",
            B: "El nombre del servicio.",
            C: "Los bindings.",
            D: "Todas las anteriores."
        },
        answer: "D",
        detail: "Un archivo WSDL describe los tipos de datos, el nombre del servicio y los bindings."
    },
    {
        question: "¿Cuáles son las partes obligatorias que cualquier mensaje que siga el protocolo SOAP debe tener?",
        options: {
            A: "A. Envelope.",
            B: "B. Header.",
            C: "C. Body.",
            D: "A. y C."
        },
        answer: "D",
        detail: "Las partes obligatorias de un mensaje SOAP son el Envelope y el Body."
    },
    {
        question: "¿Cuál es la función de la parte Fault de un mensaje que siga el protocolo SOAP?",
        options: {
            A: "Informar de los errores, si los hay.",
            B: "Informar de los warnings que hayan ocurrido durante la ejecución del servicio.",
            C: "Mostrar la lista de errores posibles para una operación de un servicio.",
            D: "No existe tal parte en el protocolo SOAP."
        },
        answer: "A",
        detail: "La parte Fault en un mensaje SOAP se usa para informar de los errores."
    },
    {
        question: "REST es por definición stateless.",
        options: {
            A: "Verdadero.",
            B: "Falso."
        },
        answer: "A",
        detail: "REST es stateless por definición."
    },
    {
        question: "¿Qué método HTTP deberíamos utilizar si queremos modificar un recurso parcialmente?",
        options: {
            A: "PUT.",
            B: "PATCH.",
            C: "UPDATE.",
            D: "POST."
        },
        answer: "B",
        detail: "Para modificar un recurso parcialmente, se debe usar el método HTTP **PATCH**."
    },
    {
        question: "¿Cuál es la diferencia entre PUT y POST?",
        options: {
            A: "PUT actualiza recursos, pero en ningún caso creará un recurso nuevo.",
            B: "POST se utiliza para crear nuevos recursos.",
            C: "Ambos.",
            D: "Ninguno."
        },
        answer: "C",
        detail: "**PUT** se usa para actualizar recursos, sin crear nuevos, mientras que **POST** se usa para crear nuevos recursos."
    },
    {
        question: "¿Qué código de respuesta HTTP deberíamos usar para indicar que la entrada recibida no es correcta?",
        options: {
            A: "401 Unauthorized.",
            B: "404 Not Found.",
            C: "400 Bad Request.",
            D: "403 Forbidden."
        },
        answer: "C",
        detail: "El código de respuesta **400 Bad Request** indica que la entrada recibida no es correcta."
    },
    {
        question: "Las siglas MVC significan:",
        options: {
            A: "Model View Control.",
            B: "Model View Controller.",
            C: "Modelador Vista Control.",
            D: "Modelado visual del controlador."
        },
        answer: "B",
        detail: "Las siglas MVC significan **Model View Controller**."
    },
    {
        question: "El componente del patrón MVC que recibe los datos y los incorpora a la web es:",
        options: {
            A: "El modelo.",
            B: "La vista.",
            C: "El controlador.",
            D: "Ninguno de los anteriores."
        },
        answer: "B",
        detail: "La **vista** es el componente del patrón MVC que recibe los datos y los incorpora a la web."
    },
    {
        question: "El componente del patrón MVC que se encarga de la lógica de control es:",
        options: {
            A: "El modelo.",
            B: "La vista.",
            C: "El controlador.",
            D: "Ninguno de los anteriores."
        },
        answer: "C",
        detail: "El **controlador** es el componente del patrón MVC que se encarga de la lógica de control."
    },
    {
        question: "El componente del patrón MVC que se encarga de la lógica de negocio es:",
        options: {
            A: "El modelo.",
            B: "La vista.",
            C: "El controlador.",
            D: "Ninguno de los anteriores."
        },
        answer: "A",
        detail: "El **modelo** es el componente del patrón MVC que se encarga de la lógica de negocio."
    },
    {
        question: "El componente del patrón MVC que debe asegurar que las conexiones a la base de datos se realizan correctamente y de forma segura es:",
        options: {
            A: "El modelo.",
            B: "La vista.",
            C: "El controlador.",
            D: "Ninguno de los anteriores."
        },
        answer: "A",
        detail: "El **modelo** es el componente del patrón MVC que debe asegurar que las conexiones a la base de datos se realizan correctamente y de forma segura."
    },
    {
        question: "Señala aquellas características propias de los sistemas distribuidos:",
        options: {
            A: "A. Fácil escalabilidad horizontal.",
            B: "B. Dependencia de un reloj global.",
            C: "C. Concurrencia real.",
            D: "A. y C."
        },
        answer: "D",
        detail: "Los sistemas distribuidos se caracterizan por ser **fáciles**, tener **escalabilidad horizontal** y **concurrencia real**."
    },
    {
        question: "En una arquitectura orientada a microservicios, ¿cuál es la función del servidor de registro?",
        options: {
            A: "Proveer al llamante de una dirección única sobre la cuál realizar sus consultas, a modo de proxy inverso.",
            B: "Redirigir las peticiones entrantes a los nodos con menos carga en un momento dado.",
            C: "Guardar una relación de los microservicios activos en un momento dado, en estas se incluye su dirección y puerto.",
            D: "No existe tal componente en una arquitectura orientada a microservicios."
        },
        answer: "C",
        detail: "El servidor de registro guarda una relación de los microservicios activos en un momento dado, incluyendo su dirección y puerto."
    },
    {
        question: "Eureka es utilizado para ayudarnos a implementar:",
        options: {
            A: "Un servidor de registro.",
            B: "Un servidor perimetral.",
            C: "Un servidor de configuración.",
            D: "Un servicio de gestión de logs."
        },
        answer: "A",
        detail: "**Eureka** se utiliza para implementar un servidor de registro."
    },
    {
        question: "La orquestación de microservicios:",
        options: {
            A: "Requiere de uno o varios componentes que actúen como orquestadores, en los cuales se indique el orden de las llamadas a realizar a los microservicios.",
            B: "Generan puntos únicos de fallo.",
            C: "Ambas.",
            D: "Ninguna."
        },
        answer: "C",
        detail: "La orquestación de microservicios requiere componentes orquestadores que indiquen el orden de las llamadas y puede generar puntos únicos de fallo."
    },
    {
        question: "La coreografía de microservicios:",
        options: {
            A: "Es lo mismo que la orquestación.",
            B: "Busca conseguir un alto acoplamiento entre los diferentes microservicios.",
            C: "Ayuda a construir flujos de trabajo asíncronos.",
            D: "Ayuda a construir flujos de trabajo síncronos."
        },
        answer: "C",
        detail: "La coreografía de microservicios ayuda a construir flujos de trabajo asíncronos."
    },
    {
        question: "Indica cuáles de las siguientes son características del lenguaje Java:",
        options: {
            a: "Es un lenguaje orientado a objetos.",
            b: "Soporta la programación multihilo.",
            c: "Las aplicaciones desarrolladas con él pueden ser ejecutadas en diferentes plataformas (Windows, Linux, etc) gracias a la máquina virtual de Java.",
            d: "Todas son correctas."
        },
        answer: "d",
        detail: "Todas son correctas."
    },
    {
        question: "¿Qué es Spring?",
        options: {
            a: "Un framework de código abierto para Java, orientado al desarrollo de aplicaciones empresariales.",
            b: "Una única librería que podemos incluir como dependencia externa de una aplicación hecha en Java.",
            c: "Un entorno de desarrollo integrado (IDE) para desarrollar aplicaciones empresariales con Java.",
            d: "Ninguna opción es correcta."
        },
        answer: "a",
        detail: "Un framework de código abierto para Java, orientado al desarrollo de aplicaciones empresariales."
    },
    {
        question: "Indica cuáles de los siguientes módulos forman parte del core container de Spring:",
        options: {
            a: "Beans.",
            b: "Core.",
            c: "Context.",
            d: "Todas."
        },
        answer: "d",
        detail: "Todas."
    },
    {
        question: "¿Qué es un bean en el contexto del framework Spring?",
        options: {
            a: "Un objeto Java gestionado por el contenedor de Spring.",
            b: "Un tipo de dato aplicable a los atributos de una clase.",
            c: "Un hilo de ejecución de una aplicación.",
            d: "Ninguna opción es correcta."
        },
        answer: "a",
        detail: "Un objeto Java gestionado por el contenedor de Spring."
    },
    {
        question: "Spring boot…",
        options: {
            a: "i) Incluye un conjunto de librerías denominadas starters que facilitan la integración con algunas tecnologías de terceros.",
            b: "ii) Facilita en gran medida la configuración de las dependencias de las aplicaciones.",
            c: "iii) Incluye dentro del JAR construido un servidor Tomcat, Jetty o undertow embebido que se utiliza para que la aplicación sea completamente autosuficiente.",
            d: "i) y iii)"
        },
        answer: "d",
        detail: "i) y iii)."
    },
    {
        question: "Spring Data…",
        options: {
            a: "Forma parte del core de Spring.",
            b: "Permite simplificar el acceso a diferentes orígenes de datos, el programador deberá encargarse de la declaración de interfaces y asumir la responsabilidad de generar las implementaciones.",
            c: "Soporta la integración con bases de datos relacionales y no relacionales.",
            d: "Todas las opciones son correctas."
        },
        answer: "c",
        detail: "Soporta la integración con bases de datos relacionales y no relacionales."
    },
    {
        question: "¿Qué nos indica la anotación @Component?",
        options: {
            a: "Que la clase anotada debe ser gestionada por Spring, por tanto, será un bean asociado al nivel de servicio.",
            b: "Que la clase anotada debe ser gestionada por Spring, por tanto, será un bean destinado a interceptar las peticiones HTTP entrantes.",
            c: "Que la clase anotada debe ser gestionada por Spring, por tanto, será un bean de tipo repository, que tendrá acceso a orígenes de datos.",
            d: "Que la clase anotada debe ser gestionada por Spring, por tanto, será un bean de tipo genérico."
        },
        answer: "d",
        detail: "Que la clase anotada debe ser gestionada por Spring, por tanto, será un bean de tipo genérico."
    },
    {
        question: "La inyección de dependencias en Spring puede darse a través:",
        options: {
            a: "De atributos de una clase.",
            b: "Del constructor de la clase.",
            c: "De interfaces.",
            d: "Todas las opciones son correctas."
        },
        answer: "d",
        detail: "Todas las opciones son correctas."
    },
    {
        question: "¿Qué nos permite conseguir Eureka?",
        options: {
            a: "i) Service discovery.",
            b: "ii) Abstracción de la localización física de los microservicios.",
            c: "iii) Disaster recovery.",
            d: "i) y ii)."
        },
        answer: "d",
        detail: "i) y ii)."
    },
    {
        question: "Un bean definido con el scope singleton:",
        options: {
            a: "i) Generará siempre una única instancia del objeto.",
            b: "ii) Generará una instancia del objeto por cada petición que se haga al contenedor de Spring.",
            c: "Ambas.",
            d: "Ninguna."
        },
        answer: "a",
        detail: "Generará siempre una única instancia del objeto."
    },
    {
        question: "¿Qué es Apache Lucene?",
        options: {
            a: "Una librería.",
            b: "Un sistema distribuido.",
            c: "Un motor de búsqueda.",
            d: "Un índice."
        },
        answer: "a",
        detail: "Una librería."
    },
    {
        question: "¿Cuál es el elemento más importante dentro de Lucene?",
        options: {
            a: "Su API REST.",
            b: "Los índices.",
            c: "Su fase de ingesta de datos.",
            d: "Su fase de consulta de datos."
        },
        answer: "b",
        detail: "Los índices."
    },
    {
        question: "Técnicamente, ¿podría comportarse Lucene como una base de datos?",
        options: {
            a: "Sí, como una base de datos relacional, aunque no se recomienda utilizar esta tecnología como una base de datos sino como un motor de indexación y búsqueda de datos.",
            b: "No, no es técnicamente posible.",
            c: "Sí, como una base de datos relacional. De hecho, Apache recomienda hacerlo.",
            d: "Sí, como una base de datos no relacional, aunque no se recomienda utilizar esta tecnología como una base de datos sino como un motor de indexación y búsqueda de datos."
        },
        answer: "d",
        detail: "Sí, como una base de datos no relacional, aunque no se recomienda utilizar esta tecnología como una base de datos sino como un motor de indexación y búsqueda de datos."
    },
    {
        question: "¿Qué es Elasticsearch?",
        options: {
            a: "Una librería.",
            b: "Un producto consistente en un servidor con un motor de analítica y búsqueda de datos.",
            c: "Un sistema distribuido.",
            d: "Uno de los componentes del Elastic Stack."
        },
        answer: "b",
        detail: "Un producto consistente en un servidor con un motor de analítica y búsqueda de datos."
    },
    {
        question: "Elasticsearch es capaz de tratar datos geoespaciales.",
        options: {
            a: "Verdadero.",
            b: "Falso."
        },
        answer: "a",
        detail: "Verdadero."
    },
    {
        question: "Elasticsearch dispone de varios tipos de dato para cadenas de texto:",
        options: {
            a: "Verdadero.",
            b: "Falso."
        },
        answer: "a",
        detail: "Verdadero."
    },
    {
        question: "Nos encontramos decidiendo el tipo de dato que utilizaremos para almacenar la sinopsis de una película en un índice de películas. Nuestra intención es poder realizar después búsquedas full-text sobre este campo. ¿Qué tipo de dato deberíamos utilizar?",
        options: {
            a: "Text.",
            b: "Keyword.",
            c: "Search as you type.",
            d: "No existe un tipo de dato para ese caso de uso."
        },
        answer: "a",
        detail: "Text."
    },
    {
        question: "Realizando un buscador de productos, nos han encargado que desarrollemos la funcionalidad necesaria para que, cuando el usuario escriba en la barra de búsqueda el comienzo del nombre de un producto, aparezca una lista de máximo 10 productos que empiezan por las letras introducidas. Queremos dejar del lado de Elasticsearch esta lógica. ¿Qué tipo de dato deberíamos utilizar?",
        options: {
            a: "Text.",
            b: "Keyword.",
            c: "Search as you type.",
            d: "No existe un tipo de dato para ese caso de uso."
        },
        answer: "c",
        detail: "Search as you type."
    },
    {
        question: "¿Cuál es la diferencia entre term y match a la hora de realizar una consulta a un índice en Elasticsearch?",
        options: {
            a: "Se recomienda utilizar term cuando el tipo de dato objetivo es keyword.",
            b: "Se recomienda utilizar term cuando el tipo de dato objetivo es text.",
            c: "Se recomienda utilizar match cuando el tipo de dato objetivo es keyword.",
            d: "Se recomienda utilizar term cuando el tipo de dato objetivo es search as you type."
        },
        answer: "a",
        detail: "Se recomienda utilizar term cuando el tipo de dato objetivo es keyword."
    },
    {
        question: "¿Qué librería utilizaremos para integrar una aplicación hecha con Spring con un clúster de Elasticsearch?",
        options: {
            a: "Spring Data Elasticsearch.",
            b: "Spring Elasticsearch.",
            c: "Springsearch.",
            d: "Spring Elastic."
        },
        answer: "a",
        detail: "Spring Data Elasticsearch."
    },
    {
        question: "¿Cuál de los siguientes no es un factor de la usabilidad según Jakob Nielsen?",
        options: {
            a: "Todas son factores de usabilidad.",
            b: "Facilidad de aprendizaje.",
            c: "Eficiencia de uso.",
            d: "Capacidad de recuerdo.",
            e: "Frecuencia de error.",
            f: "Satisfacción subjetiva."
        },
        answer: "a",
        detail: "Todas las opciones mencionadas son factores de usabilidad."
    },
    {
        question: "¿Qué establecen los principios generales de la usabilidad?",
        options: {
            a: "Establecen los puntos más importantes para lograr una mayor facilidad de uso.",
            b: "Establecen los puntos más importantes para lograr una mayor accesibilidad.",
            c: "Establecen los puntos a evitar para lograr una mayor facilidad de uso.",
            d: "Establecen los puntos más importantes para evitar una mayor facilidad de uso."
        },
        answer: "a",
        detail: "Los principios generales de usabilidad establecen los puntos más importantes para facilitar el uso."
    },
    {
        question: "¿Cuál de los siguientes no es un principio de usabilidad establecido por Nielsen?",
        options: {
            a: "Control y libertad del usuario.",
            b: "Limitación de los colores.",
            c: "Flexibilidad y eficiencia de uso.",
            d: "Ayuda y documentación."
        },
        answer: "b",
        detail: "La limitación de los colores no es un principio de usabilidad según Nielsen."
    },
    {
        question: "¿Cuál de los siguientes no es un principio de usabilidad establecido por Nielsen?",
        options: {
            a: "Estética y diseño minimalista.",
            b: "Ayudar a los usuarios a reconocer.",
            c: "Consistencia y estándares.",
            d: "Ocultación del estado del sistema."
        },
        answer: "d",
        detail: "La ocultación del estado del sistema no es un principio de usabilidad según Nielsen."
    },
    {
        question: "¿Quiénes han sido los diferentes autores explicados en este tema sobre los principios de usabilidad?",
        options: {
            a: "Norman y Nielsen.",
            b: "Nielsen, Sheiderman y Krug.",
            c: "Nielsen, Sheiderman y Norman.",
            d: "Ninguna de las anteriores."
        },
        answer: "b",
        detail: "Nielsen, Sheiderman y Krug son los autores mencionados sobre los principios de usabilidad."
    },
    {
        question: "¿Qué es el ROI en tecnología?",
        options: {
            a: "Es el incremento que se obtiene por cada producto vendido en tecnología durante un determinado tiempo.",
            b: "Es el beneficio que se obtiene por cada unidad monetaria invertida en tecnología durante un determinado tiempo. El retorno de la inversión realizada.",
            c: "Es el riesgo que se tiene al invertir en tecnología durante un determinado tiempo.",
            d: "Ninguna de las anteriores."
        },
        answer: "b",
        detail: "El ROI es el retorno de la inversión realizada en tecnología."
    },
    {
        question: "¿Cuáles son los tipos de cuestionarios más relevantes?",
        options: {
            a: "QUIS.",
            b: "WAMMI.",
            c: "QUIS y WAMMI.",
            d: "RENTI."
        },
        answer: "c",
        detail: "Los tipos de cuestionarios más relevantes son QUIS y WAMMI."
    },
    {
        question: "¿Cuál es el significado de QUIS?",
        options: {
            a: "Preguntas sobre la satisfacción de la interfaz de usuario.",
            b: "Question for User Interface Satisfaction.",
            c: "Ambas."
        },
        answer: "c",
        detail: "QUIS significa tanto preguntas sobre la satisfacción de la interfaz de usuario como 'Question for User Interface Satisfaction'."
    },
    {
        question: "¿Cuál es el principal propósito de un **enrutador** en una aplicación **frontend** desarrollada con React, según lo discutido en las fuentes?",
        options: {
          A: "Gestionar la comunicación con el **backend**.",
          B: "Definir qué componente se renderiza en función de la **URL** en el navegador.",
          C: "Almacenar y gestionar el **estado** de la aplicación.",
          D: "Aplicar estilos y dar formato a los componentes de la interfaz de usuario."
        },
        answer: "B",
        detail: "El principal propósito del **enrutador** es determinar qué componente de la interfaz de usuario se muestra al usuario basándose en la **URL** que visita en su navegador [1]."
      },
      {
        question: "En el contexto de **React Router**, ¿cómo se determina qué ruta coincide con la **URL** actual?",
        options: {
          A: "Comparando la **URL** con las rutas definidas de forma secuencial y eligiendo la primera coincidencia.",
          B: "Eligiendo la ruta que tenga el mayor número de segmentos en común con la **URL**.",
          C: "Utilizando una función de **hashing** para mapear la **URL** a una ruta específica.",
          D: "De forma aleatoria entre todas las rutas definidas."
        },
        answer: "A",
        detail: "Las rutas en **React Router** se comparan secuencialmente con la **URL**, y la primera ruta que coincide es la que se selecciona [1]."
      },
      {
        question: "Según se menciona en las fuentes sobre **React Router**, ¿las rutas son sensibles a mayúsculas y minúsculas (**case sensitive**)?",
        options: {
          A: "No, las rutas no distinguen entre mayúsculas y minúsculas.",
          B: "Sí, las rutas son estrictamente sensibles a mayúsculas y minúsculas.",
          C: "Depende de la configuración específica del **enrutador**.",
          D: "Solo la parte de los parámetros de la ruta es sensible a mayúsculas y minúsculas."
        },
        answer: "B",
        detail: "Las rutas en **React Router** son **case sensitive**, lo que significa que se distingue entre mayúsculas y minúsculas al hacer la coincidencia con la **URL** [2]."
      },
      {
        question: "¿Cuál es la función principal de **Eureka** en una arquitectura de **microservicios**?",
        options: {
          A: "Actuar como un **gateway** para todas las peticiones externas.",
          B: "Servir como un **servidor de registro** donde los **microservicios** se registran y pueden ser descubiertos por otros **servicios**.",
          C: "Gestionar la **configuración** centralizada de todos los **microservicios**.",
          D: "Almacenar de forma persistente los datos de todos los **microservicios**."
        },
        answer: "B",
        detail: "**Eureka** funciona como un **servidor de registro** (**service discovery**) donde los **microservicios** se registran y anuncian su ubicación, permitiendo que otros **servicios** los descubran [3-5]."
      },
      {
        question: "¿Qué información principal registran los **microservicios** en **Eureka**?",
        options: {
          A: "Su código fuente completo y la información de sus dependencias.",
          B: "Su nombre (**nombre de registro**), dirección **IP** y **puerto**.",
          C: "Las credenciales de seguridad para acceder a sus bases de datos.",
          D: "Los logs de ejecución y las métricas de rendimiento."
        },
        answer: "B",
        detail: "Los **microservicios** registran principalmente su **nombre de registro**, dirección **IP** y **puerto** en **Eureka** para que otros **servicios** puedan localizarlos [3, 6]."
      },
      {
        question: "¿Cómo se comunican los **microservicios** entre sí en un entorno donde se utiliza **Eureka** para el **descubrimiento de servicios**?",
        options: {
          A: "Directamente utilizando sus direcciones **IP** y **puertos** codificados.",
          B: "A través del **gateway**, que actúa como intermediario para todas las comunicaciones.",
          C: "Utilizando el **nombre de registro** del **microservicio** destino, permitiendo que **Eureka** resuelva su ubicación física.",
          D: "Mediante mensajes en colas gestionadas por **Eureka**."
        },
        answer: "C",
        detail: "Los **microservicios** se comunican utilizando el **nombre de registro** del **microservicio** al que desean acceder. **Eureka** se encarga de resolver la dirección **IP** y el **puerto** correspondientes [3]."
      },
      {
        question: "¿Cuál es la función principal de **Spring Cloud Gateway** en una arquitectura de **microservicios**?",
        options: {
          A: "Gestionar las bases de datos distribuidas de los **microservicios**.",
          B: "Actuar como un punto de entrada único (**gateway**) para todas las peticiones externas hacia los **microservicios**, enrutándolas al servicio apropiado.",
          C: "Implementar la lógica de negocio centralizada de la aplicación.",
          D: "Monitorizar la salud y el rendimiento de los **microservicios**."
        },
        answer: "B",
        detail: "**Spring Cloud Gateway** actúa como un **gateway**, un punto de entrada único para las peticiones externas, y se encarga de enrutarlas a los **microservicios** correspondientes [3, 4]."
      },
      {
        question: "¿Cómo construye **Spring Cloud Gateway** su **tabla de enrutamiento** en un entorno donde está integrado con **Eureka**?",
        options: {
          A: "Se configura manualmente con las rutas específicas de cada **microservicio**.",
          B: "Consulta directamente las definiciones de las **APIs REST** de cada **microservicio**.",
          C: "Automáticamente, utilizando la información de los **microservicios** registrados en **Eureka**.",
          D: "Utiliza un archivo de configuración centralizado que debe ser actualizado cada vez que se añade o modifica un **microservicio**."
        },
        answer: "C",
        detail: "**Spring Cloud Gateway** construye su **tabla de enrutamiento** de forma **automática** utilizando la información de los **microservicios** que están registrados en **Eureka** [7]."
      },
      {
        question: "Según las fuentes, ¿existe una relación directa entre el número de aplicaciones registradas en **Eureka** y el número de entradas en la **tabla de rutas** de **Cloud Gateway** cuando la configuración predeterminada está en uso?",
        options: {
          A: "No hay relación directa.",
          B: "El número de entradas en la **tabla de rutas** es generalmente menor que el número de aplicaciones registradas.",
          C: "Sí, generalmente hay una entrada en la **tabla de rutas** por cada aplicación registrada en **Eureka**.",
          D: "El número de entradas en la **tabla de rutas** es mayor que el número de aplicaciones registradas debido al balanceo de carga."
        },
        answer: "C",
        detail: "Generalmente, en la configuración predeterminada, hay una entrada en la **tabla de rutas** de **Cloud Gateway** por cada aplicación que está registrada en **Eureka** [8]."
      },
      {
        question: "En la **tabla de enrutamiento** de **Cloud Gateway**, ¿cómo se identifica a qué **microservicio** debe reenviarse una petición basada en la **URL**?",
        options: {
          A: "Analizando los **headers** específicos de la petición.",
          B: "Comparando la **ruta** de la petición con los patrones definidos, que suelen basarse en el **nombre de la aplicación** registrada en **Eureka**.",
          C: "Examinando el **body** de la petición para encontrar un identificador del **servicio**.",
          D: "Utilizando un puerto específico en la **URL** para cada **microservicio**."
        },
        answer: "B",
        detail: "La **tabla de enrutamiento** de **Cloud Gateway** utiliza el **path** de la petición, que generalmente incluye el **nombre de la aplicación** registrada en **Eureka**, para determinar a qué **microservicio** debe reenviarse la solicitud [9, 10]."
      },
      {
        question: "¿Qué componente de **Spring Cloud Gateway** se encarga de utilizar la información de **Eureka** para componer la **tabla de enrutamiento** de forma automática?",
        options: {
          A: "El **LoadBalancerClient**.",
          B: "El **DiscoveryClient**.",
          C: "El **DiscoveryLocator** (a través de la propiedad `spring.cloud.gateway.discovery.locator.enabled`).",
          D: "El **RouteLocatorBuilder**."
        },
        answer: "C",
        detail: "La propiedad `spring.cloud.gateway.discovery.locator.enabled` habilita el **DiscoveryLocator**, que es el componente encargado de componer automáticamente la **tabla de enrutamiento** utilizando la información de **Eureka** [7]."
      },
      {
        question: "Según se explica en las fuentes, ¿cuál es el puerto por defecto en el que se ejecuta **Spring Cloud Gateway**?",
        options: {
          A: "8080",
          B: "8082",
          C: "8761 (que suele ser el de Eureka Server)",
          D: "8762"
        },
        answer: "D",
        detail: "El puerto por defecto en el que se ejecuta **Spring Cloud Gateway** es el **8762** [10]."
      },
      {
        question: "Cuando **Spring Cloud Gateway** recibe una petición y la enruta a un **microservicio** a través de **Eureka**, ¿a qué dirección se dirige la petición?",
        options: {
          A: "Directamente a la dirección **IP** y **puerto** de una instancia específica del **microservicio**.",
          B: "Al **Load Balancer** gestionado por **Eureka** para ese **microservicio**, que luego distribuirá la carga entre sus instancias.",
          C: "A la dirección **IP** y **puerto** del servidor de **Eureka**.",
          D: "A una dirección **IP** y **puerto** configurados estáticamente en el **Gateway** para ese **microservicio**."
        },
        answer: "B",
        detail: "El **Gateway** redirige la petición al **Load Balancer** de **Eureka** para el **microservicio** destino, y es **Eureka** quien se encarga de balancear la carga entre las diferentes instancias disponibles [10]."
      },
      {
        question: "Si un **microservicio** tiene múltiples **instancias** registradas en **Eureka**, ¿cómo decide **Eureka** a qué instancia dirigir una petición a través del **Load Balancer**?",
        options: {
          A: "Utiliza un algoritmo de **round robin** por defecto.",
          B: "Siempre dirige la petición a la primera instancia que se registró.",
          C: "De forma aleatoria entre todas las instancias.",
          D: "Basándose en la carga actual de cada instancia (aunque esto puede ser simulado en el ejemplo)."
        },
        answer: "A",
        detail: "**Eureka** utiliza un algoritmo de **round robin** por defecto para balancear la carga entre las diferentes **instancias** de un **microservicio** [11]."
      },
      {
        question: "¿Qué ocurre con la **tabla de enrutamiento** de **Cloud Gateway** si una nueva **instancia** de un **microservicio** se registra en **Eureka**?",
        options: {
          A: "La **tabla de enrutamiento** debe actualizarse manualmente.",
          B: "La **tabla de enrutamiento** se actualiza automáticamente para incluir la nueva **instancia** (aunque la ruta general ya debería existir).",
          C: "Es necesario reiniciar el **Cloud Gateway** para que reconozca la nueva **instancia**.",
          D: "La nueva **instancia** no se tendrá en cuenta para el enrutamiento hasta la próxima versión de la aplicación."
        },
        answer: "B",
        detail: "La **tabla de enrutamiento** de **Cloud Gateway** se actualiza **automáticamente** cuando nuevas **instancias** de los **microservicios** se registran en **Eureka** [12]."
      },
      {
        question: "Según lo discutido en las fuentes, ¿es posible acceder a un **microservicio** directamente sin pasar por el **Cloud Gateway** en una arquitectura que utiliza ambos componentes?",
        options: {
          A: "No, todas las peticiones deben pasar siempre por el **Gateway**.",
          B: "Sí, los **microservicios** pueden comunicarse directamente entre sí utilizando sus **nombres de registro** y **Eureka** para la resolución de direcciones.",
          C: "Solo se puede acceder directamente a los **microservicios** desde la misma máquina virtual.",
          D: "Depende de la configuración de red específica."
        },
        answer: "B",
        detail: "Sí, los **microservicios** pueden comunicarse directamente entre sí utilizando sus **nombres de registro**, y **Eureka** les proporciona la ubicación física necesaria [3, 13]."
      },
      {
        question: "Según se menciona en las fuentes, ¿qué ocurre si se decide cambiar el nombre de un **endpoint** en un **microservicio** registrado en **Eureka** y se está utilizando **Cloud Gateway** con el **DiscoveryLocator** habilitado?",
        options: {
          A: "No tiene ningún impacto en el enrutamiento a través del **Gateway**.",
          B: "Es necesario actualizar manualmente la configuración de enrutamiento en el **Cloud Gateway**.",
          C: "Los clientes que accedan a través del **Gateway** seguirán utilizando el nombre anterior hasta que se reinicie el **Gateway**.",
          D: "Los cambios en los **endpoints** dentro del **microservicio** no afectan directamente la forma en que el **Gateway** enruta las peticiones al **servicio** basado en su nombre registrado en **Eureka**."
        },
        answer: "D",
        detail: "Cambiar el nombre de un **endpoint** dentro de un **microservicio** no afecta directamente la forma en que el **Cloud Gateway** enruta las peticiones al **servicio** basado en su nombre registrado en **Eureka**. El enrutamiento del **Gateway** se basa en el nombre del **servicio**, no en los **endpoints** internos [12]."
      },
      {
        question: "En el ejemplo de configuración de **Cloud Gateway** mostrado en las fuentes, ¿para qué se utiliza la propiedad `spring.cloud.gateway.discovery.locator.lower-case-service-id`?",
        options: {
          A: "Para convertir todos los **headers** de las peticiones a minúsculas.",
          B: "Para asegurar que los nombres de los **servicios** registrados en **Eureka** se conviertan a minúsculas al crear las rutas en el **Gateway**.",
          C: "Para que todas las rutas definidas manualmente en el **Gateway** sean en minúsculas.",
          D: "Para que la comunicación entre el **Gateway** y los **microservicios** se realice utilizando solo minúsculas en los nombres de los **servicios**."
        },
        answer: "B",
        detail: "La propiedad `spring.cloud.gateway.discovery.locator.lower-case-service-id` se utiliza para que las rutas generadas en la **tabla de enrutamiento** del **Gateway** sean en minúsculas, utilizando los nombres de los **servicios** de **Eureka** en ese formato [9]."
      },
      {
        question: "¿Qué representa el término '**instancia**' en el contexto de **microservicios** registrados en **Eureka**?",
        options: {
          A: "Una base de datos individual asociada a un **microservicio**.",
          B: "Una unidad de código fuente de un **microservicio**.",
          C: "Una ejecución en particular (un despliegue) de un **microservicio** que está activa y disponible para recibir peticiones.",
          D: "Una interfaz de usuario específica para interactuar con un **microservicio**."
        },
        answer: "C",
        detail: "Una '**instancia**' de un **microservicio** representa una ejecución específica de ese **servicio** que está en funcionamiento y puede procesar solicitudes [11, 15]."
      },
      {
        question: "¿Qué significa que un método HTTP sea idempotente?",
        options: {
          A: "Que siempre devuelve un resultado exitoso.",
          B: "Que no modifica el estado del servidor.",
          C: "Que realizar la misma operación repetidas veces produce el mismo efecto.",
          D: "Que solo puede ser utilizado con métodos seguros."
        },
        answer: "C",
        detail: "Un método es idempotente cuando las múltiples ejecuciones de la misma operación no generan cambios adicionales en el estado del servidor después de la primera ejecución exitosa."
      },
      {
        question: "¿Cuál de los siguientes métodos HTTP es idempotente?",
        options: {
          A: "GET",
          B: "POST",
          C: "PATCH",
          D: "CONNECT"
        },
        answer: "A",
        detail: "El método GET es idempotente porque solo lee datos del servidor y no modifica su estado."
      },
      {
        question: "¿Por qué el método DELETE se considera idempotente?",
        options: {
          A: "Porque elimina datos en cada operación.",
          B: "Porque siempre devuelve un estado 200.",
          C: "Porque eliminar el mismo recurso múltiples veces no cambia el estado del servidor después de la primera eliminación.",
          D: "Porque crea una nueva instancia cada vez que se ejecuta."
        },
        answer: "C",
        detail: "DELETE es idempotente porque eliminar un recurso que ya no existe no produce cambios adicionales en el servidor."
      },
      {
        question: "¿Qué método HTTP no es idempotente?",
        options: {
          A: "PUT",
          B: "GET",
          C: "DELETE",
          D: "POST"
        },
        answer: "D",
        detail: "POST no es idempotente porque puede crear múltiples recursos si se ejecuta varias veces."
      },
      {
        question: "¿Cuál es la principal diferencia entre PUT y POST en términos de idempotencia?",
        options: {
          A: "PUT modifica un recurso existente y POST crea un nuevo recurso.",
          B: "PUT es idempotente y POST no lo es.",
          C: "PUT solo funciona con datos JSON y POST con datos XML.",
          D: "PUT nunca requiere autenticación, mientras que POST sí."
        },
        answer: "B",
        detail: "PUT es idempotente porque sobrescribe el recurso completo, mientras que POST no lo es porque cada solicitud puede generar un nuevo recurso."
      },
      {
        question: "¿Qué sucede si se ejecuta varias veces un método PUT con los mismos datos?",
        options: {
          A: "Crea múltiples recursos nuevos.",
          B: "Sobrescribe el recurso existente sin cambios adicionales en el servidor.",
          C: "Elimina los datos originales del recurso.",
          D: "Genera un error en el servidor."
        },
        answer: "B",
        detail: "PUT sobrescribe el recurso con los mismos datos y no produce cambios adicionales después de la primera operación."
      },
      {
        question: "¿Por qué el método PATCH no se considera idempotente?",
        options: {
          A: "Porque modifica parcialmente el recurso y cada ejecución puede generar un resultado diferente dependiendo del estado previo.",
          B: "Porque elimina completamente el recurso.",
          C: "Porque es inseguro y no garantiza la coherencia de los datos.",
          D: "Porque crea nuevos recursos en cada operación."
        },
        answer: "A",
        detail: "PATCH no es idempotente porque las modificaciones parciales pueden depender del estado actual del recurso, lo que genera resultados diferentes en ejecuciones repetidas."
      },
      {
        question: "¿Cuál de los siguientes métodos es tanto seguro como idempotente?",
        options: {
          A: "OPTIONS",
          B: "POST",
          C: "GET",
          D: "DELETE"
        },
        answer: "C",
        detail: "GET es un método tanto seguro como idempotente porque no modifica el estado del servidor y puede ejecutarse varias veces con el mismo resultado."
      },
      {
        question: "¿Qué característica distingue a un método HTTP seguro?",
        options: {
          A: "No modifica el estado del servidor.",
          B: "Es utilizado únicamente con conexiones HTTPS.",
          C: "Siempre requiere autenticación.",
          D: "No devuelve códigos de error."
        },
        answer: "A",
        detail: "Un método seguro como GET no altera el estado del servidor, simplemente recupera datos."
      },
      {
        question: "Si una solicitud DELETE se envía dos veces, ¿qué ocurrirá?",
        options: {
          A: "El recurso se eliminará dos veces, generando un error.",
          B: "El estado del servidor no cambiará después de la primera eliminación.",
          C: "Se creará automáticamente un nuevo recurso como reemplazo.",
          D: "La segunda solicitud quedará en espera de confirmación."
        },
        answer: "B",
        detail: "DELETE es idempotente, por lo que eliminar un recurso inexistente no genera cambios adicionales en el servidor."
      },
      {
        question: "¿Qué función principal cumple el Gateway en un sistema de microservicios?",
        options: {
          A: "Registrar aplicaciones en Eureka.",
          B: "Balancear la carga entre servidores.",
          C: "Actuar como un enrutador que recibe solicitudes y las redirige a los servicios correspondientes.",
          D: "Administrar bases de datos distribuidas."
        },
        answer: "C",
        detail: "El Gateway actúa como un enrutador central que gestiona solicitudes entrantes y las dirige a los microservicios registrados en Eureka."
      },
      {
        question: "¿Qué sucede si una aplicación deja de enviar 'heartbeats' a Eureka?",
        options: {
          A: "La aplicación se elimina del registro de Eureka.",
          B: "El Gateway sigue redirigiendo solicitudes a la aplicación.",
          C: "Se genera un error crítico en el sistema.",
          D: "La aplicación entra en modo de solo lectura."
        },
        answer: "A",
        detail: "Si una aplicación deja de enviar 'heartbeats', Eureka la elimina del registro, indicando que ya no está disponible."
      },
      {
        question: "¿Qué determina el número de rutas en la tabla de rutas del Gateway?",
        options: {
          A: "La cantidad de instancias activas en Eureka.",
          B: "La cantidad de aplicaciones registradas en Eureka.",
          C: "La cantidad de solicitudes que recibe el Gateway.",
          D: "El número de nodos en el clúster de Eureka."
        },
        answer: "B",
        detail: "La tabla de rutas del Gateway tiene una entrada por cada aplicación registrada en Eureka."
      },
      {
        question: "¿Cómo realiza el Gateway el balanceo de carga?",
        options: {
          A: "Mediante un proxy interno.",
          B: "Distribuyendo las solicitudes entre las instancias disponibles de una aplicación registrada en Eureka.",
          C: "Utilizando scripts configurados manualmente.",
          D: "Enviando todas las solicitudes a una única instancia activa."
        },
        answer: "B",
        detail: "El Gateway utiliza la información de Eureka para distribuir solicitudes entre las instancias disponibles de un servicio, logrando un balance de carga eficiente."
      },
      {
        question: "¿Qué sucede si una aplicación registrada en Eureka tiene múltiples instancias?",
        options: {
          A: "El Gateway ignora las instancias adicionales.",
          B: "Eureka solo registra la primera instancia.",
          C: "El Gateway utiliza el balanceo de carga para distribuir solicitudes entre las instancias.",
          D: "Se genera una entrada de tabla para cada instancia en el Gateway."
        },
        answer: "C",
        detail: "Cuando hay múltiples instancias de una aplicación, el Gateway realiza balanceo de carga para distribuir solicitudes entre ellas."
      },
      {
        question: "¿Qué sucede con las rutas del Gateway si una aplicación se elimina de Eureka?",
        options: {
          A: "La ruta correspondiente se elimina automáticamente del Gateway.",
          B: "La ruta permanece activa indefinidamente.",
          C: "Se genera un error en todas las solicitudes a esa aplicación.",
          D: "El Gateway redirige las solicitudes a una ruta predeterminada."
        },
        answer: "A",
        detail: "El Gateway actualiza su tabla de rutas en tiempo real y elimina las rutas asociadas a aplicaciones que ya no están registradas en Eureka."
      },
      {
        question: "¿Cuál es la relación entre las instancias y las aplicaciones registradas en Eureka?",
        options: {
          A: "Cada instancia representa una aplicación distinta.",
          B: "Varias instancias pueden pertenecer a la misma aplicación.",
          C: "Las instancias no están relacionadas con las aplicaciones.",
          D: "Eureka solo registra una instancia por aplicación."
        },
        answer: "B",
        detail: "Varias instancias pueden pertenecer a la misma aplicación, lo que permite distribuir la carga y aumentar la disponibilidad."
      },
      {
        question: "¿Qué propósito cumple el 'heartbeat' en Eureka?",
        options: {
          A: "Permite al Gateway redirigir solicitudes.",
          B: "Confirma que una instancia está activa y disponible.",
          C: "Elimina rutas redundantes en el Gateway.",
          D: "Genera nuevas instancias de una aplicación."
        },
        answer: "B",
        detail: "El 'heartbeat' es una señal que las instancias envían periódicamente a Eureka para informar que están activas y disponibles."
      },
      {
        question: "¿Cómo responde el Gateway si una solicitud se dirige a una ruta que no existe?",
        options: {
          A: "Redirige a una ruta predeterminada.",
          B: "Devuelve un error 404.",
          C: "Crea automáticamente una nueva ruta.",
          D: "Intenta registrar la ruta en Eureka."
        },
        answer: "B",
        detail: "Cuando una solicitud se dirige a una ruta inexistente, el Gateway devuelve un error 404 indicando que el recurso no fue encontrado."
      },
      {
        question: "¿Qué herramienta utiliza el Gateway para descubrir servicios disponibles?",
        options: {
          A: "Un servidor de base de datos.",
          B: "El registro de servicios de Eureka.",
          C: "Un balanceador de carga dedicado.",
          D: "Archivos de configuración locales."
        },
        answer: "B",
        detail: "El Gateway se basa en el registro de Eureka para descubrir qué servicios están disponibles y cómo enrutar solicitudes hacia ellos."
      },
      {
        question: "¿Qué se necesita para que una aplicación aparezca en la tabla de rutas del Gateway?",
        options: {
          A: "Que registre al menos una instancia en Eureka.",
          B: "Que configure manualmente una ruta en el Gateway.",
          C: "Que envíe solicitudes directamente al Gateway.",
          D: "Que tenga múltiples instancias activas."
        },
        answer: "A",
        detail: "Para aparecer en la tabla de rutas del Gateway, la aplicación debe registrar al menos una instancia activa en Eureka."
      },
      {
        question: "¿Qué indica una entrada en la tabla de rutas del Gateway?",
        options: {
          A: "El número total de usuarios concurrentes.",
          B: "Que existe una aplicación registrada en Eureka.",
          C: "Que una instancia está configurada manualmente.",
          D: "Que todas las rutas son predeterminadas."
        },
        answer: "B",
        detail: "Cada entrada en la tabla de rutas del Gateway indica la existencia de una aplicación registrada en Eureka."
      },
      {
        question: "¿Qué ocurre si el Gateway no puede comunicarse con Eureka?",
        options: {
          A: "El Gateway sigue utilizando la última configuración válida.",
          B: "El Gateway elimina todas las rutas configuradas.",
          C: "El sistema se reinicia automáticamente.",
          D: "Todas las solicitudes al Gateway se redirigen a una aplicación predeterminada."
        },
        answer: "A",
        detail: "Si el Gateway pierde comunicación con Eureka, utiliza la última configuración conocida hasta que se restablezca la conexión."
      },
      {
        question: "¿Qué protocolo utiliza Eureka para registrar y descubrir servicios?",
        options: {
          A: "HTTP/REST",
          B: "SOAP",
          C: "gRPC",
          D: "FTP"
        },
        answer: "A",
        detail: "Eureka utiliza HTTP/REST para el registro y descubrimiento de servicios, permitiendo que aplicaciones se comuniquen de manera eficiente."
      },
      {
        question: "¿Qué ocurre si todas las instancias de una aplicación registrada en Eureka están inactivas?",
        options: {
          A: "El Gateway elimina automáticamente la ruta asociada.",
          B: "Eureka mantiene la aplicación registrada pero marca sus instancias como inactivas.",
          C: "Las solicitudes se redirigen a otra aplicación.",
          D: "El Gateway genera un error 500 en todas las solicitudes."
        },
        answer: "B",
        detail: "Eureka mantiene la aplicación registrada pero marca todas sus instancias como inactivas, lo que impide que el Gateway redirija solicitudes a estas."
      }
];