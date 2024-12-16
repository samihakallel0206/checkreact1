import React from 'react'
import product from '../product'

const Name = () => {
    console.log(product)
  return (
      <div style={{fontSize:"1.5rem"}}>{product.name}</div>
  )
}

export default Name