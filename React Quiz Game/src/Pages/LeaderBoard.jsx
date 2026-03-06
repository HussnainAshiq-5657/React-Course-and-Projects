import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';

export default function LeaderBoard() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('leaderboard')) || [];

    const uniqueData = [];
    const seen = new Set();

    for (let item of stored) {
      const key = `${item.name}-${item.score}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueData.push(item);
      }
    }

    setData(uniqueData);
  }, []);

  const clearBoard = () => {
    localStorage.removeItem('leaderboard');
    setData([]);
    Navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">🏆 Leaderboard</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">No Scores yet! Play the quiz.</p>
      ) : (
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Score</th>
                <th className="py-3 px-4 text-left">Percentage</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={`${entry.name}-${index}`} className="odd:bg-gray-100 even:bg-white">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 font-medium">{entry.name}</td>
                  <td className="py-2 px-4">{entry.score}</td>
                  <td className="py-2 px-4">{entry.percentage}%</td>
                  <td className="py-2 px-4">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={clearBoard}
        className=" mt-6 bg-red-500 hover:bg-red-600 mr-4 text-white px-6 py-2 rounded-2xl transition"
      >
        Clear Leaderboard
      </button>
    </div>
  );
}
