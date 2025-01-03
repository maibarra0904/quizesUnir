import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const navigate = useNavigate();

    const subjects = [
        { id: 1, name: 'plataformas' },
        { id: 2, name: 'desarrollo' },
        { id: 3, name: 'metodologias' },
        { id: 4, name: 'cyberseguridad' },
        { id: 5, name: 'direccion' },
        // Agrega más materias según sea necesario
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSubject) {
            // Redirigir a la ruta del quiz con la materia seleccionada
            navigate('/quiz', { state: { subject: selectedSubject } });
        }
    };

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
                                onChange={() => setSelectedSubject(subject.name)}
                            />
                            {subject.name}
                        </label>
                    </div>
                ))}
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button type="submit" disabled={!selectedSubject}>Iniciar Quiz</button>
                </div>
            </form>
        </div>
    );
};

export default Home;