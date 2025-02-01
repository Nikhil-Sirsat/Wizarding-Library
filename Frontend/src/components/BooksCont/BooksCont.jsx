
import { useState, useEffect } from "react"
import AllBooks from './AllBooks.jsx'
import Loading from "../Loading/Loading.jsx";
import Error from "../../ErrorHandeling/Error.jsx";
import axiosInstance from '../../axiosInstance.jsx';
import SearchBooks from "./SearchBook.jsx";

export default function () {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axiosInstance.get('/api/auth/getBooks');
                // console.log(response.data);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error.message);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getBooks();
    }, []);

    if (loading) { return (<Loading />) };
    if (error) { return (<Error message={error.message} stack={error.stack} />) }

    return (
        <div className='BookCont'>

            <SearchBooks books={books} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100vw', marginTop: '30px' }}>
                <hr style={{ width: '30vw' }}></hr> <p><b>All Books</b></p> <hr style={{ width: '30vw' }}></hr>
            </div>

            <ul>
                {books.map((item, idx) => (
                    <li key={idx}>
                        <AllBooks Books={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

