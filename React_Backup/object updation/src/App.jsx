
import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar';
import Movies from './components/Movies';

function App() {

  // let [movies,setMovies] = useState([]);
  const movieData = [
  {
    id:10,
    movieName: "Inception",
    url: "https://www.imdb.com/title/tt1375666/",
    ticketStatus: "Booked",
    ticketNumber: 3,   // number of tickets booked
    actorName: "Leonardo DiCaprio",
    qty:5
  },
  {
    id:11,
    movieName: "Interstellar",
    url: "https://www.imdb.com/title/tt0816692/",
    ticketStatus: "Available",
    ticketNumber: 0,
    actorName: "Matthew McConaughey",
    qty:5
  },
  {
    id:13,
    movieName: "Avengers: Endgame",
    url: "https://www.imdb.com/title/tt4154796/",
    ticketStatus: "Sold Out",
    ticketNumber: 5,
    actorName: "Robert Downey Jr.",
    qty:1
  },
  {
    id:18,
    movieName: "Joker",
    url: "https://www.imdb.com/title/tt7286456/",
    ticketStatus: "Booked",
    ticketNumber: 2,
    actorName: "Joaquin Phoenix",
    qty:0
  }
];

  return (
    <>
      <Navbar/>
      <Movies movies={movieData}/>
    </>
  )
}

export default App
