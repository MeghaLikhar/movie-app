import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../utils/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (

    <div className="moviedetails">
      <div className="movie-container">
        <div className='col-30 col-m-100'>
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        </div>
        <div className='col-70 col-m-100'>
          <div className="title">{movie.Title}</div>
          <h3><span>{movie.Genre}</span></h3>
          <h3>{movie.Released  != 'N/A' || movie.Year != 'N/A' ? <div className="movie-rating release-year">Release Year : {movie.Released != 'N/A' ? movie.Released : movie.Year}</div>:''}</h3>
          <div className="dis">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
              Officia quae dolores veritatis dignissimos earum perspiciatis.<br /> eveniet, nihil nemo voluptatem ratione.</p>
            <div className="movie-rating">IMDB Rating : {movie.imdbRating}</div>
            {movie.Ratings.map((rating)=>(
              <div className="movie-rating">{rating.Source} : {rating.Value}</div>
            ))}
          </div>
          <div className="movie-metadata">
          <span className="movie-director">• &nbsp; Director: {movie.Director}</span>
          <br/>
          <span className="movie-actors">• &nbsp; Actors: {movie.Actors}</span>
          <br/>
          <span className="movie-actors">• &nbsp; IMBD Votes: {movie.imdbVotes}</span>
          <br/>
          <span className="movie-plot">• &nbsp; Plot: {movie.Plot}</span>
        </div>
          <button>Watch Now</button>
        </div>        
      </div>
    </div>

  );
};

export default MovieDetails;
