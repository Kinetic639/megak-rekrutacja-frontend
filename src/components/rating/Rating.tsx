import React from 'react'
import { StarIcon } from '../../assets/svg/StarIcon';
import './rating.css'

interface RatingI {
  rating: number
}

export const Rating: React.FC<RatingI> = ({ rating }) => {
  const starsCount = 5;


  const fillRatingStars = () => {
    const arrStars = [];


    for (let i = 1; i <= starsCount; i++) {
      const starFill = i <= rating ? 'rating__star--filled' : 'rating__star--unfilled';
      arrStars.push(
        <StarIcon classes={starFill} size={20} key={`${i}${starFill}`} />
      )
    }
    return arrStars;
  }

  return (
    <div className='rating rating--wrapper'>
      <div className='rating__degrees'><span className='rating__student-degree'>{rating}</span>/<span className='rating__student-max-degree'>{starsCount}</span></div>
      <div>{fillRatingStars()}</div>
    </div>
  )
}