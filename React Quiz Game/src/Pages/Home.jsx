import { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router';

function Home() {
  const [name, setName] = useState('');
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  function startQuiz() {
    const trimmedName = name.trim();

    if (!trimmedName) {
      alert('Please Enter your Name');
      return;
    }

    if (trimmedName.length <= 5) {
      alert('Name must be greater than 5 characters');
      return;
    }

    dispatch({ type: 'RESET' });
    dispatch({ type: 'SET_NAME', payload: trimmedName });

    navigate('/quiz');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">🚀 React Quiz Game</h1>

      <input
        placeholder="Enter your name"
        className="w-full max-w-md px-4 py-3 mb-4 border border-gray-300 rounded-lg"
        type="text"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={startQuiz}
        className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
