
// import './AllBooks.css'
import { Link } from "react-router-dom"

export default function ({ Books }) {
    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={Books.attributes.cover}></img>
                    <h2> {Books.attributes.title} </h2>
                    <h5>
                        {Books.attributes.release_date}
                        <br></br>
                        <br></br>
                        {Books.attributes.author}
                    </h5>
                    <span className="minutes">
                        {Books.attributes.pages} Pages
                    </span>
                </div>
                <div className="movie_desc">
                    <p className="text">
                        {Books.attributes.summary}
                    </p>
                </div>
                <div className="movie_social">
                    <button className="btn btn-primary"> <Link style={{ textDecoration: 'none', color: 'white' }} to={`/Books/${Books.id}`} >See More</Link> </button>
                </div>
            </div>
            <div className=" backgroundPoster blur_back bright_back"><img src={Books.attributes.cover} alt="movie-poster"></img>  </div>
        </div>
    )
}