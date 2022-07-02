import React from "react";
import { getMovies } from "../movie_data";
import { Link, Outlet } from "react-router-dom";

const Movies = () => {
  const movies = getMovies();
  return (
    <div>
      <h1>넷플릭스 영화 추천 목록</h1>
      <div>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ display: "block" }}
          >
            {movie.title}
          </Link>
        ))}
      </div>
      <hr></hr>
      <Outlet />
    </div>
  );
};

export default Movies;
