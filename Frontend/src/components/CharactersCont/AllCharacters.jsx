import unknown from '../../assets/unknown-final-Comp.jpg';
import { Link } from "react-router-dom";

export default function ({ character }) {
    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={(character.attributes.image) ? character.attributes.image : unknown}></img>
                    <h2> {character.attributes.name} </h2>
                    <br></br>
                    <br></br>
                    <h5>
                        Gendre : {character.attributes.gender}
                    </h5>
                    <span className="minutes">
                        Born on : {character.attributes.born}
                    </span>
                    <br></br>
                    <span className="minutes">
                        Died on : {character.attributes.died}
                    </span>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        <small className="text-body-secondary"><a target="_blank" href={character.attributes.wiki}> Wikipedia </a></small>
                    </p>
                </div>
                <div className="movie_social">
                    <button className="btn btn-primary" > <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Characters/${character.id}`} > See More </Link> </button>
                </div>
            </div>
            <div className=" backgroundPoster blur_back bright_back"><img src={(character.attributes.image) ? character.attributes.image : unknown} alt="movie-poster"></img>  </div>
        </div>
    );
}