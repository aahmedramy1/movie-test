import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.Poster} />
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>
        {movie.Year}
      </Card.Text>
      <Link to={`/movie/${movie.imdbID}`}>
        <Button variant="primary">Details</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default MovieCard