import React from 'react'
import '../../App.css'

export const Ganres = () => {
    return (
        <>
            <p className="section-subtitle">Online Streaming</p>
            <h2 className="h2 section-title">New Movies</h2>
            <ul className="filter-list">
                <li>
                    <button className="filter-btn">Комедия</button>
                </li>
                <li>
                    <button className="filter-btn">Боевик</button>
                </li>
                <li>
                    <button className="filter-btn">Драма</button>
                </li>
                <li>
                    <button className="filter-btn">Аниме</button>
                </li>
            </ul>

        </>
    )
}
