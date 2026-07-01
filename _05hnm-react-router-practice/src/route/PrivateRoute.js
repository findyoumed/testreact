import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({ authenticate, loading, setLoading }) => {
  return authenticate ? <ProductDetail loading={loading} setLoading={setLoading} /> : <Navigate to="/login" />
}

export default PrivateRoute
