import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Player = () => {
    const movie = useSelector(state => state.movie.movie);

    useEffect(() => {
        if (window.kbox) {
            window.kbox('.kinobox_player', { search: { kinopoisk: movie.id } });
        }
    }, [movie]);

    return <div className="kinobox_player" style={{ width: '100%' }}></div>;
};


