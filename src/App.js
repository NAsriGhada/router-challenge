import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import MovieList from "./component.js/MovieList";
import Search from "./component.js/Search";
import Add from "./component.js/Add";
import Header from "./component.js/Header";
import { Route, Switch} from "react-router-dom"
import DesTrailer from "./component.js/DesTrailer";
//import MovieCard from "./component.js/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Harry Potter and the Deathly Hallows: Part 2",
      description:
        "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      rating: "2",
      trailer: "https://www.youtube.com/embed/mObK5XD8udk"
    },
    {
      id: 2,
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      posterURL:
        "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/lord-of-the-rings-the-return-of-the-king-2003/large_j6NCjU6Zh7SkfIeN5zDaoTmBn4m.jpg",
      rating: "5",
      trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo"
    },
    {
      id: 3,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: "1",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 4,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: "5",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 5,
      title: "The Purge",
      description:
        "A wealthy family is held hostage for harboring the target of a murderous syndicate during the Purge, a 12-hour period in which any and all crime is legal.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjI3MDI0MTA1N15BMl5BanBnXkFtZTgwOTk4NjU5ODE@._V1_.jpg",
      rating: "4",
      trailer: "https://www.youtube.com/embed/K0LLaybEuzA"
    },
    {
      id: 6,
      title: "Arrival",
      description:
        "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
      rating: "2",
      trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g&ab_channel=ParamountPictures"
    },
    {
      id: 7,
      title: "Now You See Me",
      description:
        "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_.jpg",
      rating: "4",
      trailer: "https://www.youtube.com/embed/tFMo3UJ4B4g"
    },
    {
      id: 8,
      title: "The Conjuring",
      description:
        "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
      rating: "4",
      trailer: "https://www.youtube.com/embed/k10ETZ41q5o"
    },
    {
      id: 9,
      title: "The Mothman Prophicies",
      description:
        "A reporter is drawn to a small West Virginia town to investigate a series of strange events, including psychic visions and the appearance of bizarre entities.",
      posterURL:
        "https://www.pghfilm.org/wp-content/uploads/2021/02/mothman-prophecies.jpg",
      rating: "3",
      trailer: "https://www.youtube.com/embed/bXcpwJbXT7o"
    },
    {
      id: 10,
      title: "Game of Thrones",
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
      rating: "3",
      trailer: "https://www.youtube.com/embed/KPLWWIOCOOQ"
    },
  ]);

  const [rating, setRating] = useState(1);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const [filter, setFilter] = useState("");
  const getSearch = (filter) => {
    setFilter(filter);
  };

  /*{const newArr = [
    ...movies,
    [
      {
        id: 10,
        title: "Now You See Me",
        description:
          "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
        posterURL: "http://www.impawards.com/2013/posters/now_you_see_me.jpg",
        rating: "4",
      },
    ],
  ];

  const handleClick = () => {
    setMovies(newArr)}
  };*/
  const handleAdd = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
    <Switch>
      <Route exact path='/'>
      <Header />
      <Search
        ratingChanged={ratingChanged}
        getSearch={getSearch}
        filter={filter}
      />
      <Add handleAdd={handleAdd} />
      <MovieList
        movies={movies}
        filter={filter}
        ratingChanged={ratingChanged}
        rating={rating}
      />
          </Route>
        <Route path="/desTrailer/:movieId" render={(props)=><DesTrailer key={movies.id} movies={movies} {...props} />}/>
    </Switch>

      {/*<h1>{movie.title}</h1>
          <img src={movie.posterURL} alt="movie"></img>
          <h2>{movie.description}</h2>
      <h2>{movie.rating}</h2> */}
      {/* //<button onClick={handleClick}>click me</button> */}
    </div>
    
  );
};

export default App;
