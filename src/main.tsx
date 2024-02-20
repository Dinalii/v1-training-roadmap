import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './app.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Root element not found in the document.");
}
