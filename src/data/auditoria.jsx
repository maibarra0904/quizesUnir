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
    },
    {
        question: "Señala la respuesta correcta. Las perspectivas de las pruebas de seguridad basadas en el riesgo son las siguientes:",
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
        question: "Señala la respuesta correcta. El principal problema de las herramientas de análisis estático es:",
        options: {
            A: "Falsos negativos que produce.",
            B: "Gran cantidad de defectos que encuentra.",
            C: "Reglas de la herramienta.",
            D: "Falsos positivos que produce."
        },
        answer: "A",
        detail: "Falsos negativos que produce."
    },
    {
        question: "Señala la respuesta incorrecta. Las herramientas de análisis estático realizan varios tipos de análisis:",
        options: {
            A: "Taint Propagation.",
            B: "Análisis puntual.",
            C: "Model checking.",
            D: "Análisis de flujo de datos."
        },
        answer: "B",
        detail: "Análisis puntual."
    },
    {
        question: "Señala la respuesta correcta. Los tests de penetración:",
        options: {
            A: "Demuestran que ningún defecto existe.",
            B: "Revisan el código.",
            C: "El entendimiento del ambiente de ejecución y de los problemas de configuración es el mejor resultado de cualquier prueba de penetración.",
            D: "Las conclusiones de seguridad son repetibles a través de equipos diferentes y varían extensamente dependiendo de la habilidad y la experiencia de los probadores."
        },
        answer: "C",
        detail: "El entendimiento del ambiente de ejecución y de los problemas de configuración es el mejor resultado de cualquier prueba de penetración."
    },
    {
        question: "Señalar la respuesta correcta. A la hora de realizar la distribución y despliegue del software desarrollado es recomendable realizar las siguientes buenas prácticas:",
        options: {
            A: "Distribuir el software con una configuración por defecto segura y lo más restrictiva posible.",
            B: "Proporcionar una herramienta de instalación automática.",
            C: "Cambio los valores de configuración predeterminados durante el desarrollo.",
            D: "Todas son correctas."
        },
        answer: "D",
        detail: "Todas son correctas."
    },
    {
        question: "Señala la respuesta incorrecta. Los objetivos de las pruebas de seguridad basadas en el riesgo son:",
        options: {
            A: "Verificar la operación del software bajo en su entorno de producción.",
            B: "Verificar la capacidad de supervivencia del software ante la aparición de anomalías, errores y su manejo de estas mediante excepciones que minimicen el alcance e impacto de los daños que puedan resultar de los ataques.",
            C: "Verificar la falta de defectos y debilidades explotables.",
            D: "Verificar la fiabilidad del software, en términos de comportamiento seguro y cambios de estado confiables."
        },
        answer: "A",
        detail: "Verificar la operación del software bajo en su entorno de producción."
    },
    {
        question: "Señalar la respuesta incorrecta. El análisis estático de código fuente es adecuado para identificar problemas de seguridad por ciertas razones:",
        options: {
            A: "Las herramientas de análisis estático comprueban el código a fondo y coherentemente, sin ninguna tendencia, que a veces los programadores según su criterio podrían tener sobre algunas partes del código que pudieran ser más «interesantes» desde una perspectiva de seguridad.",
            B: "Examinando el código en sí mismo, las herramientas de análisis estático a menudo pueden indicar la causa de origen de un problema de seguridad, no solamente uno de sus síntomas.",
            C: "Cuando un investigador de seguridad descubre una nueva variedad de ataque, las herramientas de análisis estático no ayudan a comprobar de nuevo una gran cantidad de código para ver dónde el nuevo ataque podría tener éxito.",
            D: "El análisis estático puede encontrar errores tempranamente en el desarrollo, aún antes de que el programa sea ejecutado por primera vez."
        },
        answer: "C",
        detail: "Cuando un investigador de seguridad descubre una nueva variedad de ataque, las herramientas de análisis estático no ayudan a comprobar de nuevo una gran cantidad de código."
    },
    {
        question: "Señalar la respuesta correcta. La principal misión de los tests de penetración es:",
        options: {
            A: "Revisar estáticamente el código del sistema.",
            B: "Comprobar las vulnerabilidades del software.",
            C: "Verificar cómo el software se comporta y resiste ante diferentes tipos de ataque.",
            D: "Probar la seguridad de la arquitectura del software."
        },
        answer: "C",
        detail: "Verificar cómo el software se comporta y resiste ante diferentes tipos de ataque."
    },
    {
        question: "Indicar la respuesta incorrecta. Los factores principales prácticos que determinan la utilidad de una herramienta de análisis estático son:",
        options: {
            A: "El equilibrio que la herramienta hace entre la precisión, la profundidad y la escalabilidad.",
            B: "Porcentaje de falsos positivos de la herramienta.",
            C: "Las características de la herramienta para hacerla fácil de usar.",
            D: "La capacidad de la herramienta para comprender el programa que se analiza."
        },
        answer: "B",
        detail: "Porcentaje de falsos positivos de la herramienta."
    },
    {
        question: "Señalar la respuesta correcta. Una herramienta de análisis de código reporta que existe una vulnerabilidad de inyección SQL. Sin embargo, después de la correspondiente verificación, se comprueba que en realidad no existe tal vulnerabilidad. ¿Qué tipo de limitación de las herramientas de análisis de código se ha expuesto?",
        options: {
            A: "Un falso positivo.",
            B: "Un falso negativo.",
            C: "Una vulnerabilidad específica de un lenguaje de programación.",
            D: "Ninguna de las anteriores."
        },
        answer: "A",
        detail: "Un falso positivo."
    },
    {
    question: "Es fundamental que un auditor de sistemas de información:",
    options: {
      A: "Tenga conocimiento de la legislación aplicable en la compañía.",
      B: "Tenga conocimiento de los objetivos de la compañía.",
      C: "Tenga conocimiento de los sistemas de información.",
      D: "Todas las anteriores."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "¿Dónde se debe situar un departamento de auditoría interna dentro de una compañía?",
    options: {
      A: "Su situación no es relevante.",
      B: "Siempre depende de Tecnología.",
      C: "Depende de la empresa, pero lo más recomendable es que dependa de Seguridad.",
      D: "En una ubicación jerárquica en la que pueda realizar sus actuaciones de manera independiente."
    },
    answer: "D",
    detail: "En una ubicación jerárquica en la que pueda realizar sus actuaciones de manera independiente."
  },
  {
    question: "En relación con la clasificación de controles internos, según su naturaleza, podemos afirmar que:",
    options: {
      A: "Son normalmente detectivos, correctivos y preventivos. En ocasiones, se incluyen los controles alternativos.",
      B: "Son voluntarios, obligatorios, manuales y automáticos.",
      C: "Son voluntarios, obligatorios, manuales, automáticos, preventivos, detectivos y correctivos.",
      D: "Son controles generales, de aplicación, de área y legales."
    },
    answer: "A",
    detail: "Son normalmente detectivos, correctivos y preventivos. En ocasiones, se incluyen los controles alternativos."
  },
  {
    question: "En relación con la clasificación de controles internos, según su naturaleza, podemos afirmar que:",
    options: {
      A: "Los controles detectivos actúan sobre la causa de los riesgos con el fin de disminuir su probabilidad de ocurrencia.",
      B: "Los controles preventivos se diseñan para descubrir un evento, irregularidad o resultado no previsto, alertan sobre la presencia de riesgos y permiten tomar medidas inmediatas, pudiendo ser manuales o automáticos.",
      C: "Las opciones A y B son correctas.",
      D: "Las opciones A y B son incorrectas."
    },
    answer: "D",
    detail: "Las opciones A y B son incorrectas."
  },
  {
    question: "Los controles generales se clasifican en:",
    options: {
      A: "Controles de organización y operación, controles de tratamiento de datos, así como controles de hardware y software de sistemas.",
      B: "Controles de entrada de datos, controles de tratamiento de datos y controles de salida de datos.",
      C: "Controles de organización y operación, controles de desarrollo de sistemas y documentación, así como controles de hardware y software de sistemas.",
      D: "Ninguna de las anteriores es cierta."
    },
    answer: "C",
    detail: "Controles de organización y operación, controles de desarrollo de sistemas y documentación, así como controles de hardware y software de sistemas."
  },
  {
    question: "¿Se puede considerar un control como señuelo?",
    options: {
      A: "No, un control siempre debe tener un objetivo claro.",
      B: "No, los controles tienen que ser reales.",
      C: "Sí, se utilizan para desviar la atención de un potencial atacante.",
      D: "Ninguna de las respuestas anteriores es correcta."
    },
    answer: "C",
    detail: "Sí, se utilizan para desviar la atención de un potencial atacante."
  },
  {
    question: "Dentro de controles generales, podemos afirmar que no son controles de organización y operación:",
    options: {
      A: "Seguridad lógica y física, controles de procesamiento y control de presupuestos.",
      B: "Procedimientos, separación de entornos y estándares y nomenclatura.",
      C: "Controles de segregación de funciones.",
      D: "Todos los anteriores son controles de organización y operación."
    },
    answer: "A",
    detail: "Seguridad lógica y física, controles de procesamiento y control de presupuestos."
  },
  {
    question: "Los controles deben:",
    options: {
      A: "Estar implantados.",
      B: "Cubrir los objetivos por los que fueron implantados.",
      C: "Ser efectivos.",
      D: "Todas las anteriores."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "En relación con los controles de organización y operación, para una segregación de funciones adecuada:",
    options: {
      A: "Una misma persona no puede realizar funciones determinadas en un mismo entorno.",
      B: "Una misma persona no puede realizar funciones determinadas en un entorno y en otro.",
      C: "Las opciones A y B son correctas.",
      D: "Las opciones A y B son incorrectas."
    },
    answer: "B",
    detail: "Una misma persona no puede realizar funciones determinadas en un entorno y en otro."
  },
  {
    question: "Los controles de hardware y software de sistemas:",
    options: {
      A: "Preservan las tres dimensiones de la información: confidencialidad, disponibilidad y seguridad.",
      B: "Preservan las tres dimensiones de la información: fiabilidad, disponibilidad y confidencialidad.",
      C: "Preservan dos de las tres dimensiones de la información: integridad, disponibilidad y confidencialidad.",
      D: "Ninguna de las anteriores es correcta."
    },
    answer: "C",
    detail: "Preservan dos de las tres dimensiones de la información: integridad, disponibilidad y confidencialidad."
  },
  {
    question: "¿Cuál es uno de los pilares fundamentales de la definición de auditoría?",
    options: {
      A: "Proceso objetivo.",
      B: "Proceso subjetivo.",
      C: "Calculo el riesgo tecnológico.",
      D: "Calculo el riesgo operacional."
    },
    answer: "A",
    detail: "Proceso objetivo."
  },
  {
    question: "El objetivo final de la auditoría es:",
    options: {
      A: "Generar un proceso subjetivo.",
      B: "Dar recomendaciones a la alta dirección.",
      C: "Entregar un informe.",
      D: "Comunicar los resultados de manera correcta."
    },
    answer: "B",
    detail: "Dar recomendaciones a la alta dirección."
  },
  {
    question: "Cualquier sistema informático utilizado por las compañías debe:",
    options: {
      A: "Salvaguardar la propiedad de la información.",
      B: "Mantener la integridad de los datos.",
      C: "Asegurar la confidencialidad de la información.",
      D: "Todas las anteriores."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es cierta?",
    options: {
      A: "No hace falta un alineamiento entre el plan estratégico y el plan de las TIC al tratarse de taxonomías de planes totalmente diferentes.",
      B: "Las organizaciones con consideración a las TI tienen mayor retorno de inversión a medio y largo plazo que aquellas que no lo consideran ante los mismos objetivos estratégicos, de tal forma que con la madurez tecnológica se llegue a un estado de mayor retorno.",
      C: "El plan informático de TI se tiene que corresponder con el plan estratégico de la empresa.",
      D: "Ninguna afirmación es cierta."
    },
    answer: "C",
    detail: "El plan informático de TI se tiene que corresponder con el plan estratégico de la empresa."
  },
  {
    question: "La auditoría del CPD, ¿corresponde con una auditoria de sistemas o de seguridad física?",
    options: {
      A: "Al estar los sistemas dentro del CPD, se corresponde en exclusiva con una auditoria de sistemas.",
      B: "Al ser una ubicación física, estas auditorías están centradas en las auditorias de seguridad física.",
      C: "Es una auditoria de sistemas porque no existen las auditorias de seguridad física.",
      D: "Pueden ser las dos, dependiendo de los objetivos de la auditoria."
    },
    answer: "D",
    detail: "Pueden ser las dos, dependiendo de los objetivos de la auditoria."
  },
  {
    question: "Cuáles son las diferencias más relevantes entre auditoría y control internos.",
    options: {
      A: "Realizan la misma función, por lo que la diferencias simplemente es en la nomenclatura que se le dé en cada empresa.",
      B: "El control interno tiene mucho más peso que la auditoria interna.",
      C: "La auditoría interna tiene mucho más peso que control interno.",
      D: "La periodicidad y frecuencia de sus actuaciones."
    },
    answer: "D",
    detail: "La periodicidad y frecuencia de sus actuaciones."
  },
  {
    question: "Las auditorias de seguridad solo engloban:",
    options: {
      A: "Los temas tecnológicos.",
      B: "Los temas físicos.",
      C: "Los temas operacionales.",
      D: "Todas las anteriores."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "Cuál es uno de los objetivos principales del auditor:",
    options: {
      A: "Elaborar un informe de situación y entregarlo.",
      B: "Evaluar y comprobar, en determinados momentos, los controles y procedimientos informáticos.",
      C: "Pedir evidencias y analizarlas.",
      D: "Ninguna de las anteriores."
    },
    answer: "B",
    detail: "Evaluar y comprobar, en determinados momentos, los controles y procedimientos informáticos."
  },
  {
    question: "Se denomina auditoria informática porque:",
    options: {
      A: "Se utilizan muchos sistemas informáticos para encontrar los resultados.",
      B: "Solo pueden realizarse por personas con unos estudios relacionados con la Informática.",
      C: "El objeto auditado son los sistemas de información.",
      D: "Ninguna de las anteriores."
    },
    answer: "C",
    detail: "El objeto auditado son los sistemas de información."
  },
  {
    question: "Cuando se encuentran hallazgos en la auditoria:",
    options: {
      A: "Se notifica de manera inmediata cualquier hallazgo a la Alta Dirección.",
      B: "Se notifica de manera inmediata cualquier hallazgo a nuestro interlocutor.",
      C: "Se documentan formalmente y ya se notificarán.",
      D: "Ninguna de las anteriores."
    },
    answer: "C",
    detail: "Se documentan formalmente y ya se notificarán."
  },
  {
    question: "Señala la respuesta incorrecta. Con respecto a los errores y excepciones:",
    options: {
      A: "Si un método declara que lanza una excepción checked, todos los objetos que lo utilizan deben manejar la excepción o declarar que lo lanzan también.",
      B: "Los compiladores de Java no hacen cumplir las reglas en cuanto a excepciones checked.",
      C: "Todas las excepciones en C++ son checked.",
      D: "Las excepciones unchecked no tienen que ser declaradas o manejadas."
    },
    answer: "C",
    detail: "Todas las excepciones en C++ son checked."
  },
  {
    question: "Señala la o las respuestas correctas. ¿Qué tipo de vulnerabilidad se comete en este código? public ResultSet execSQL(Connection conn, String sql) { Statement stmt = null; ResultSet rs = null; try { stmt = conn.createStatement(); rs = stmt.executeQuery(sql); } catch (SQLException sqe) { logger.log(Level.WARNING, \"error executing: \" + sql, sqe); } finally { close(stmt); } return rs; }",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Format string.",
      D: "Manipulación de información privada."
    },
    answer: "D",
    detail: "Manipulación de información privada."
  },
  {
    question: "Señala la respuesta correcta. Se tienen dos opciones para crear archivos temporales de forma segura:",
    options: {
      A: "Generar los nombres de archivo temporales que sean difíciles de adivinar, usando un generador de números pseudo-aleatorios (PRNG) criptográficamente seguros para crear un elemento aleatorio en cada nombre del archivo temporal.",
      B: "Almacenar los archivos temporales bajo un directorio que no es públicamente accesible, eliminando así toda la discusión con respecto a ataques.",
      C: "Almacenar los archivos temporales bajo un directorio que es públicamente accesible, eliminando así toda la discusión con respecto a ataques.",
      D: "Generar los nombres de archivo temporales que sean difíciles de adivinar usando un generador de números pseudo-aleatorios (PRNG) estadístico para crear un elemento en cada nombre del archivo temporal."
    },
    answer: "A",
    detail: "Generar los nombres de archivo temporales que sean difíciles de adivinar, usando un generador de números pseudo-aleatorios (PRNG) criptográficamente seguros para crear un elemento aleatorio en cada nombre del archivo temporal."
  },
  {
    question: "Señala la respuesta incorrecta. Métodos para detectar y prevenir intergers overflows:",
    options: {
      A: "Usar tipos sin signo.",
      B: "Verificar el tipo de los buffers.",
      C: "Restringir la entrada numérica de usuario.",
      D: "Entender las reglas de conversión entre enteros."
    },
    answer: "B",
    detail: "Verificar el tipo de los buffers."
  },
  {
    question: "Señala la respuesta incorrecta. Los ataques de escalada de privilegios pueden tener como objetivo cualquier variedad de vulnerabilidades de software, que son principalmente un riesgo en programas privilegiados:",
    options: {
      A: "Archivos de sistema.",
      B: "Condiciones de carrera de acceso a archivos.",
      C: "Inyección de comandos.",
      D: "Mal uso de descriptores de archivo estándar."
    },
    answer: "A",
    detail: "Archivos de sistema."
  },
  {
    question: "Señala la respuesta incorrecta. Consideraciones sobre potenciales vulnerabilidades de Java:",
    options: {
      A: "Seguridad de tipos. Los campos que son declarados privados o protegidos, o que tienen protección, por defecto, deberían ser públicamente accesibles.",
      B: "Campos públicos. Un campo que es declarado público directamente puede ser no ser accedido por cualquier parte de un programa Java y puede ser modificado por las mismas (a no ser que el campo sea declarado como final).",
      C: "Serialización. Esta facilidad posibilita que el estado del programa sea capturado y convertido en un byte stream que puede ser restaurado por la operación inversa, que es la deserialización.",
      D: "JVM. La JVM, en sí misma, a menudo está escrita en C para una plataforma dada. Esto quiere decir que, sin la atención cuidadosa a detalles de puesta en práctica, la JVM en sí misma no susceptible a problemas de desbordamiento."
    },
    answer: "B",
    detail: "Campos públicos. Un campo que es declarado público directamente puede ser no ser accedido por cualquier parte de un programa Java y puede ser modificado por las mismas (a no ser que el campo sea declarado como final)."
  },
  {
    question: "Señala la respuesta correcta. Revisando el programa ¿cuál de las siguientes preguntas describe mejor lo que está haciendo la función? void aFunction(char *buf) { static char BANNED_CHARACTERS[] = {'>', '<', '!', '*'}; int l = strlen(buf); int i; for(i = 0; i < l; i++) { int j; int k = sizeof(BANNED_CHARACTERS) / sizeof(char); for(j = 0; j < k; j++) { if(buf[i] == BANNED_CHARACTERS[j]) buf[i] = ' '; } } }",
    options: {
      A: "Asegurar la no violabilidad espacial de la memoria.",
      B: "Validar la entrada mediante lista blanca.",
      C: "Asegurar la no violabilidad temporal de la memoria.",
      D: "Validar la entrada mediante lista negra."
    },
    answer: "D",
    detail: "Validar la entrada mediante lista negra."
  },
  {
    question: "Señala la incorrecta. Las funciones de strings limitadas son más seguras que las funciones ilimitadas, pero hay todavía mucho margen para el error. Los fallos de programación más comunes que se pueden cometer con las funciones de string limitadas:",
    options: {
      A: "El buffer de destino se desborda porque el límite depende del tamaño de los datos de la fuente, más bien que del tamaño del buffer de destino.",
      B: "El buffer de destino se desborda porque su límite se especifica como el tamaño total del buffer, más bien que como el espacio restante.",
      C: "El buffer de destino se deja sin un terminador nulo.",
      D: "El programa escribe a una posición arbitraria en la memoria porque el buffer de destino se termina con el carácter nulo."
    },
    answer: "D",
    detail: "El programa escribe a una posición arbitraria en la memoria porque el buffer de destino se termina con el carácter nulo."
  },
  {
    question: "Señalar la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? #include <stdio.h> #include <stdlib.h> #include <unistd.h> #define MY_TMP_FILE \"/tmp/file.tmp\" int main(int argc, char* argv[]) { FILE * f; if (!access(MY_TMP_FILE, F_OK)) { printf (\"File exists!\\n\"); return EXIT_FAILURE; } tmpFile = fopen(MY_TMP_FILE, \"w\"); if (tmpFile == NULL) { return EXIT_FAILURE; } fputs(\"Some text...\\n\", tmpFile); fclose(tmpFile); return EXIT_SUCCESS; }",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Condiciones de carrera.",
      D: "Use after free."
    },
    answer: "C",
    detail: "Condiciones de carrera."
  },
  {
    question: "Señala la respuesta correcta. ¿Cuándo ocurre un ataque de integer overflow?",
    options: {
      A: "Al realizar una operación de una resta.",
      B: "Un entero es usado como si fuera un puntero.",
      C: "Un entero es usado para acceder a un buffer fuera de sus límites.",
      D: "No hay más espacio en el programa para almacenar un entero."
    },
    answer: "C",
    detail: "Un entero es usado para acceder a un buffer fuera de sus límites."
  },
  {
    question: "Señala la respuesta correcta. En los apuntes de la asignatura se presentan una serie de recomendaciones de buenas prácticas:",
    options: {
      A: "Manejo de los datos con precaución.",
      B: "Confiar en software de terceros en operaciones críticas.",
      C: "Usar listas de errores.",
      D: "Usar en el código nombres relativos de ficheros."
    },
    answer: "A",
    detail: "Manejo de los datos con precaución."
  },
  {
    question: "Señala la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? String user_state = \"Unknown\"; try { HttpSession user_session = Init.sessions.get(tmpUser.getUser()); user_state = user_session == null ? \"Unknown\" : (String)user_session.getAttribute(\"USER_STATUS\"); user_state = user_state == null ? \"Available\" : user_state; } ... %> <%=user_state %>",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Uso de datos invalidados.",
      D: "Use after free."
    },
    answer: "C",
    detail: "Uso de datos invalidados."
  },
  {
    question: "Señala la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? char *stringcopy(char *str1, char *str2) { while (*str2) *str1++ = *str2++; return str2; } main(int argc, char **argv) { char *buffer = (char *)malloc(16 * sizeof(char)); stringcopy(buffer, argv[1]); printf(\"%s\\n\", buffer); }",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Format string.",
      D: "Use after free."
    },
    answer: "B",
    detail: "Desbordamiento de buffer."
  },
  {
    question: "Señala la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? struct hostent *hp; struct in_addr myaddr; char* tHost = \"trustme.com\"; myaddr.s_addr = inet_addr(ip_addr_string); hp = gethostbyaddr((char *) &myaddr, sizeof(struct in_addr), AF_INET); if (hp && !strncmp(hp->h_name, tHost, sizeof(tHost))) { trusted = true; } else { trusted = false; }",
    options: {
      A: "Buffer overflow.",
      B: "Validación límites de confianza.",
      C: "Validación de entrada DNS.",
      D: "Memory leaks."
    },
    answer: "C",
    detail: "Validación de entrada DNS."
  },
  {
    question: "Señala la respuesta correcta. ¿Es el siguiente código correcto? if (path != null && path.length() > 0 && path.length() <= MAXPATH) { fileOperation(path); }",
    options: {
      A: "Es correcto.",
      B: "Es incorrecto.",
      C: "No se puede determinar.",
      D: "Ninguna de las anteriores."
    },
    answer: "A",
    detail: "Es correcto."
  },
  {
    question: "Señala la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? u_int nresp; nresp = packet_get_int(); if (nresp > 0) { response = xmalloc(nresp*sizeof(char*)); for (i = 0; i < nresp; i++) response[i] = packet_get_string(NULL); }",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Format string.",
      D: "Use after free."
    },
    answer: "A",
    detail: "Integer overflows."
  },
  {
    question: "Señala la respuesta correcta. ¿Qué tipo de vulnerabilidad se comete en este código? while (fgets(buf, sizeof buf, f)) { lreply(200, buf); ... } void lreply(int n, char *fmt, ...) { char buf[BUFSIZ]; ... vsnprintf(buf, sizeof buf, fmt, ap); ... }",
    options: {
      A: "Integer overflows.",
      B: "Desbordamiento de buffer.",
      C: "Format string.",
      D: "Use after free."
    },
    answer: "C",
    detail: "Format string."
  },
  {
    question: "Señala la respuesta correcta. Al realizar una buena validación de entrada por defecto, una mejora con API de seguridad aumenta la capacidad de hacer lo siguiente:",
    options: {
      A: "Entender y mantener la lógica de validación de entrada.",
      B: "Actualizar y modificar el intento de introducir la validación coherentemente.",
      C: "Aplicar una validación de entrada sensible a contexto coherentemente a toda la entrada.",
      D: "Descentralizar la lógica de validación."
    },
    answer: "D",
    detail: "Descentralizar la lógica de validación."
  },
  {
    question: "Señalar la respuesta incorrecta. En el desarrollo de aplicaciones seguras y confiables se requiere el seguimiento de unas buenas prácticas:",
    options: {
      A: "Insistir en el proceso de revisión de código.",
      B: "Formación continua.",
      C: "Invocar programas en los que no se confía desde otros en los que se confía.",
      D: "Manejo de los datos con precaución."
    },
    answer: "C",
    detail: "Invocar programas en los que no se confía desde otros en los que se confía."
  },
  {
    question: "Señala la respuesta correcta. ¿Cuál es la mejor forma de prevenir ataques de desbordamiento de buffer?",
    options: {
      A: "Tener precauciones al realizar conversiones de tipo.",
      B: "Utilizar un lenguaje de programación que fuerce la comprobación de tipos y de memoria.",
      C: "Comprobar los límites de memoria.",
      D: "Comprobar las longitudes del buffer."
    },
    answer: "B",
    detail: "Utilizar un lenguaje de programación que fuerce la comprobación de tipos y de memoria."
  },
  {
    question: "¿Qué acciones son fundamentales en la planificación de una auditoría?",
    options: {
      A: "Comprensión del negocio.",
      B: "Posibles riesgos.",
      C: "Metodología que se debe utilizar.",
      D: "Todas son correctas."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "¿Cuál es la finalidad de un estándar de auditoría?",
    options: {
      A: "Es una metodología utilizada por cada una de las empresas auditoras.",
      B: "Los estándares definen los requerimientos obligatorios para la auditoría de sistemas y la generación de informe.",
      C: "Es una guía y se tiene que seguir de manera exacta.",
      D: "Ninguna de anteriores."
    },
    answer: "B",
    detail: "Los estándares definen los requerimientos obligatorios para la auditoría de sistemas y la generación de informe."
  },
  {
    question: "¿Cuántos organismos de auditoría existen?",
    options: {
      A: "Solo uno, ISACA.",
      B: "Solo uno, IIA.",
      C: "Dos, ISACA e IIA.",
      D: "Existen mucho más que dos organismos."
    },
    answer: "D",
    detail: "Existen mucho más que dos organismos."
  },
  {
    question: "¿Para qué se usan las herramientas de auditoría?",
    options: {
      A: "Para verificar de una manera clara los medios técnicos.",
      B: "Para valorar registros, planes, presupuestos, programas, controles y otros aspectos que afectan a la administración y control de una organización o las áreas que la integran.",
      C: "Para industrializar el proceso o actuación de auditoría.",
      D: "No existen herramientas de auditoría como tal."
    },
    answer: "B",
    detail: "Para valorar registros, planes, presupuestos, programas, controles y otros aspectos que afectan a la administración y control de una organización o las áreas que la integran."
  },
  {
    question: "¿Un conjunto de preguntas que deben ser contestadas oralmente por el interlocutor constituye una herramienta de auditoría?",
    options: {
      A: "Sí.",
      B: "No.",
      C: "Depende del conjunto de preguntas.",
      D: "Ninguna de las anteriores."
    },
    answer: "A",
    detail: "Sí."
  },
  {
    question: "¿Una herramienta de auditoría es lo mismo que una herramienta de evaluación de seguridad?",
    options: {
      A: "Sí.",
      B: "No.",
      C: "Depende de la herramienta.",
      D: "Ninguna de las anteriores."
    },
    answer: "B",
    detail: "No."
  },
  {
    question: "La metodología de auditoría debería ser establecida y aprobada por:",
    options: {
      A: "El departamento de auditoría interna de la compañía.",
      B: "El grupo de seguridad de la compañía.",
      C: "La gerencia de auditoría.",
      D: "Es un documento interno y por modificaciones no es conveniente que esté aprobada."
    },
    answer: "C",
    detail: "La gerencia de auditoría."
  },
  {
    question: "Los objetivos de auditoría se centran a menudo en:",
    options: {
      A: "Entregar un informe de resultados.",
      B: "Cumplir con los requerimientos legales o regulatorios.",
      C: "Validar que existen controles internos para minimizar los riesgos del negocio.",
      D: "Ninguna de las anteriores."
    },
    answer: "C",
    detail: "Validar que existen controles internos para minimizar los riesgos del negocio."
  },
  {
    question: "Una evidencia puede ser:",
    options: {
      A: "Un documento Word.",
      B: "Un registro de un sistema.",
      C: "Una conversación con un interlocutor.",
      D: "Todas las anteriores."
    },
    answer: "D",
    detail: "Todas las anteriores."
  },
  {
    question: "El informe final de auditoría:",
    options: {
      A: "Contiene el informe final.",
      B: "Contiene el informe preliminar.",
      C: "Las respuestas A y B son correctas.",
      D: "Ninguna de las respuestas anteriores es correcta."
    },
    answer: "C",
    detail: "Las respuestas A y B son correctas."
  }
]