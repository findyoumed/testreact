import { Alert, Grid } from '@mui/material'
import React from 'react'

const AlertMessage = ({message, type}) => {
  return (
    <Grid container 
      sx={{ 
        height: "56vh", 
        maxHeight:"100%", 
        width: "100%", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
        <Grid size={8}>
          <Alert 
            severity={type}
            icon={false}
            sx={{
              justifyContent: "center"
            }}
            >{message}</Alert>
        </Grid>
    </Grid>
  )
}

export default AlertMessage
