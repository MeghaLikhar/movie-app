import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../utils/api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data.Search)
    })
  }, []);

  return (
    <div>
      <div className="container movielist">
        {movies.slice(0, 8).map((movie) => (
            <div className="movie-card">
              <Link to={`/movie/details/${movie.imdbID}`}>
              <div className='img-section'>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              </Link>
              <div className='description-block'>
                <div className="movie-release-year">Release Year : {movie.Year}</div>
                <h3 className="movie-title">{movie.Title}</h3>
              </div>
            </div>

        ))}
      </div>
    </div>
  );
};

export default MovieList;
