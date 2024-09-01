import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDFjhKBu0upgVshWEmcG042vBhBiHU_ybU",
  authDomain: "my-react-blog-a0329.firebaseapp.com",
  projectId: "my-react-blog-a0329",
  storageBucket: "my-react-blog-a0329.appspot.com",
  messagingSenderId: "637629193688",
  appId: "1:637629193688:web:848f2a806c4bbe36d826ad"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
