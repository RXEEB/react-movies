import React from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { Film, Cat, Baby, Popcorn, Bug, House } from 'lucide-react';
import { setSelectVideo } from '../../redux/slices/selectvideoSlice'
import { clearMovies } from '../../redux/slices/moviesSlice'
import { setCurrentPage } from '../../redux/slices/currentPageSlice'
import { Link } from 'react-router-dom';

export const Menu = ({ handleMenuClick }) => {

    const videoTypes = [
        { video: 'Главная', videoEn: '', videoIcon: <House /> },
        { video: 'Фильмы', videoEn: 'movie', videoIcon: <Film /> },
        { video: 'Сериалы', videoEn: 'tv-series', videoIcon: <Popcorn /> },
        { video: 'Мультфильмы', videoEn: 'cartoon', videoIcon: <Baby /> },
        { video: 'Аниме', videoEn: 'anime', videoIcon: <Cat /> },
        { video: 'Аниме-сериалы', videoEn: 'animated-series', videoIcon: <Bug /> }
    ];
    const dispatch = useDispatch()

    const getVideoType = (type) => {
        window.scrollTo(0, 0);
        dispatch(setCurrentPage(1))
        dispatch(clearMovies());
        dispatch(setSelectVideo(type.videoEn))

    }
    console.log(dispatch);

    return (
        <nav className={styles.menu}>
            <ul>
                {videoTypes.map((type, index) => (
                    <Link to='/'>      <li key={index} className={styles.videoTypeContainer} onClick={() => { getVideoType(type); handleMenuClick() }}>
                        <span className={styles.icon}>{type.videoIcon}</span>
                        <span className={styles.videoText}>{type.video}</span>
                    </li></Link>
                ))}
            </ul>
        </nav>
    )
}

