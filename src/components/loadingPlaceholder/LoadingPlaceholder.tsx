import React from 'react'
import './loadingPlaceholder.css'

export const LoadingPlaceholder = () => {
  return (
    <span className='loading-placeholder'>
      <span className='loading-placeholder__dot'></span>
      <span className='loading-placeholder__dot'></span>
      <span className='loading-placeholder__dot'></span>
      <span className='loading-placeholder__dot'></span>
    </span>
  )
}
