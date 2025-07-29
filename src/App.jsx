// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Formulario';
import Studio from './components/StudioMode';

function App() {
  return (
    <Router basename="/quizesUnir">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
