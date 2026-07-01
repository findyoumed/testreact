import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const LoadingSpinner = ({message}) => {
  return (
    <div>
        <Container>
            <div className="loading-spinner">
                <Spinner className="my-4" animation="border" />
                <div><span>{message}</span></div>
                <span className="visually-hidden">Loading...</span>
            </div>
        </Container>
    </div>
  )
}

export default LoadingSpinner
