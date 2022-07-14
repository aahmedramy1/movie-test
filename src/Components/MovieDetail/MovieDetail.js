/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "./MovieDetail.css";
import LoadingSpinner from '../LoadingSpinner/Spinner';

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getMovie = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=e2584a57&i=${id}`);
            console.log(response.data);
            setMovie(response.data);
            setLoading(false);
        } catch(e) {
            console.log(`Error: ${e}`);
            setError(true);
            setLoading(false)
        }
    }
    useEffect(() => {
        getMovie();
    }, [id]);

    return (
    <div className='movieDetailContainer'>
        {loading ? <LoadingSpinner /> : null}
        {error ? <h1>Error</h1> : null}

        {!loading && !error ? 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
                {movie.Year}
            </Card.Text>
            </Card.Body>
        </Card> : null}
    </div>
    )
}

export default MovieDetail;