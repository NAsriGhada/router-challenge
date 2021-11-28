import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filter, ratingChanged, rating }) => {
  return (
    <div className="list">
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(filter.toLowerCase().trim()) &&
            movie.rating >= rating
        )
        .map((movie) => (
          <MovieCard
            movie={movie}
            ratingChanged={ratingChanged}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default MovieList;
