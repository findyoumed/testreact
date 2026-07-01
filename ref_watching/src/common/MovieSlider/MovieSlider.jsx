import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography } from '@mui/material';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <Box container sx={{ my: "20px"}}>
            <Typography 
                variant="h5" 
                className="slider-title"
                sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "1.5rem",
                    marginLeft: "20px",
                    marginBottom: "20px",
                    color: "#fff",
                }}
                >{title}</Typography>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider"
                containerClass="carousel-container"
                autoPlay={true}
                responsive={responsive}
            >
                {movies.results.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Carousel>
        </Box>
    )
}

export default MovieSlider
