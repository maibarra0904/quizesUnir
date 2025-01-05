import { useEffect, useState } from 'react';
import { plataformas } from '../data/plataformas';
import { aleatorizarRespuestas } from '../utils/aleatorizarRespuestas';
import { cyberseguridad } from '../data/cyberseguridad';
import { desarrollo } from '../data/desarrollo';
import { direccion } from '../data/direccion';
import { metodologias } from '../data/metodologias';

const Quiz = () => {
    
    const [subject, setSubject] = useState(localStorage.getItem('selectedSubject') || {});
    const [questionCount, setQuestionCount] = useState(JSON.parse(localStorage.getItem('questionCount')) || {});
    const [responses, setResponses] = useState(JSON.parse(localStorage.getItem('quizResponses')) || {});
    const [submitted, setSubmitted] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;

    useEffect(() => {
        let questions = [];
        switch (subject) {
            case 'plataformas':
                questions = [...plataformas];
                break;
            case 'cyberseguridad':
                questions = [...cyberseguridad];
                break;
            case 'desarrollo':
                questions = [...desarrollo];
                break;
            case 'direccion':
                questions = [...direccion];
                break;
            case 'metodologias':
                questions = [...metodologias];
                break;
            default:
                questions = []; // Manejo por defecto
        }

        // Seleccionar preguntas al azar
        const selectedQuestions = selectRandomQuestions(questions, questionCount);

        const mixedQuestions = selectedQuestions.map(q => ({
            ...q,
            options: aleatorizarRespuestas(q.options),
        }));

        setShuffledQuestions(mixedQuestions);

        setSubject(localStorage.getItem('selectedSubject') || {})

        setQuestionCount(JSON.parse(localStorage.getItem('questionCount')) || {})

    }, [subject, questionCount]);

    const selectRandomQuestions = (questions, count) => {
        // Mezclar las preguntas y seleccionar las primeras 'count' preguntas
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        // Guardar respuestas en localStorage
        localStorage.setItem('quizResponses', JSON.stringify(responses));
    }, [responses]);

    const handleChange = (questionIndex, option) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [questionIndex]: option,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setResponses({});
        localStorage.removeItem('quizResponses');
        setSubmitted(false);
        setCurrentPage(0);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(shuffledQuestions.length / questionsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = shuffledQuestions.slice(startIndex, endIndex);

    const totalPages = Math.ceil(shuffledQuestions.length / questionsPerPage);

    return (
        <div>
            <h1>Formulario de Preguntas</h1>
            <form onSubmit={handleSubmit}>
                {currentQuestions.map((q, index) => (
                    <div key={index}>
                        <p>{q.question}</p>
                        {Object.entries(q.options).map(([key, value]) => (
                            <label key={key}>
                                <input
                                    type="radio"
                                    name={`question-${startIndex + index}`}
                                    value={key}
                                    checked={responses[startIndex + index] === key}
                                    onChange={() => handleChange(startIndex + index, key)}
                                />
                                {value}
                            </label>
                        ))}
                        {submitted && responses[startIndex + index] !== undefined && (
                            <div className="feedback">
                                {responses[startIndex + index] === q.answer ? (
                                    <p className="correct">¡Correcto!</p>
                                ) : (
                                    <p className="incorrect">
                                        Incorrecto. La respuesta correcta es: {q.detail}.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {currentPage === Math.ceil(shuffledQuestions.length / questionsPerPage) - 1 && (
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <button type="submit">Enviar</button>
                    </div>
                )}
            </form>

            {submitted && (
                <div>
                    <h2>Resultados</h2>
                    <p>
                        Puntaje: {Object.keys(responses).filter((key) => responses[key] === shuffledQuestions[key]?.answer).length} de {shuffledQuestions.length}
                    </p>
                    <button onClick={handleReset}>Borrar Respuestas</button>
                </div>
            )}
            <div className='pageNumber'>
                <span style={{ margin: '0 10px' }}>
                    Página {currentPage + 1} de {totalPages}
                </span>
            </div>
            <div className="pagination" style={{ textAlign: 'center' }}>
                <button onClick={handlePrevPage} disabled={currentPage === 0}>Anterior</button>
                <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>Siguiente</button>
            </div>
        </div>
    );
};

export default Quiz;