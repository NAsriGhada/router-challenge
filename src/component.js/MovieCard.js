import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom"


const MovieCard = ({ movie, ratingChanged, rating }) => {
  return (
    <div>
      {/*<div>
        <div>
          <div>
            <img src={movie.posterURL} alt={movie.title} />
            <div>
              <span>{movie.description}</span>
              <h1>{movie.title}</h1>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={movie.rating}
                onChange={ratingChanged}
              />
              <button>Watch It Now</button>
            </div>
          </div>
        </div>
      </div> */}
      <Card style={{ width: "18rem" }}>
        <div className="images">
          <Card.Img variant="top" src={movie.posterURL} />
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onChange={ratingChanged}
          />
          <br />
          <Link to ={`/desTrailer/${movie.id}`}>
          <Button variant="primary">Watch The Trailer</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
