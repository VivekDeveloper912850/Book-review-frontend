import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';           // 👈 import Provider
import { store } from './redux/store';            // 👈 import store
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>                     {/* 👈 wrap App in Provider */}
      <App />
    </Provider>
  </StrictMode>,
);