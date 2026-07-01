import React from 'react'
import { Navigate } from 'react-router'
import MyBook from '../page/MyBook'

const PrivateRoute = ({ authenticate }) => {
  
  return authenticate ? <MyBook /> : <Navigate to="/login" />
}

export default PrivateRoute
