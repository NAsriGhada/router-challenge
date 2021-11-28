import React from "react";
import ReactStars from "react-rating-stars-component";

const Search = ({ ratingChanged, getSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search a movie"
        onChange={(e) => getSearch(e.target.value)}
      ></input>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Search;
