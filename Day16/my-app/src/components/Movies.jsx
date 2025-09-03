import React, { useState } from 'react';
import Movie from './Movie';

const Movies = () => {
    const [moviesArr] = useState([
        { id: 1, title: "Star Wars: Episode III – Revenge of the Sith", year: 2005, rating: 7.6 },
        { id: 2, title: "The Terminal", year: 2004, rating: 7.4 },
        { id: 3, title: "Miracle in Cell No. 7", year: 2013, rating: 8.2 },
        { id: 4, title: "A Man Called Otto", year: 2022, rating: 7.5 },
        { id: 5, title: "Forrest Gump", year: 1994, rating: 8.8 },
    ]);

    return (
        <div>
            {moviesArr.map((m) => (
                <Movie key={m.id} {...m}></Movie>
            ))}
        </div>
    );
}

export default Movies;
