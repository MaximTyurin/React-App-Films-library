import './Movie.scss';
import BuyButton from '../BuyButton';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (

        <div className="card-wrapper movie" id={id}>
            <div className="poster">
                {
                    poster === 'N/A' ? 
                        <img className="activator2" src={`https://via.placeholder.com/468x450?text=${title}`} alt={title} />
                        : <img className="activator2" src={poster} alt={title} />
                }
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <div>
                    <p>{year}</p>
                    <span className="right">{type}</span>
                </div>
            </div>
            <BuyButton movie={props}/>
        </div>
    )
}

export default Movie;