import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../../redux/slices/moviesSlice';

export const Card = ({ movie }) => {
    const dispatch = useDispatch();

    const handleMovieSelect = () => {
        dispatch(setSelectedMovie(movie));
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
    };

    const truncateString = (str, maxLength) => {
        return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
    };

    return (
        <>
            <Link to='/moviedetails'>
                <div className="movie-block-wrapper" onClick={handleMovieSelect}>
                    <div className="movie-block">
                        <img className='img' src={movie.poster && movie.poster.previewUrl} alt='Постер' />
                        <div className="movie-block-bottom">
                            <h1 className="movie-block-title">
                                {truncateString(movie.name || movie.alternativeName, 22)}
                            </h1>
                            <div className='movie-block-genre'>
                                {movie.genres.length > 0 ? (
                                    <div className="badge badge-outline">{movie.genres[0].name}</div>
                                ) : (
                                    <span>No genre available</span>
                                )}
                                <div className='year'>{movie.year}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
