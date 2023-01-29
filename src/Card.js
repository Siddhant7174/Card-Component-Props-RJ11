import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='block-1'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card