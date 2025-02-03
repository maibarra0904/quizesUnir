import { useEffect, useState } from 'react';
import { plataformas } from '../data/plataformas';
import { aleatorizarRespuestas } from '../utils/aleatorizarRespuestas';
import { useLocation, useNavigate } from 'react-router-dom';
import { cyberseguridad } from '../data/cyberseguridad';
import { desarrollo } from '../data/desarrollo';
import { direccion } from '../data/direccion';
import { metodologias } from '../data/metodologias';

const Studio = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { subject } = location.state || {};
    const [subjectName, setSubjectName] = useState('');
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const questionsPerPage = 20;

    useEffect(() => {
        generateQuiz();
    }, []);

    const generateQuiz = () => {
        let questions = [];
        switch (subject) {
            case 'plataformas':
                setSubjectName('Plataformas de Desarrollo');
                questions = [...plataformas];
                break;
            case 'cyberseguridad':
                setSubjectName('Cyberseguridad');
                questions = [...cyberseguridad];
                break;
            case 'desarrollo':
                setSubjectName('Desarrollo Web');
                questions = [...desarrollo];
                break;
            case 'direccion':
                setSubjectName('Dirección de Proyectos');
                questions = [...direccion];
                break;
            case 'metodologias':
                setSubjectName('Metodologías de Desarrollo Web');
                questions = [...metodologias];
                break;
            default:
                questions = []; // Manejo por defecto
        }

        const mixedQuestions = questions.map(q => ({
            ...q,
            options: aleatorizarRespuestas(q.options),
        }));

        setShuffledQuestions(mixedQuestions);
    };

    useEffect(() => {
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
        setSubmitted(false);
        setCurrentPage(0);
        setSearchTerm(''); // Resetear búsqueda
    };

    const handleHome = () => {
        handleReset();
        navigate('/');
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredQuestions.length / questionsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const filteredQuestions = shuffledQuestions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = filteredQuestions.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

    return (
        <div>
            <h1>Modo Estudio: {subjectName}</h1>
            <div className='center'>
            <input
                type="text"
                className='search-input'
                placeholder="Buscar preguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
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
                                    checked={responses[startIndex + index] === key || (!responses[startIndex + index] && key === q.answer)}
                                    onChange={() => handleChange(startIndex + index, key)}
                                    disabled={true}
                                />
                                {value}
                            </label>
                        ))}
                        {submitted && (
                            <div className="feedback">
                                {responses[startIndex + index] !== undefined && (
                                    <p className={responses[startIndex + index] === q.answer ? "correct" : "incorrect"}>
                                        {responses[startIndex + index] === q.answer ? "¡Correcto!" : `Incorrecto. La respuesta correcta es: ${q.detail}.`}
                                    </p>
                                )}
                                {responses[startIndex + index] !== undefined && (
                                    <p style={{ fontWeight: 'bold' }}>
                                        Respuesta correcta: {q.answer}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </form>

            {submitted && (
                <div className='results'>
                    <h2>Resultados</h2>
                    <p>
                        Puntaje: {Object.keys(responses).filter((key) => responses[key] === shuffledQuestions[key]?.answer).length} de {shuffledQuestions.length}
                    </p>
                    <button onClick={handleReset}>Reiniciar Mismo Quiz</button>
                    <button onClick={handleHome}>Escoger Otra Materia</button>
                </div>
            )}
            <div className="pagination-container">
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 0}>◀</button>
                    <span>{currentPage + 1} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>▶</button>
                </div>
            </div>
        </div>
    );
};

export default Studio;