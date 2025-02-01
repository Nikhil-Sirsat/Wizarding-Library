import React, { useState, useEffect } from 'react';
import '../AllSearch.css';
import unknown from '../../assets/unknown-final-Comp.jpg';
import { Link } from 'react-router-dom';

function SearchChars({ chars }) {
    const [query, setQuery] = useState('');
    const [filteredChars, setFilteredChars] = useState([]);

    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            if (query.length > 2) {
                const results = chars.filter(char =>
                    char.attributes.name && char.attributes.name.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredChars(results);
            } else {
                setFilteredChars([]);
            }
        }, 300);

        return () => clearTimeout(debounceFilter);
    }, [query, chars]);

    return (
        <div className='search-cont'>
            <input
                className='search-inp'
                type="text"
                placeholder="Search Characters..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {query.length > 0 && filteredChars.length === 0 && (
                    <p>No Character found</p>
                )}
                {filteredChars.map(char => (
                    <li key={char.id}>
                        <div className="movie_card" id="bright">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={(char.attributes.image) ? char.attributes.image : unknown}></img>
                                    <h2> {char.attributes.name} </h2>
                                    <br></br>
                                    <br></br>
                                    <h5>
                                        Gendre : {char.attributes.gender}
                                    </h5>
                                    <span className="minutes">
                                        Born on : {char.attributes.born}
                                    </span>
                                    <br></br>
                                    <span className="minutes">
                                        Died on : {char.attributes.died}
                                    </span>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">
                                        <small className="text-body-secondary"><a target="_blank" href={char.attributes.wiki}> Wikipedia </a></small>
                                    </p>
                                </div>
                                <div className="movie_social">
                                    <button className="btn btn-primary" > <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Characters/${char.id}`} > See More </Link> </button>
                                </div>
                            </div>
                            <div className=" backgroundPoster blur_back bright_back"><img src={(char.attributes.image) ? char.attributes.image : unknown} alt="movie-poster"></img>  </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchChars;
