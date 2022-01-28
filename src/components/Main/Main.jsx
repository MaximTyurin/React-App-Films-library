import React, {useState, useEffect} from "react";
import Movies from "../../components/Movies/Movies";
import Preloader from "../../components/Preloader";
import Search from "../../components/Search/Search";
import './Main.scss';

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const searchMovies = (stringSearch) => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=c1bf7c4f&s=${stringSearch}}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.Search) {
                    setMovies(data.Search);
                    setLoading(false);
                    setError(false);
                } else {
                    setLoading(false);
                    setError(true);
                }
            })
            .catch((error) => {
                setLoading(false);
            })
    }

    const moviesFil = movies.reduce((arr, item) => {
        const hasItem = arr.find(arrItem => arrItem.imdbID === item.imdbID)
            
        if(!!hasItem) {
            return arr;
        } 

        return [...arr, item];
    }, [])

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=c1bf7c4f&s=terminator')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return <main className="content">
        <Search searchMovies={searchMovies} />
        {
            loading ? <Preloader /> : (<Movies movies={moviesFil} error={error}/>)
        }
    </main>
}

export default Main;