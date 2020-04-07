import React, { useState } from 'react';
import { ReactComponent as Star } from '../SVG/star.svg';

export default function RatingBar({ onClick, starValue }) {
  const [focusStarIndex, setFocusStarIndex] = useState(-1);
  const [hoverStarIndex, setHoverStarIndex] = useState(-1);

  return (
    <>
      <ul className='rating-bar'>
        {Array.from({ length: 10 })
          .map((_, index) => {
            const isActive =
              index === focusStarIndex ||
              index === hoverStarIndex ||
              index + 1 === starValue;

            return (
              <li
                key={index}
                className={`rating-bar__item ${
                  isActive ? 'rating-bar__item--active' : ''
                }`}
              >
                <button
                  type='button'
                  onClick={() => onClick(index + 1)}
                  onMouseOver={() => setHoverStarIndex(index)}
                  onMouseLeave={() => setHoverStarIndex(-1)}
                  onFocus={() => setFocusStarIndex(index)}
                  onBlur={() => setFocusStarIndex(-1)}
                >
                  <Star />
                </button>
              </li>
            );
          })
          .reverse()}
      </ul>
      {starValue && <p>You rated it {starValue} out of 10</p>}
    </>
  );
}
