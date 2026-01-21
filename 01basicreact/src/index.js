import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// "React.StrictMode>" is a development-only tool
//  that helps identify potential issues, bugs, and deprecated code patterns in your application. 
// It does not render any visible UI 
// and has no impact on the production build 
// or performance for your users. 
