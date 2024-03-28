import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StepContext from './StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //we used <StepContext> here so that it can wrap the entire application and application can access context values in it
  //parent to child 
  <StepContext>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StepContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
