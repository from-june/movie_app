import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = function ({ id, poster, title, year, rating, summary }) {
  return (
    <Link
      to={{ pathname: `/movie/${id}`, state: { poster, title, year, summary } }}
    >
      <div className="Movie__content" key={id}>
        <img src={poster} alt={title} title={title} />
        <div className="Movie__text">
          <h4 className="Movie__title">
            {title}
            <span className="Movie__year">({year})</span>
          </h4>
          <div className="Movie__rating">{rating}</div>
          <p>
            {summary.length > 100 ? summary.slice(0, 100) + ' ...' : summary}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
