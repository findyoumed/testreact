import React from 'react'
import LoadingSpinner from '../../../../common/components/LoadingSpinner';
import AlertMessage from '../../../../common/components/AlertMessage';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovie';


const TopRatedMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopRatedMoviesQuery();
    
    if(isError) {
        return <AlertMessage type="error" message={error.message} />
    }
    return (
      <div>
        <MovieSlider title="Top Rated Movies" movies={data} responsive={responsive} />
      </div>
    )
}

export default TopRatedMovieSlide
