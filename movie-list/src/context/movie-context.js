import React, { useState, useEffect } from 'react';

function fetchRetry(url, options = {}, retries = 3) {
    return fetch(url, options)
      .then(res => {
        if (res.ok) return res.json()
  
        if (retries > 0) {
          return fetchRetry(url, options, retries - 1)
        } else {
          throw new Error(res)
        }
      })
      .catch(console.error)
  }

export const MovieContext = React.createContext({
    movies: [],
    detailMovie: () => {},
    updateFilter: () => {}
});

const MovieContextProvider = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        fetchRetry('https://sometimes-maybe-flaky-api.gdshive.io/', {}, 5)
        .then (responseData => {
            //add unique id
            let updatedData = responseData.map(data => {
                return {id: data.name.toLowerCase().replace(' ','-'), ...data}
            })
            setMovieList(updatedData)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const updateFilter = (filter) => {
        setFilter(filter)
    }

    const applyFilter = (allList, filter) => {
        const { genre, year } = filter;
        let result = allList;
        
        if (genre) {
            result  = result.filter(res => res.genre.toLowerCase() === genre)
        }

        if (year) {
            result  = result.filter(res => res.productionYear === +year)
        }

        return result;
    }

    const filteredMoviesList = applyFilter(movieList, filter);

    const movieDetail = (id) => {
        return movieList.filter(movie => movie.id === id);
    }

    return (
    <MovieContext.Provider value={{ 
        allMovies: movieList, 
        filter: filter,
        filterMovies: filteredMoviesList, 
        detailMovie: movieDetail, 
        updateFilter: updateFilter }}>
            {props.children}
    </MovieContext.Provider>);
}
 
export default MovieContextProvider;