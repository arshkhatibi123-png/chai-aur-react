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

// ######### root.render########
//In React 18 and later, root.render() is the
//  method used to display 
// a React component inside a browser DOM element. 
// It is the entry point for your application's UI. 

//Key Points

// Entry Point: root.render() is 
// typically called only 
// once in an application's lifecycle 
// to perform the initial render.

// DOM Management: Once called,
//  React takes over the management 
// of the DOM inside the specified container element.

// Updates: Subsequent updates to the UI
//  are handled internally by React 
// through state and prop changes 
// within your components,
//  not by calling root.render() again.