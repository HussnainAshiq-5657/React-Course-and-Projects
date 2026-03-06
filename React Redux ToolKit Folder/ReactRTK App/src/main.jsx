import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reduxStore from './ReduxRTK/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
