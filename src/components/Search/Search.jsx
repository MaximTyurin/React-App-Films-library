import React, { useState } from 'react';
import './Search.scss';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchMovies(search);
        }
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    className='validate'
                    type='search'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />

                {/* <input
                    className='validate'
                    type='search'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                /> */}
                <button
                    className='btn search-btn'
                    onClick={() => searchMovies(search)}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
