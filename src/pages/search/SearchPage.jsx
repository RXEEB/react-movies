import React from 'react'
import styles from './SearchPage.module.css'
import { useSelector } from 'react-redux';
import { Card } from '../../components/card'



export const SearchPage = () => {


    const search = useSelector(state => state.search.search);


    return (
        <>
            {search.length > 0 ?
                <main className={styles.content_items}>
                    {
                        search.map(movie => <Card movie={movie} key={movie.id} />)
                    }
                </main> :
                <div className={styles.empty}>
                    <h1>По вашему запросу ничего не найдено</h1>
                </div>

            }
        </>

    )
};

