import React, { useState, useEffect } from 'react';
import '../AllSearch.css';
import { Link } from 'react-router-dom';

function SearchBooks({ books }) {
    const [query, setQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        const debounceFilter = setTimeout(() => {
            if (query.length > 2) {
                const results = books.filter(book =>
                    book.attributes.title && book.attributes.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredBooks(results);
            } else {
                setFilteredBooks([]);
            }
        }, 300);

        return () => clearTimeout(debounceFilter);
    }, [query, books]);

    return (
        <div className='search-cont'>
            <input
                className='search-inp'
                type="text"
                placeholder="Search Books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {query.length > 0 && filteredBooks.length === 0 && (
                    <p>No Book found</p>
                )}
                {filteredBooks.map(book => (
                    <li key={book.id}>
                        <div className="movie_card" id="bright">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={book.attributes.cover}></img>
                                    <h2> {book.attributes.title} </h2>
                                    <h5>
                                        {book.attributes.release_date}
                                        <br></br>
                                        <br></br>
                                        {book.attributes.author}
                                    </h5>
                                    <span className="minutes">
                                        {book.attributes.pages} Pages
                                    </span>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">
                                        {book.attributes.summary}
                                    </p>
                                </div>
                                <div className="movie_social">
                                    <button className="btn btn-primary"> <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Books/${book.id}`} >See More</Link> </button>
                                </div>
                            </div>
                            <div className=" backgroundPoster blur_back bright_back"><img src={book.attributes.cover} alt="movie-poster"></img>  </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBooks;
