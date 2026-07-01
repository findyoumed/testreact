import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const {id} = useParams(); // object 반환
    console.log('ppp', id);
  return (
    <div>
        <h1>Show Product Details</h1>

    </div>
  )
}

export default ProductDetailPage
