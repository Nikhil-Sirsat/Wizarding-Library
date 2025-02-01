
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading.jsx';
import Error from '../../ErrorHandeling/Error.jsx';
import MovieTrailer from './trailer.jsx';
import axios from 'axios';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get('/api/auth/getMovies');
                const movieData = response.data
                const foundMovie = movieData.find((movie) => movie.id == id);
                setMovie(foundMovie);
            } catch (error) {
                setError(error);
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, [id]);

    if (loading) { return (<Loading />) };

    if (error) { return (<Error message={error.message} stack={error.stack} />) }

    if (!movie) {
        return <div>No movie found.</div>;
    }

    return (

        <div className='movie-view'>
            <MovieTrailer title={movie.attributes.title} />
            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={movie.attributes.poster}></img>
                        <h2> {movie.attributes.title} </h2>
                        <h5>
                            {movie.attributes.release_date}
                        </h5>
                        <span className="minutes">
                            {movie.attributes.running_time}
                        </span>
                    </div>
                    <div style={{ overflowX: 'scroll' }} className="movie_desc">

                        {Object.entries(movie.attributes).map(([key, value]) => (
                            <div key={key} className="detail-item">
                                <p className="text"> <strong>{key}</strong>  : {value}</p>
                            </div>
                        ))}

                    </div>
                    <div className="movie_social">
                        <button className='btn btn-primary'> <a target='_blank' style={{ textDecoration: 'none', color: 'white' }} href={movie.attributes.wiki}> Wikipedia </a> </button>
                        <br></br>
                        <br></br>
                        <button className='btn btn-primary'> <Link style={{ textDecoration: 'none', color: 'white' }} to='/Movies'> All Movies </Link> </button>
                    </div>
                </div>
                <div style={{ maxHeight: '600px' }} className=" backgroundPoster blur_back bright_back"><img src={movie.attributes.poster} alt="movie-poster"></img>  </div>
            </div>
        </div>
    );
}

export default MovieDetail;
