import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import LoadingSpinner from '../../../../common/components/LoadingSpinner';
import AlertMessage from '../../../../common/components/AlertMessage';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';


const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    
    if(isError) {
        return <AlertMessage type="error" message={error.message} />
    }
    return (
      <div>
        <MovieSlider title="Popular Movies" movies={data} responsive={responsive} />
      </div>
    )
}

export default PopularMovieSlide
