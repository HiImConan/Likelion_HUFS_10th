import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  // URL parameter
  const params = useParams();

  // useParams returns Str, so must use parseInt to change str to int
  const movie = getMovie(parseInt(params.movieId));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독: {movie.director}</p>
      <p>카테고리: {movie.category}</p>
    </div>
  );
};

export default Movie;
