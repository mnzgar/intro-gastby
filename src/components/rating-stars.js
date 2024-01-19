import React from 'react';
import { ratingStars } from './rating-stars.module.css';

const RatingStars = () => {
  const MAX_STARS = 5;
  const starsToShow = Math.floor(Math.random() * MAX_STARS) + 1;

  const stars = Array.from({ length: MAX_STARS }, (_, index) => (
    <span key={index} role="img" aria-label={index < starsToShow ? "estrella pintada" : "estrella no pintada"}>
      {index < starsToShow ? "★" : "☆"}
    </span>
  ));
  
  return (
    <p className={ratingStars}>
      {stars}
    </p>
  );
};

export default RatingStars;
