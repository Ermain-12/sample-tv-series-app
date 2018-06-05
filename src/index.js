import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Create a variable to return the current date
// const getCurrentDate = () => {
//    const date = new Date();
//    return date.toDateString();
// }
// Create my own react-component
// const greeting = <h1>Hello, World... Current Date: {getCurrentDate()}</h1>

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
