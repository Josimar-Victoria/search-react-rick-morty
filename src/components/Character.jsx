import React from 'react'

const Character = ({ name, image, origin }) => {
  return (
    <div className='text-center p-5'>
      <h2>{name}</h2>
      <img className='img-fluid rounded-pill' src={image} alt={name} />
      <p>{origin.name}</p>
    </div>
  )
}

export default Character
