import React, {useState} from 'react';
import './Search.scss'

const Search = (props) => {

    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');

    const handleKey = (event) => {
        event.preventDefault();
        if (event.key === 'Enter') {
            searchMovies(search);
        }
    };

    return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        id='email_inline'
                        type='search'
                        placeholder='Search'
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() =>
                            searchMovies(search)
                        }
                    >
                        Search
                    </button>
                </div>
            </div>
        );
}

export default Search;
