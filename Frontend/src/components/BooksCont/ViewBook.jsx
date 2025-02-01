
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../axiosInstance.jsx';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../../ErrorHandeling/Error.jsx'
import '../CommonView.css';

export default function () {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axiosInstance.get('/api/auth/getBooks');
                const bookData = response.data;
                const foundBook = bookData.find((book) => book.id == id);
                setBook(foundBook);
            } catch (error) {
                setError(error);
                console.error('Error fetching Books:', error);
            } finally {
                setLoading(false);
            }
        };
        getBooks();
    }, [id]);

    if (loading) { return (<Loading />) };

    if (error) { return (<Error message={error.message} stack={error.stack} />) }

    if (!book) {
        return <div>No Book found.</div>;
    }

    return (
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
                <div style={{ overflowX: 'scroll' }} className="movie_desc">

                    {Object.entries(book.attributes).map(([key, value]) => (
                        <div key={key} className="detail-item">
                            <p className="text"> <strong>{key}</strong>  : {value}</p>
                        </div>
                    ))}

                </div>
                <div className="movie_social">
                    <button className='btn btn-primary'> <a target='_blank' style={{ textDecoration: 'none', color: 'white' }} href={book.attributes.wiki}> Wikipedia </a> </button>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary"> <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Books`} >All Books</Link> </button>
                </div>
            </div>
            <div style={{ maxHeight: '600px' }} className=" backgroundPoster blur_back bright_back"><img src={book.attributes.cover} alt="book-cover"></img>  </div>
        </div>
    );
}