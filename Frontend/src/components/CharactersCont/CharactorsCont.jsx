
import { useState, useEffect } from "react";
import AllCharacters from "./AllCharacters.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import Error from '../../ErrorHandeling/Error.jsx';
import SearchChars from "./SearchChar.jsx";

export default function () {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getChars = async () => {
            try {
                const response = await axios.get('/api/auth/getChars');
                setCharacters(response.data);
            } catch (error) {
                console.error('Error fetching Characters :', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getChars();
    }, []);

    if (loading) { return (<Loading />) };

    if (loading) { return (<Error message={error.message} stack={error.stack} />) };

    return (
        <div className='CharactersCont'>

            <SearchChars chars={characters} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100vw', marginTop: '30px' }}>
                <hr style={{ width: '30vw' }}></hr> <p><b>All Characters</b></p> <hr style={{ width: '30vw' }}></hr>
            </div>

            <ul>
                {characters.map((item, idx) => (
                    <li key={idx}>
                        <AllCharacters character={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

