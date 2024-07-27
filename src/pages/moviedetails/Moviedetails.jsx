
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Moviedetails.module.css'
import kinopoisklogo from '../../assets/images/kinopoisk.svg'
import imdblogo from '../../assets/images/imdb.svg'
import { Player } from '../../components/player';


export const Moviedetails = () => {
    const movie = useSelector(state => state.movie.movie);

    console.log(movie);
    return (
        <>


            <div className={styles.card_content_wrapper}>
                <div className={styles.card_poster}>
                    <img className={styles.poster} src={movie.poster && movie.poster.previewUrl} alt="Movie Poster" />
                    <div className={styles.rating}>
                        <div className={styles.rating_box}>
                            <img src={kinopoisklogo} alt="кинопоиск" />
                            <div className={styles.rating_box_current}>
                                <div>{movie.rating.kp}</div>
                                <div>{movie.votes ? movie.votes.kp : '-'}</div>
                            </div>

                        </div>
                        <div className={styles.rating_box}>
                            <img src={imdblogo} alt="imdb" />
                            <div className={styles.rating_box_current}>
                                <div>{movie.rating.imdb}</div>
                                <div>{movie.votes ? movie.votes.imdb : '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.card_content}>
                    <h1 className={styles.card_title}>{movie.name ? movie.name : movie.alternativeName}</h1>
                    <h2 className={styles.alternativeName}>{movie.alternativeName}</h2>
                    <div className={styles.key}>Актеры:
                        {movie?.persons ? movie.persons
                            .map((person) => <div className={styles.value} key={person.name} >{person.name}</div>)
                            : ''}
                    </div>
                    <div className={styles.key}>Жанры:
                        {movie?.genres ? movie.genres
                            .map((genre) => <div className={styles.value} key={genre.name} >{genre.name}</div>)
                            : ''}
                    </div>
                    <div className={styles.key}>Страна:
                        {movie?.countries ? movie.countries
                            .map((countrie) => <div key={countrie.index} className={styles.value}>{countrie.name}</div>)
                            : ''}
                    </div>
                    <div className={styles.key}>Год:
                        <div className={styles.value}>{movie.year}</div>
                    </div>
                    <div className={styles.key}>Длительность:
                        <div className={styles.value}>{movie.movieLength} мин</div>
                    </div>
                    <div className={styles.description}>{movie.description}</div>
                    <Player />
                </div>
            </div>





        </>
    )
}
