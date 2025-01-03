import { useEffect, useState } from 'react';
import { plataformas } from '../data/plataformas';
import { aleatorizarRespuestas } from '../utils/aleatorizarRespuestas';
import { useLocation } from 'react-router-dom';
import { cyberseguridad } from '../data/cyberseguridad';


const Quiz = () => {
    const location = useLocation();
    const { subject } = location.state || {};
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;

    useEffect(() => {
        // Mezclar las opciones al cargar el componente
        let questions = [];

        switch (
            subject
        ) {
            case 'plataformas':
                questions = [...plataformas];
                break;
            case 'cyberseguridad':
                questions = [...cyberseguridad];
                break;
        }


        const mixedQuestions = questions.map(q => ({
            ...q,
            options: aleatorizarRespuestas(q.options),
        }));
        setShuffledQuestions(mixedQuestions);
    }, []);

    const handleChange = (questionIndex, option) => {
        setResponses({
            ...responses,
            [questionIndex]: option,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
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
                        Puntaje: {Object.keys(responses).filter((key) => responses[key] === shuffledQuestions[key].answer).length} de {shuffledQuestions.length}
                    </p>
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