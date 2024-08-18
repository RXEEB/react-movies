import React from 'react'
import styles from './SearchPage.module.css'
import { useSelector } from 'react-redux';
import { Card } from '../../components/card'



export const SearchPage = () => {
    const [added, setAdded] = React.useState(false)

    const search = useSelector(state => state.search.search);


    return (
        <main className={styles.content_items}>
            {
                search.map(movie => <Card movie={movie} key={movie.id} />)
            }
        </main>

    )
};

