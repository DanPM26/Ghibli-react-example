import React, { useEffect ,useState } from 'react'
import { Col } from 'react-bootstrap';
import Pelicula from '../Pelicula/Pelicula'
import axios from 'axios';
import { Link } from 'react-router-dom'


const Peliculas = () => {

  const [moviesState,setMovies] = useState([]);

  const getmovies= async() =>{
    const url = 'https://ghibliapi.herokuapp.com/films'
    const resp = await axios.get(url)
    setMovies(resp.data)
    console.log(resp.data)
       
    }
    
    useEffect(() => {
      getmovies();
    }, []);

  return (
    <div>
      <Col lg={3} md={4} sm={6} xs={12} className="mt-3">
      {
        moviesState.map((info,index) =>{
          return <Pelicula data={info} key={index}/>
      
        })
      }
          </Col>
    </div>
  )

  
}

export default Peliculas