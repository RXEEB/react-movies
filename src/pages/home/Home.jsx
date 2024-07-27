import React from 'react';
import styles from './Home.module.css'
import { Card } from '../../components/card';
import { useSelector } from 'react-redux';


export const Home = () => {

    const movies = useSelector(state => state.movies.movies);

    return (
        <main className={styles.content_items}>
            {
                movies.map(movie => <Card movie={movie} key={movie.id} />)
            }
        </main>

    )
};
