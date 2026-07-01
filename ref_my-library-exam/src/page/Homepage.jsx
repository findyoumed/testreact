import React from 'react'
import useBookQuery from '../hooks/useBooks'
import { CircularProgress, Container, Grid } from '@mui/material';
import Bookcard from '../component/Bookcard';

const Homepage = () => {
    const { data, isLoading, isError, error, refetch } = useBookQuery();
    console.log(data);
  return (
    <div>
      <Container>
        {isLoading? 
        <CircularProgress color="warning" />
        : data && data.length > 0 ?
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return <Grid size={{xs: 6, md:3, lg: 2}} key={index}><Bookcard book={item} /></Grid>
          })}
        </Grid>
        : <div>책 목록이 없습니다.</div>}
      </Container>
    </div>
  )
}

export default Homepage
