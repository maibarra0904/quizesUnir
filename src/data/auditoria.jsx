export const auditoria = [
    {
        question: "Indica cuál de las siguientes respuestas no es una causa de aparición de vulnerabilidades en el software:",
        options: {
            A: "No realización de pruebas de seguridad basadas en riesgo.",
            B: "Cambios de requisitos del proyecto durante la etapa de especificación.",
            C: "Mezcla de código proveniente de varios orígenes.",
            D: "Tamaño excesivo y complejidad de las aplicaciones."
        },
        answer: "B",
        detail: "Cambios de requisitos del proyecto durante la etapa de especificación."
    },
    {
        question: "Indica la respuesta incorrecta respecto al ataque a las aplicaciones durante las diferentes fases de su ciclo de vida:",
        options: {
            A: "Distribución e instalación. Ocurre cuando el instalador del software bastiona la plataforma en la que lo instala.",
            B: "Desarrollo. Un desarrollador puede alterar de forma intencionada o no el software bajo desarrollo.",
            C: "Operación. Cualquier software que se ejecuta en una plataforma conectada a la red tiene sus vulnerabilidades expuestas durante su funcionamiento. El nivel de exposición variará dependiendo de si la red es privada o pública, conectada o no a Internet, y si el entorno de ejecución del software ha sido configurado para minimizar sus vulnerabilidades.",
            D: "Mantenimiento o sostenimiento. No publicación de parches de las vulnerabilidades detectadas en el momento oportuno o incluso introducción de código malicioso por el personal de mantenimiento en las versiones actualizadas del código."
        },
        answer: "A",
        detail: "Distribución e instalación. Ocurre cuando el instalador del software bastiona la plataforma en la que lo instala."
    },
    {
        question: "Señala la respuesta incorrecta. Las fuentes de las vulnerabilidades se deben a:",
        options: {
            A: "Fallos provenientes de la codificación de los diseños del software realizados.",
            B: "Fallos provenientes de la cadena de distribución del software.",
            C: "Los sistemas hardware o software contienen frecuentemente fallos de diseño que pueden ser utilizados para realizar un ataque.",
            D: "La instalación de software por defecto implica, por lo general, la instalación de servicios que no se usan, pero que pueden presentar debilidades que comprometan la máquina."
        },
        answer: "B",
        detail: "Fallos provenientes de la cadena de distribución del software."
    },
    {
        question: "Señala la respuesta incorrecta. Entre las técnicas y mecanismos para salvaguardar la integridad tenemos, por ejemplo:",
        options: {
            A: "Identificación del modo de trasmisión y procesado de los datos por la aplicación.",
            B: "Uso de arquitecturas de alta disponibilidad, con diferentes tipos de redundancias.",
            C: "Uso de firma digital.",
            D: "Estricta gestión de sesiones."
        },
        answer: "B",
        detail: "Uso de arquitecturas de alta disponibilidad, con diferentes tipos de redundancias."
    },
    {
        question: "Señala la respuesta incorrecta. Algunas de las opciones específicas de diseño del software que lo simplifican son:",
        options: {
            A: "Favorecer procesos deterministas sobre los no deterministas.",
            B: "Limitar el número de estados posibles en el software.",
            C: "El uso de técnicas de interrupciones en lugar de sondeo.",
            D: "Desacoplar los componentes y procesos para minimizar las interdependencias entre ellos."
        },
        answer: "C",
        detail: "El uso de técnicas de interrupciones en lugar de sondeo."
    },
    {
        question: "Para conseguir que el desarrollo de una aplicación posea las propiedades y principios de diseño del software seguro, se necesita que el personal de diseño y desarrollo lleve a cabo:",
        options: {
            A: "Perspectiva administrador.",
            B: "Perspectiva defensor.",
            C: "Perspectiva usuario.",
            D: "Perspectiva atacante."
        },
        answer: "D",
        detail: "Perspectiva atacante."
    },
    {
        question: "¿Cómo se define la resiliencia?",
        options: {
            A: "Capacidad de resistencia y tolerancia a los ataques realizados por los agentes maliciosos (malware, hackers, etc.).",
            B: "Capacidad que garantiza la posibilidad de imputar las acciones relacionadas en un software a la persona, entidad o proceso que la ha originado.",
            C: "Capacidad del software para aislar, contener y limitar los daños ocasionados por fallos causados por ataques de vulnerabilidades explotable del mismo, recuperarse lo más rápido posible de ellos y reanudar su operación en o por encima de cierto nivel mínimo predefinido de servicio aceptable en un tiempo oportuno.",
            D: "Capacidad del software para «tolerar» los errores y fallos que resultan de ataques con éxito y seguir funcionando como si los ataques no se hubieran producido."
        },
        answer: "C",
        detail: "Capacidad del software para aislar, contener y limitar los daños."
    },
    {
        question: "¿A qué principio de diseño le corresponde la siguiente afirmación? «Estrategia de protección consistente en introducir múltiples capas de seguridad, que permitan reducir la probabilidad de compromiso en caso de que una de las capas falle y en el peor de los casos minimizar el impacto».",
        options: {
            A: "Seguridad por defecto.",
            B: "Separación de privilegios.",
            C: "Separación de dominios.",
            D: "Defensa en profundidad."
        },
        answer: "D",
        detail: "Defensa en profundidad."
    },
    {
        question: "Señalar la respuesta incorrecta. Los elementos clave de un proceso de S-SDLC son:",
        options: {
            A: "Gestión de configuración versiones.",
            B: "Pruebas de seguridad.",
            C: "Hitos de control en las fases del SDLC.",
            D: "Despliegue y distribución."
        },
        answer: "D",
        detail: "Despliegue y distribución."
    },
    {
        question: "Señala la respuesta incorrecta. El cálculo de código CVSS se realiza en base a tres tipos de métricas ambientales:",
        options: {
            A: "Métricas estadísticas.",
            B: "Métricas base.",
            C: "Métricas temporales.",
            D: "Métricas ambientales."
        },
        answer: "A",
        detail: "Métricas estadísticas."
    },
    {
        question: "Señala la respuesta correcta. ¿Qué incluye la seguridad del software?",
        options: {
            A: "Patrones de codificación.",
            B: "Principios de diseño seguro.",
            C: "Casos de uso.",
            D: "Buenas prácticas de codificación."
        },
        answer: "B",
        detail: "Principios de diseño seguro."
    },
    {
        question: "Señala la respuesta correcta. Los patrones de ataque en la fase de diseño y arquitectura:",
        options: {
            A: "Ayudan a definir el comportamiento del sistema para prevenir o reaccionar ante otros ataques.",
            B: "Específicas debilidades no aprovechadas por los ataques, orientando que técnicas o prácticas de seguridad de desarrollo que evitan estas deficiencias.",
            C: "Proporcionan el contexto de las amenazas al que el software se va a enfrentar.",
            D: "Proporcionan ejemplos de ataques que no aprovechan las vulnerabilidades de la arquitectura elegida."
        },
        answer: "C",
        detail: "Proporcionan el contexto de las amenazas al que el software se va a enfrentar."
    },
    {
        question: "Señala la respuesta correcta. Respecto a los casos de uso de seguridad:",
        options: {
            A: "Analizan y especifican los requisitos de seguridad funcionales.",
            B: "Analizan y especifican las amenazas a la seguridad.",
            C: "Análisis de vulnerabilidades de activos y amenazas.",
            D: "Análisis forense de las actividades maliciosas."
        },
        answer: "A",
        detail: "Analizan y especifican los requisitos de seguridad funcionales."
    },
    {
        question: "Respecto a la ingeniería de requisitos de seguridad, esta NO incluye:",
        options: {
            A: "Requisitos de software seguro. Requisitos que afectan directamente a la probabilidad de que el software sea seguro.",
            B: "Requisitos servicios de seguridad.",
            C: "Los requerimientos no funcionales de seguridad deben especificar: restricciones que el software implementar para poder evitar ataques.",
            D: "Los requerimientos no funcionales de seguridad deben especificar: los controles y normas que rigen los procesos de desarrollo, implementación y operación del software."
        },
        answer: "D",
        detail: "Los requerimientos no funcionales de seguridad deben especificar: los controles y normas que rigen los procesos de desarrollo."
    },
    {
        question: "¿Cuál de estas opciones NO forma parte de los tres pasos básicos del análisis de riesgo arquitectónico?",
        options: {
            A: "Análisis de ambigüedad.",
            B: "Análisis de resistencia al ataque.",
            C: "Análisis de robustez.",
            D: "Análisis de debilidad."
        },
        answer: "C",
        detail: "Análisis de robustez."
    },
    {
        question: "¿Cuál de las siguientes respuestas es una de las perspectivas que el equipo de desarrollo tiene que adoptar a la hora de diseñar unas pruebas de seguridad basadas en el riesgo?",
        options: {
            A: "Perspectiva gerencia.",
            B: "Perspectiva atacante.",
            C: "Perspectiva usuario.",
            D: "Perspectiva del analista."
        },
        answer: "B",
        detail: "Perspectiva atacante."
    },
    {
        question: "¿Cuál de estas opciones NO es una razón principal para añadir prácticas de seguridad en el SDLC?",
        options: {
            A: "Mayor probabilidad de capturar adecuadamente los requisitos.",
            B: "Mayor probabilidad de tomar decisiones de diseño correctas y no cometer errores involuntarios de codificación.",
            C: "Dificultad de los agentes maliciosos para explotar vulnerabilidades y debilidades del software.",
            D: "Mayor probabilidad de que el software funcione correctamente."
        },
        answer: "D",
        detail: "Mayor probabilidad de que el software funcione correctamente."
    },
    {
        question: "Señala la respuesta correcta. Un método sistemático para caracterizar la seguridad de un sistema, basado en la combinación y dependencias de las vulnerabilidades de este, que un atacante puede aprovechar para comprometerlo.",
        options: {
            A: "Método de ataque.",
            B: "Patrones de ataque.",
            C: "Árboles de ataque.",
            D: "Modelo de ataque."
        },
        answer: "C",
        detail: "Árboles de ataque."
    },
    {
        question: "Señalar la respuesta incorrecta sobre los casos de abuso.",
        options: {
            A: "Los casos de abuso constituyen unas buenas prácticas para la obtención de los requisitos funcionales de una aplicación, referidos a actividades que debería realizar el sistema.",
            B: "Un caso de abuso es la inversa de un caso de uso, es decir, una función que el sistema no debe permitir o una secuencia completa de acciones que resulta en una pérdida para la organización.",
            C: "Los casos de abuso, o casos de mal uso, son un instrumento que puede ayudar a pensar de la misma forma que lo hacen los atacantes.",
            D: "Establecen la base para otros casos de uso de seguridad que proporcionan los medios para contrarrestar o mitigar las amenazas."
        },
        answer: "A",
        detail: "Los casos de abuso constituyen unas buenas prácticas para la obtención de los requisitos funcionales."
    },
    {
        question: "Indica en qué fase del ciclo de vida de desarrollo del software NO es aplicable el análisis de riesgo arquitectónico.",
        options: {
            A: "Especificación de requisitos.",
            B: "Diseño del sistema.",
            C: "Codificación.",
            D: "Operación."
        },
        answer: "C",
        detail: "Codificación."
    }
]