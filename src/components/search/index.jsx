import React, { useRef, useState } from 'react';
import styles from './search.module.css'
import { useDispatch } from 'react-redux';
import { setSearchMovie } from '../../redux/slices/searchSlice'

export const Search = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSendSearch = async () => {
        if (searchValue.trim()) {
            try {
                const response = await fetch(`https://api.example.com/search?query=${encodeURIComponent(searchValue)}`);
                const data = await response.json();
                dispatch(setSearchMovie(data));
            } catch (error) {
                console.error("Ошибка запроса:", error);
            }
        }
    };



    return (
        <div className={styles.formContainer}>

            <form onSubmit={handleSendSearch}>
                <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    placeholder='Поиск....'
                    value={searchValue}
                    onChange={onChangeInput}
                />
                {searchValue && (
                    <svg onClick={onClickClear} className={styles.clear} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                    </svg>
                )}
                <button className={styles.sendButton} type="submit">Отправить</button>
            </form>

        </div>


    )
}