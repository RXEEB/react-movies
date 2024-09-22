import React, { useState, useEffect, useRef } from "react";
import styles from './Home.module.css'
import { Card } from '../../components/card';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/currentPageSlice'
import { addMovies } from "../../redux/slices/moviesSlice";


export const Home = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage.currentPage)
    const movies = useSelector(state => state.movies.movies);


    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [currentPage])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <= 0.8) {
            dispatch(setCurrentPage(currentPage + 1))
            console.log('scroll');

        }
    }

    return (
        <main className={styles.content_items}>
            {
                movies.map(movie => <Card movie={movie} key={movie.id} />)
            }
        </main>

    )
};


