import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <span>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        const tKey = `3${i * Math.random()}`;
        return (
          <label key={tKey / Math.random()}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? '#f5e78a' : '#a7b4bd'}
              icon={faStar}
            />
          </label>
        );
      })}
    </span>
  );
};

export default StarRating;
