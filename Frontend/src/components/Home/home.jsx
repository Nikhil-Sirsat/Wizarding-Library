import './Home.css';
import heroImg from '../../assets/hero-final-Comp.jpg';
import PotterMoviesImg from '../../assets/movie-final-Comp.jpg';
import PotterBooksImg from '../../assets/Books-final-Comp.jpg';
import PotterCharacters from '../../assets/charOption.jpeg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <img src={heroImg} alt="Hogwarts" className="hero-image" />
                <div className="hero-overlay">
                    <h2 className="hero-title">Welcome To The Wizarding Library</h2>
                    <p className="hero-subtitle">Explore the magical world of Harry Potter</p>
                </div>
            </header>
            <section className="content-section">
                <div className="content-item">
                    <Link to="/Movies" className="content-link">
                        <img src={PotterMoviesImg} alt="Harry Potter" className="content-image" />
                    </Link>
                    <div className="content-description">
                        <h2>Discover the Movies</h2>
                        <p>Delve into the enchanting world of Harry Potter movies. Learn about the cast, plot, and behind-the-scenes magic that brought the story to life on screen.</p>
                    </div>
                </div>
                <div className="content-item">
                    <Link to="/Books" className="content-link">
                        <img src={PotterBooksImg} alt="Books" className="content-image" />
                    </Link>
                    <div className="content-description">
                        <h2>Explore the Books</h2>
                        <p>Immerse yourself in the magical world created by J.K. Rowling. From the Philosopher's Stone to the Deathly Hallows, rediscover the books that started it all.</p>
                    </div>
                </div>
                <div className="content-item">
                    <Link to="/Characters" className="content-link">
                        <img src={PotterCharacters} alt="Harry Potter" className="content-image" />
                    </Link>
                    <div className="content-description">
                        <h2>Know More about your Favourite Character</h2>
                        <p>Dive into the details of your favorite characters, including their background, role in the series, and memorable quotes.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
