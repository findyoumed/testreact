import { Grid, Pagination } from '@mui/material'
import React from 'react'
import AlertMessage from '../components/AlertMessage'
import MovieCard from '../MovieCard/MovieCard'
import LoadingSpinner from '../components/LoadingSpinner'

const MovieCardList = ({ data, page, handlePageChange, ...props }) => {
    const { isLoading, isError, error } = props;

    if(isLoading) return <LoadingSpinner />
    if(isError) return <AlertMessage type="error" message={error.message} />

    return (
        <>
            <Grid container spacing={2}>
                {data?.results.length > 0 ? data?.results.map((movie, index) => {
                    return (
                        <Grid
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            key={index}
                            size={{ lg: 3, md: 4, xs: 6 }}>
                            <MovieCard movie={movie} />
                        </Grid>)
                }) : <AlertMessage type="warning" message={"표시할 결과가 없습니다."} />}
            </Grid>
            <Grid container sx={{ justifyContent: "center" }}>
                <Pagination
                    boundaryCount={0}
                    siblingCount={2}
                    showFirstButton="true"
                    showLastButton="true"
                    count={data?.total_pages > 500 ? 500 : data?.total_pages}
                    page={page}
                    onChange={handlePageChange}
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
                        '& .MuiPaginationItem-outlined:hover': {
                            color: 'error.dark',
                            backgroundColor: "rgba(211, 47, 47, 0.12)",
                        },
                        my: "20px",
                    }}
                />
            </Grid>
        </>
    )
}

export default MovieCardList
