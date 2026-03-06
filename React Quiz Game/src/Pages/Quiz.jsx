import { useEffect, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router';
import Timer from '../Components/timer';
import ProgressBar from '../Components/Progressbar';
import QuestionCard from '../Components/Questioncard';
import useTimer from '../Hooks/useTimer.js';

export default function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const { index, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(15);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: 'ANSWER', payload: false });
      reset();
    }
  }, [time, dispatch, reset]);

  if (!questions || questions.length === 0) {
    return (
      <h2 className="text-center mt-20 text-xl font-semibold text-gray-600">
        Loading Questions...
      </h2>
    );
  }

  if (index >= questions.length) {
    dispatch({ type: 'FINISH' });
    navigate('/result');
    return null;
  }

  const current = questions[index];

  const handleSelect = (option) => {
    dispatch({ type: 'ANSWER', payload: option === current.answer });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 space-y-6">
        <Timer time={time} />
        <ProgressBar current={index} total={questions.length} />
        <QuestionCard
          question={current.question}
          options={current.options}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
