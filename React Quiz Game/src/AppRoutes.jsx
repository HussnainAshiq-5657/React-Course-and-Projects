import { Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import LeaderBoard from './Pages/LeaderBoard';
const Result = lazy(() => import('./Pages/Result.jsx'));

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />

        <Route
          path="/result"
          element={
            <Suspense fallback={<h2>Loading, Please Wait...</h2>}>
              <Result />
            </Suspense>
          }
        />

        <Route path="/leaderBoard" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
