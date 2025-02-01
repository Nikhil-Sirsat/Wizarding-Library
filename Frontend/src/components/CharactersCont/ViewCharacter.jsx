import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import unknown from '../../assets/unknown-final-Comp.jpg'
import Loading from '../Loading/Loading';
import Error from '../../ErrorHandeling/Error.jsx';
import axiosInstance from '../../axiosInstance.jsx';
import '../CommonView.css';

export default function () {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getChars = async () => {
            try {
                const response = await axiosInstance.get('/api/auth/getChars');
                const CharData = response.data
                const foundChar = CharData.find((char) => char.id == id);
                setCharacter(foundChar)
            } catch (error) {
                console.error('Error fetching Character:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getChars();
    }, [id]);

    if (loading) { return (<Loading />) };

    if (error) { return (<Error message={error.message} stack={error.stack} />); }

    if (!character) {
        return <div>No Character found.</div>;
    }

    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={(character.attributes.image) ? character.attributes.image : unknown}></img>
                    <h2> {character.attributes.name} </h2>
                    <br></br>
                    <br></br>
                </div>
                <div style={{ overflowX: 'scroll' }} className="movie_desc">

                    {Object.entries(character.attributes).map(([key, value]) => (
                        <div key={key} className="detail-item">
                            <p className="text"> <strong>{key}</strong>  : {value}</p>
                        </div>
                    ))}

                </div>
                <div className="movie_social">
                    <button className="btn btn-primary" > <a target='_blank' style={{ textDecoration: 'none', color: 'white' }} href={character.attributes.wiki} > Wikipedia </a> </button>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary" > <Link style={{ textDecoration: 'none', color: 'white' }} to='/Characters' > All Characters </Link> </button>
                </div>
            </div>
            <div style={{ maxHeight: '600px' }} className=" backgroundPoster blur_back bright_back"><img src={(character.attributes.image) ? character.attributes.image : unknown} alt="character-image"></img>  </div>
        </div>
    );
}