import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><ErrorBoundary><App /></ErrorBoundary></React.StrictMode>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const baseUrl = import.meta.env.BASE_URL;
    const workerUrl = `${baseUrl}sw.js`;
    navigator.serviceWorker.register(workerUrl, { scope: baseUrl })
      .catch(error => console.warn('NOX HAVEN offline mode:', error));
  });
}
