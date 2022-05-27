import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Inicio from './components/Inicio/Inicio';
import Peliculas from './components/Peliculas/Peliculas';

import Navbar from './components/Navbar/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/inicio' element={<Inicio />}></Route>
      <Route path='/peliculas' element={<Peliculas />}></Route>
    </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);


