import React from 'react'
import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';




export const Player = () => {
    const containerRef = useRef(null);
    const movie = useSelector(state => state.movie.movie);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kinobox.tv/kinobox.min.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (containerRef.current) {
                (window).kbox(containerRef.current, {
                    search: { kinopoisk: movie.id },
                    menu: {
                        enabled: false,
                    }
                });
            }
        };

        return () => {
            try {
                document.body.removeChild(script);
            } catch (e) { }
        };
    }, [movie.id]);

    return <div ref={containerRef} className="kinobox_player"></div>;
}


