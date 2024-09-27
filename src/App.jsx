import React, { useEffect } from 'react';
import './App.css';
import { SearchPage } from './pages/search/SearchPage.jsx'
import { Header } from './components/header';
import { Home } from './pages/home/Home.jsx';
import { Moviedetails } from './pages/moviedetails/Moviedetails.jsx';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from './redux/slices/moviesSlice.jsx'


function App() {

  const dispatch = useDispatch()
  const selectedVideoType = useSelector(state => state.selectVideo.selectVideo);
  const currentPage = useSelector(state => state.currentPage.currentPage)




  // React.useEffect(() => {
  //   fetch('http://localhost:5173/data.json').then((resp) => resp.json()).then(json => dispatch(addMovies(json.docs)))
  // }, []);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=${currentPage}&year=2024&limit=15&selectFields=id&selectFields=persons&selectFields=name&selectFields=description&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=name&notNullFields=description&notNullFields=year&notNullFields=poster.url&type=${selectedVideoType}`, {
          method: 'GET',
          headers: {
            mode: 'no-cors',
            'Accept': 'application/json',
            'X-API-KEY': 'G9TWA6Z-TSD42XZ-GZVZFZV-566ZTB4',
          },
        });
        const json = await response.json();
        dispatch(addMovies(json.docs));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [selectedVideoType, currentPage]);

  // currentPage
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetails/" element={<Moviedetails />} />
        <Route path="/search/" element={<SearchPage />} />
      </Routes>

    </>
  );
}

export default App;
