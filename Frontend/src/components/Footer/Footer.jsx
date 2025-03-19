
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className='footer-p'>&copy; {new Date().getFullYear()} The Wizarding Library. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/nikhil-sirsat-b49bb128a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Nikhil-Sirsat" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:sirsatnikhil617@gmail.com">Contact</a>
                </div>
            </div>
        </footer>
    );
}