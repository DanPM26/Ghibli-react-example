import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Badge, Card } from 'react-bootstrap'

const Detalles = () => {
    const { movieId } = useParams()
    const [pelinfo,setpelinfo] = useState({})

    const getpelicula = async(id) =>{
    const url = `https://ghibliapi.herokuapp.com/films/${id}`
    const res = await axios.get(url)
    console.log(res)
    setpelinfo(res.data)
   
    }

    useEffect(() =>{
        getpelicula(movieId)
    }, [])
    
  return (
    <>
    <Row>
      <Col lg={12}>
        <div className="movie__hero">
          <img width="100%" alt={`${pelinfo.title}-img`} src={pelinfo.movie_banner} className="movier__hero-image" />
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card className="movie__info mt-3" >
          <Card.Title className=" d-inline-flex">
            <h1 className="movie__info-title">
              {pelinfo.title}
              <Badge style={{ marginLeft: '1rem' }} bg={
               pelinfo.rt_score > 90
                  ? 'success' : 'warning'}>
                {pelinfo.rt_score}
              </Badge>
            </h1>
          </Card.Title>
        </Card>
        <div className="movie__info">
          <div className="movie__info-director ">
            <h3>Director: <span>{pelinfo.director}</span> </h3>
            <h4>Duracion: <span>{pelinfo.running_time}</span></h4>
          </div>
          <p className="movie__info-description" style={{ fontSize: '1.5rem' }}>
            {pelinfo.description}
          </p>
        </div>
      </Col>
    </Row>
  </>
  )
}

export default Detalles
