import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import './StarGrade.css';
import { Score } from 'types';

interface Props {
  stars: string | Score | number | null;
  size?: 'md' | 'lg';
}

export const StarGrade = ({ stars, size }: Props) => {
  return (
    <div className={`stars__container ${size}`}>
      {Array.from(Array(Math.floor(Number(stars)))).map((x, index) => (
        <AiFillStar
          key={index}
          className={`stars__icon  ${size} stars__icon--full`}
        />
      ))}
      {Array.from(Array(5 - Math.floor(Number(stars)))).map((x, index) => (
        <AiFillStar
          key={index}
          className={`stars__icon stars__icon--empty  ${size}`}
        />
      ))} // Bardzo sprytnie 👏
    </div>
  );
};
