import { useState, useEffect } from 'react';
import AllMovie from './AllMovies.jsx';
import Loading from '../Loading/Loading.jsx';
import Error from '../../ErrorHandeling/Error.jsx';
import axios from 'axios';
import SearchMovies from './SearchMovie.jsx';

export default function MoviesCont() {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('/api/auth/getMovies');
                // console.log(response.data);
                setMovie(response.data);
            } catch (error) {
                setError(error);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []);

    if (loading) { return (<Loading />) };

    if (error) { return (<Error message={error.message} stack={error.stack} />) };

    return (
        <div className='movieCont'>

            <SearchMovies movies={movie} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100vw', marginTop: '30px' }}>
                <hr style={{ width: '30vw' }}></hr> <p><b>All Movies</b></p> <hr style={{ width: '30vw' }}></hr>
            </div>
            
            <ul>
                {movie.map((item, idx) => (
                    <li key={idx}>
                        <AllMovie
                            movie={item}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
