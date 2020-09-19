import React, {useState, createContext} from 'react'


export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '10',
      id: 2223
    },
    {
      name: 'Game of Thrones',
      price: '12',
      id: 2224
    },
    {
      name: 'Inception',
      price: '16',
      id: 2225
    },
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};




