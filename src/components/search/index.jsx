import React, { useRef, useState } from 'react';
import styles from './search.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovie } from '../../redux/slices/searchSlice'

export const Search = () => {
    const inputRef = useRef();
    const dispatch = useDispatch(); // Используйте useDispatch здесь

    const [searchValue, setSearchValue] = useState('');


    const handleSendSearch = async () => {

        try {
            const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${searchValue}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-API-KEY': 'G9TWA6Z-TSD42XZ-GZVZFZV-566ZTB4',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            dispatch(setSearchMovie(json.docs));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    };


    return (
        <div className={styles.search_wrapper}>
            <div className={styles.formContainer}>

                <svg className={styles.icon} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>

                <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    placeholder='Поиск....'
                    value={searchValue}
                    onChange={onChangeInput}
                />
                <div>
                    {searchValue && (
                        <svg onClick={onClickClear} className={styles.clear} fill="#ffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                        </svg>
                    )}
                </div>


            </div>
            <Link to='/search'>
                <button onClick={handleSendSearch} type="submit" className={styles.sendButton}>
                    <svg viewBox="0 0 24 24" fill="grey" xmlns="http://www.w3.org/2000/svg" stroke="#8d8686"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </Link>

        </div>
    );
};
