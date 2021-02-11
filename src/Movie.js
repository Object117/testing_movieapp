import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({title, year, summary, poster, genres}) {
    return (
        <div className = "movie">
            <img src={poster} alt={title} title={title} />       
            <div className = "movie_data">
                <h3 className = "movie__title">{title}</h3>
                <h3 className = "movie__year">{year}</h3>
                <ul className = "movie_genres">
                    {genres.map((genre, index) =>(
                        <li key = {index} className = "genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className = "movie__summary">{summary.slice(0, 140)}...</p>
             </div>
        </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;