import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className="product-card mb-5" onClick={showDetail}>
        <div className="product-card-img-container">
          <img className="product-card-img" src={item?.img} alt={item?.title} />
        </div>
        <div className="d-flex my-1">
          {item?.choice?<Badge className="me-1" bg="danger">Conscious choice</Badge> : ""}
          {item?.new?<Badge className="me-1" bg="dark">New</Badge> : ""}
        </div>
        <div className="product-title mt-1">{item?.title}</div>
        <div className="product-price">₩{item?.price}</div>
    </div>
  )
}

export default ProductCard
