import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Bookcard = ({book}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        alt={book?.title}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: 'text.primary' }}>
          {book?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book?.authors[0].name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
      </CardActions>
      
    </Card>
  )
}

export default Bookcard
