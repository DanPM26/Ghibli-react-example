import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Inicio from './components/Inicio/Inicio';
import Peliculas from './components/Peliculas/Peliculas';
import Detalles from './components/Detalles/Detalles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Inicio />}></Route>
      <Route path="peliculas" element={<Peliculas />}></Route>
      <Route path=":movieId" element={<Detalles />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


