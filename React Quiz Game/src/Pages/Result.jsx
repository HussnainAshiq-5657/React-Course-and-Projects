import { NavLink } from 'react-router';
import { useEffect, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function Result() {
  const { state, dispatch } = useContext(QuizContext);

  const percentage = Math.round((state.score / state.questions.length) * 100);

  useEffect(() => {
    const entry = {
      name: state.username,
      score: state.score,
      percentage,
      date: new Date().toLocaleString(),
    };

    const stored = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const updated = [...stored, entry];

    updated.sort((a, b) => b.score - a.score);

    localStorage.setItem('leaderboard', JSON.stringify(updated));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-3">🎉 Quiz Completed!</h2>

        <h4 className="text-lg mb-2">
          <span className="font-semibold">{state.username}</span>, your score is:
        </h4>

        <h1 className="text-5xl font-bold text-green-600">{state.score}</h1>

        <p className="text-gray-600 mt-2">
          Percentage: <span className="font-semibold">{percentage}%</span>
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <NavLink
            to="/leaderboard"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View Leaderboard
          </NavLink>

          <NavLink
            to="/"
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
