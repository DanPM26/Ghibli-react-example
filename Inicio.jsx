import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Peliculas from '../Peliculas/Peliculas';




const Inicio = ({info}) => {
  

  return (
    <div>
     <div>
        {info && 
        info.map(film =>
        <Card key={film.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={film.image} />
          <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Button> Más info</Button>
          
          
         
         
          
          </Card.Body>
        </Card> 
        )}
      </div>


      
    </div>
  )
}

export default Inicio