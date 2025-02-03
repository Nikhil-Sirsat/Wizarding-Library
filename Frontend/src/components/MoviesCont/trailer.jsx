import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance.jsx';
import './trailer.css';
import Loading from '../Loading/Loading.jsx';

const MovieTrailer = ({ title }) => {
    const [trailer, setTrailer] = useState(null);

    const fetchTrailer = async () => {
        try {
            const response = await axiosInstance.get('/api/auth/youtube-trailer', {
                params: { title },
            });
            if (response.data) {
                setTrailer(response.data);
            }
        } catch (error) {
            console.error('Error fetching trailer', error);
        }
    };

    useEffect(() => {
        fetchTrailer();
        console.log(trailer);
    }, [title]);

    return (
        <div className='trailerCont'>
            {trailer ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${trailer.id.videoId}?controls=0&modestbranding=0&loop=1&rel=0&autoplay=2&mute=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Movie Trailer"
                ></iframe>
            ) : (
                <>
                    <Loading />
                    <br></br>
                    <p>...Trailer Loading</p>
                </>

            )}
        </div>
    );
};

export default MovieTrailer;

