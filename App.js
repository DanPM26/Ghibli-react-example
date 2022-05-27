import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Peliculas from './components/Peliculas/Peliculas';
import Inicio from './components/Inicio/Inicio';
import { Button } from 'react-bootstrap';


 
function App() {

  const [info,setinfo] = useState([]);

  const getmovies= async() =>{
  const url = 'https://ghibliapi.herokuapp.com/films'
  const resp = await axios.get(url)
  setinfo(resp.data)
  console.log(resp.data)
     
  }
  
  useEffect(() => {
    getmovies();
  }, []);

  return (
    <div className='App'>
     <Inicio info={info} />
    
    </div>
    
  );
}



export default App;
