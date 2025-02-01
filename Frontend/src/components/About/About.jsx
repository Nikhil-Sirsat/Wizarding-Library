
import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <p>
                Welcome to <strong>The Wizarding Library</strong>, a magical world dedicated to all things Harry Potter! This project brings you a comprehensive collection of data about the Harry Potter movies, books and Characters sourced directly from the &nbsp; <a target='_blank' href="https://potterdb.com/">Potter DB</a>  &nbsp; API.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to create an immersive and interactive experience for all Harry Potter fans by providing detailed information about the movies and books. Whether you're looking to relive the adventures of Harry, Hermione, and Ron or explore the rich lore of the wizarding world, The Wizarding Library has got you covered.
            </p>
            <h2>Features</h2>
            <ul>
                <li><strong>Movies</strong>: Get detailed information about all the Harry Potter movies, including release dates, directors, cast, and plot summaries.</li>
                <li><strong>Books</strong>: Explore the magical world of the Harry Potter books with summaries, publication dates, and author details.</li>
                <li><strong>Character Information</strong>: Dive into the details of your favorite characters, including their background, role in the series, and memorable quotes.</li>
                {/* <li><strong>Interactive Search</strong>: Easily find the information you're looking for with our intuitive search feature.</li> */}
            </ul>
            <h2>About the Developer</h2>
            <p>
                Hi, I'm <strong>Nikhil Sirsat</strong>, a final-year Computer Science and Engineering student with a passion for web development and a love for the Harry Potter series. This project is a testament to my skills in the <strong>MERN Stack</strong> and my dedication to creating meaningful and engaging web applications.
            </p>
            <h2>Technologies Used</h2>
            <ul>
                <li><strong>React</strong>: For building the user interface.</li>
                <li><strong>Node Js</strong>: For building The backend.</li>
                <li><strong>Express Js</strong>: As a backend Framework.</li>
                <li><strong>Mongo DB</strong>: A Database for storig the data.</li>
                <li><strong>Potter DB API</strong>: For fetching data about Harry Potter movies, books and characters.</li>
                <li><strong>Google Youtube API</strong>: For Fetching The Movie Trailer</li>
            </ul>
            <h2>Get in Touch</h2>
            <p>
                If you have any questions, feedback, or suggestions, feel free to reach out to me. You can connect with me on <a target="_blank" href="https://www.linkedin.com/in/nikhil-sirsat-b49bb128a/">LinkedIn</a> or check out my other projects on <a target="_blank" href="https://github.com/theAppleceo">GitHub</a>.
            </p>
            <p>Thank you for visiting The Wizarding Library! Enjoy exploring the magical world of Harry Potter.</p>
        </div>
    );
}