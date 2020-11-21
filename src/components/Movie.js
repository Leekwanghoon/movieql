import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ year, title, summary, poster, genres }) {
    
    console.log("genres",genres);
    return (
        <Link
            to={{
                pathname: "movie-detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <div>
                <img
                    src={poster}
                    alt={title}
                    title={title}
                />
                <div>
                    <h3>{title}</h3>
                    <h5>{year}</h5>
                    <ul>
                        {genres.map((genre, index) => (
                            <li key={index}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                        <p>{summary.slice(0,140)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;