import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDW6C5gHNyhXuB0Q0YobWlNFDVvqky5eD8",
  authDomain: "docs-a7303.firebaseapp.com",
  projectId: "docs-a7303",
  storageBucket: "docs-a7303.appspot.com",
  messagingSenderId: "1076294292037",
  appId: "1:1076294292037:web:6929ae23f9b550e79ac92c"
};


initializeApp(firebaseConfig);
export const database = getFirestore(initializeApp(firebaseConfig));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
