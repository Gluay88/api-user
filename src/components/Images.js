import React from 'react'
import {EachImage} from './EachImage'

export const Images = ({images}) => {

  return images.map((image) => (
      <EachImage key={image.id} image={image}/>
  ))
  
}
