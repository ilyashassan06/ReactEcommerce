import React from 'react'
import { useLocation } from 'react-router-dom';

function SingleProduct() {
    const location = useLocation();
    const {product} = location.state || {}
  return (
    <div>{product.title}</div>
  )
}

export default SingleProduct