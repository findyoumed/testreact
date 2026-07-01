import React, { useState } from 'react'
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import LoadingSpinner from '../../../../common/components/LoadingSpinner';
import AlertMessage from '../../../../common/components/AlertMessage';
import { Box, Button, Divider, Grid, List, ListItem, Pagination, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const ReviewList = ({ id }) => {
  const [reviewPage, setReviewPage] = useState(1);
  const [expandedReviewIds, setExpandedReviewIds] = useState([]);

  const {
    data: reviewData,
    isLoading: isReviewLoading,
    isError: isReviewError,
    error: reviewError
  } = useMovieReviewQuery({ id, reviewPage });

  const toggleReview = (reviewId) => {
    if(expandedReviewIds?.includes(reviewId)) { setExpandedReviewIds(expandedReviewIds.filter((id) => id !== reviewId)); }
    else { setExpandedReviewIds([...expandedReviewIds, reviewId]); }
  }

  const handleReviewPageChange = (event, value) => {
    setReviewPage(value);
  }

  if(isReviewLoading) return <LoadingSpinner />
  if(isReviewError) return <AlertMessage type="error" message={reviewError.message} />
  
  return (
    <div>
      {reviewData?.results?.length === 0 ? <AlertMessage type="warning" message="아직 등록된 리뷰가 없습니다." /> 
      : <List sx={{width:"100%", bgcolor: "background.paper"}}>
        {reviewData?.results?.map((review) => (
          <React.Fragment key={review.id}>
            <ListItem>
                <Box sx={{p:"10px", width:"100%"}}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="subtitle1" sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>{review.author}</Typography>
                    <Typography variant="subtitle2" sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                      <StarIcon color="warning" />
                      {review?.author_details?.rating}/10
                    </Typography>
                  </Stack>
                  <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                    {expandedReviewIds?.includes(review.id) || review.content <= 200 
                    ? review.content 
                    : `${review.content.slice(0, 200)}...`}
                    {
                      review?.content.length > 200 ?
                      <div
                        style={{
                          display:"flex",
                          justifyContent:"end"
                        }}
                      >
                        <Button color="warning" onClick={()=>toggleReview(review.id)}>
                          {expandedReviewIds.includes(review.id) ? "Show less" : "Show more"}
                        </Button>
                      </div> : ""
                    }
                  </Typography>
                </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
        <Grid container sx={{justifyContent:"center"}}>
          <Pagination 
            boundaryCount={0}
            siblingCount={2}
            showFirstButton="true"
            showLastButton="true"
            count={reviewData?.total_pages > 500 ? 500 : reviewData?.total_pages} 
            page={reviewPage}
            onChange={handleReviewPageChange}
            variant="outlined"
            color="error"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff',
              },
              '& .MuiSvgIcon-root': {
                color: '#fff'
              },
              '& .Mui-selected': {
                color: "error.dark",
              },
              '& .MuiPaginationItem-outlined:hover' : {
                color: 'error.dark',
                backgroundColor: "rgba(211, 47, 47, 0.12)",
              },
              my : "20px",
            }}
            />
        </Grid>
      </List>}
    </div>
  )
}

export default ReviewList
