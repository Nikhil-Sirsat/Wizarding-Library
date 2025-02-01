import React, { useState, useEffect } from 'react';
import '../AllSearch.css';
import {Link} from 'react-router-dom';

function SearchMovies({ movies }) {
    const [query, setQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            if (query.length > 2) {
                const results = movies.filter(movie =>
                    movie.attributes.title && movie.attributes.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredMovies(results);
            } else {
                setFilteredMovies([]);
            }
        }, 300);

        return () => clearTimeout(debounceFilter);
    }, [query, movies]);

    return (
        <div className='search-cont'>
            <input
                className='search-inp'
                type="text"
                placeholder="Search Movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {query.length > 0 && filteredMovies.length === 0 && (
                    <p>No movies found</p>
                )}
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <div className="movie_card" id="bright">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={movie.attributes.poster}></img>
                                    <h2> {movie.attributes.title} </h2>
                                    <h5>
                                        {movie.attributes.release_date}
                                        <br></br>
                                        <br></br>
                                        {movie.attributes.producers}
                                    </h5>
                                    <span className="minutes">
                                        {movie.attributes.running_time}
                                    </span>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">
                                        {movie.attributes.summary}
                                    </p>
                                </div>
                                <div className="movie_social">
                                    <button className="btn btn-primary"> <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Movies/${movie.id}`} > See More </Link> </button>
                                </div>
                            </div>
                            <div className=" backgroundPoster blur_back bright_back"><img src={movie.attributes.poster} alt="movie-poster"></img>  </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchMovies;
