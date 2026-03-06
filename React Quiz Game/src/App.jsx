import AppRoutes from './AppRoutes';
import QuizProvider from './context/QuizContext';
function App() {
  return (
    <>
      <QuizProvider>
        <AppRoutes />
      </QuizProvider>
    </>
  );
}

export default App;
