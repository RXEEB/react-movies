import React, { useRef, useState } from 'react';
import styles from './search.module.css';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovie } from '../../redux/slices/searchSlice'

export const SearchForm = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

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
    };

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendSearch();
        }
    };

    return (
        <div className={styles.search_wrapper}>
            <div className={styles.formContainer}>
                <form>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        type="text"
                        placeholder='Поиск....'
                        value={searchValue}
                        onChange={onChangeInput}
                        onKeyDown={handleEnterPress}
                    />
                </form>
                <div>
                    {searchValue && (
                        <svg onClick={onClickClear} className={styles.clear} fill="#ffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                        </svg>
                    )}
                </div>
            </div>
            <div className={styles.forward}>
                <Link to='/search'>
                    <button onClick={handleSendSearch} type="submit" className={styles.sendButton}>
                        <Search color='grey' />
                    </button>
                </Link>
            </div>
        </div>
    );
};
