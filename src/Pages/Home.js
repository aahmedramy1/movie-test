import React from 'react'
import MovieGrid from '../Components/MovieGrid.js/MovieGrid'

const Home = ({search}) => {
  return (
    <div>
        <MovieGrid search= {search} />
    </div>
  )
}

export default Home