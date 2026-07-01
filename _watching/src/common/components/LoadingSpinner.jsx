import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <Box 
      container 
      sx={{ 
        height: "56vh", 
        maxHeight: "100%", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
        <CircularProgress sx={{color: "#fff"}} />
    </Box>
  )
}

export default LoadingSpinner
