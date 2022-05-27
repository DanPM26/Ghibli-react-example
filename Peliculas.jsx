import React from 'react'
import { Card, Button } from 'react-bootstrap';


const Peliculas = ({info}) => {
  return (
    <div>
<div>
        {info && 
        info.map(film =>
        <Card key={film.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={film.movie_banner} />
          <Card.Body>
          <Card.Title>{film.original_title}</Card.Title>
          <Peliculas />
         
          
          </Card.Body>
        </Card> 
        )}
      </div>
    </div>
  )

}

export default Peliculas