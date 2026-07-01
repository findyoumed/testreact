import React from 'react'
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ message }) => {
  return (
    <div>
        <Alert variant="light" className="d-flex justify-content-center">
              {message}
        </Alert>
    </div>
  )
}

export default AlertMessage
