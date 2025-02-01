import { Link } from "react-router-dom";
import gif from '../../assets/Rakshak.png';

const LostPath = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="row text-center">
                <div className="col">
                    <h1 className="display-4  mb-4">404 - Lost in the Woods</h1>
                    <p className="lead mb-4">
                        Oops! The page you're looking for doesn't exist. It looks like you've wandered off the beaten path.
                    </p>
                    <Link to="/Home" className="btn btn-primary mt-3">Take Me Home</Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img
                        src={gif}
                        alt="Lost Path"
                        className="img-fluid"
                        style={
                            {
                                height: '280px',
                                width: '200px',
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default LostPath;
