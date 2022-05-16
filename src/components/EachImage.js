import React from 'react'

export const EachImage = ({image}) => {
  return (
    <div className='photo'>
        <img src={image.urls.small} alt="unsplash images" />
    </div>
  )
}

export default EachImage