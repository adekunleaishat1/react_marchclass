import React from 'react'

const Card = ({image, text}) => {
  return (
    <div>
        <img src={image} alt="" />
        <h1>{text}</h1>
    </div>
  )
}

export default Card