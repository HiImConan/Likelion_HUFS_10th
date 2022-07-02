import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  // URL parameter
  const params = useParams();

  // useParams returns Str, so must use parseInt to change str to int
  const movie = getMovie(parseInt(params.movieId));

  // queryString(search:'?details=true/false')
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
    console.log(detail);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>감독: {movie.director}</p>
      <p>카테고리: {movie.category}</p>
      <button type="button" onClick={handleClick}>
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
  );
};

export default Movie;
