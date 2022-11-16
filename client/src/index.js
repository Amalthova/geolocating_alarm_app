import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App.js';
import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:3080"; //, 'http://localhost:10000/'
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3080",
// });

// export default api;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


