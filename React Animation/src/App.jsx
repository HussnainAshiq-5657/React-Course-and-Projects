import { BrowserRouter } from 'react-router';
import Navbar from './components/Header.jsx'
import AnimatedRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
