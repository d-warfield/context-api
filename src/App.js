import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import AddMovie from './AddMovie';

function App() {

  // const [movies, setMovies] = useState([
  //   {
  //     name: 'Harry Potter',
  //     price: '$10',
  //     id: 2223
  //   },
  //   {
  //     name: 'Game of Thrones',
  //     price: '$12',
  //     id: 2224
  //   },
  //   {
  //     name: 'Inception',
  //     price: '$16',
  //     id: 2225
  //   },
  // ]);

  return (
    <MovieProvider>  
      <div className="App">
        <Nav />
        <MovieList/>
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
