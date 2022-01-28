import Movie from "../Movie/Movie";
import './Movies.scss';

function Movies(props) {
    const {movies = [], error} = props;

    return <div className="movies">
            {movies.length && error === false ? movies.map((movie, index) => {
                return <Movie key={movie.imdbID} {...movie} />
            }) : <h4 className="error-title">Ничего не найдено</h4>}
        </div>
}

export default Movies;