import './Loading.css'
import loadingSvg from '../../assets/loading2.png';

export default function Loading() {
    return (
        <div className="loading-cont">
            <div className="hallows">
                <img src={loadingSvg} alt='..loading'></img>
            </div>
        </div>
    );
}
