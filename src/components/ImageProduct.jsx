import React from 'react'
import product from '../product'
import '../App.css'
const ImageProduct = () => {
    console.log(product.imgUrl)
  return (
      <div>
          <img src={product.imgUrl} alt="shoes" width="200px"  height="200px"/>
    </div>
  )
}

export default ImageProduct