import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { plataformas } from '../data/plataformas';
import { cyberseguridad } from '../data/cyberseguridad';
import { desarrollo } from '../data/desarrollo';
import { direccion } from '../data/direccion';
import { metodologias } from '../data/metodologias';

const Home = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [questionCount, setQuestionCount] = useState(10); // Valor por defecto
    const navigate = useNavigate();

    useEffect(() => {
        // Recuperar la materia seleccionada y la cantidad de preguntas almacenadas en localStorage al montar el componente
        const storedSubject = localStorage.getItem('selectedSubject');
        const storedQuestionCount = localStorage.getItem('questionCount');

        if (storedSubject) {
            setSelectedSubject(storedSubject);
        }

        if (storedQuestionCount) {
            setQuestionCount(Number(storedQuestionCount));
        }
    }, []);

    const subjects = [
        { id: 1, name: 'plataformas', quantity: plataformas.length },
        { id: 2, name: 'desarrollo', quantity: desarrollo.length },
        { id: 3, name: 'metodologias', quantity: metodologias.length },
        { id: 4, name: 'cyberseguridad', quantity: cyberseguridad.length },
        { id: 5, name: 'direccion', quantity: direccion.length },
        // Agrega más materias según sea necesario
    ];

    const handleSubjectChange = (subjectName) => {
        setSelectedSubject(subjectName);
        setQuestionCount(10); // Resetea a 10 al cambiar de materia
        localStorage.setItem('selectedSubject', subjectName); // Guardar en localStorage
        localStorage.setItem('questionCount', 10); // Guardar en localStorage
    };

    const handleQuestionCountChange = (count) => {
        setQuestionCount(count);
        localStorage.setItem('questionCount', count); // Guardar en localStorage
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSubject) {
            navigate('/quiz', { state: { subject: selectedSubject, questionCount } });
        }
    };

    const generateQuestionOptions = (maxQuantity) => {
        const options = [];
        for (let i = 10; i <= maxQuantity; i += 10) {
            options.push(i);
        }
        if(maxQuantity % 10 !== 0) options.push(maxQuantity);
        return options;
    };

    const maxQuantity = subjects.find(subject => subject.name === selectedSubject)?.quantity || 20;

    return (
        <div>
            <h1>Selecciona la Materia del Quiz</h1>
            <form onSubmit={handleSubmit}>
                {subjects.map(subject => (
                    <div key={subject.id}>
                        <label>
                            <input
                                type="radio"
                                name="subject"
                                value={subject.name}
                                checked={selectedSubject === subject.name}
                                onChange={() => handleSubjectChange(subject.name)}
                            />
                            {subject.name}
                        </label>
                    </div>
                ))}

                {selectedSubject && (
                    <div style={{ margin: '20px 0' }}>
                        <label htmlFor="questionCount">Cantidad de Preguntas:</label>
                        <select
                            id="questionCount"
                            value={questionCount}
                            onChange={(e) => handleQuestionCountChange(Number(e.target.value))}
                        >
                            {generateQuestionOptions(maxQuantity).map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button type="submit" disabled={!selectedSubject}>Iniciar Quiz</button>
                </div>
            </form>
        </div>
    );
};

export default Home;
