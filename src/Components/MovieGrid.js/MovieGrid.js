import React, {useState, useEffect} from 'react'
import moviesData from '../../data/movies.json'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css'
import LoadingSpinner from '../LoadingSpinner/Spinner';

const MovieGrid = ({search}) => {
    const [movies, setMovies] = useState(moviesData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const searchMovies = async (movieName) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=e2584a57&s=${movieName}`);
            if(response.data.Search)
                setMovies(response.data.Search);
        } catch(e) {
            console.log(`Error: ${e}`);
            setError(true);
        }
        setLoading(false);
    }
    useEffect(() => {
        searchMovies(search );
    }, [search]);

    return (
        <div className='movieGrid'>
            {loading ? <LoadingSpinner /> : null}
            {!loading && !error ?          movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie} />
            )) : null}
            {error ? <h1>Error</h1> : null}
   
        </div>
    )
}

export default MovieGrid