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
    }
];