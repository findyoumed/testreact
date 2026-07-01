import { Box, Chip, Stack } from '@mui/material'
import React from 'react'
import "./MovieCard.style.css";
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NoImage from '../../assets/no_image.png';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';


const UnderAge = () => (
    <Box component="span" 
        sx={{
            bgcolor: "success.main", 
            border: "1px solid #fff",
            width:25, 
            height: 25, 
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "0.6rem"}}>
        ALL
    </Box>
);
const OverAge = () => (
    <Box component="span" 
        sx={{
            bgcolor: "error.main", 
            border: "1px solid #fff",
            width:25, 
            height: 25, 
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "0.6rem"}}>
        18+
    </Box>
);

const MovieCard = ({ movie }) => {
    const {data:genreData} = useMovieGenreQuery();
    const navigate = useNavigate();

    const handleMovieCardClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    }

    const showGenre = (genreIdList) => {
        if(!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre)=> genre.id === id);
            return genreObj.name;
        }); 

        return genreNameList;
    }

    let imgUrl = NoImage;

    if(movie.poster_path) {
        imgUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
    }

    return (
        <div
            onClick={() => handleMovieCardClick(movie.id)}
            style={{ 
                backgroundImage: "url(" + `${imgUrl}` + ")" }}
            className="movie-card">
            <div className="overlay">
                <div>
                    <h2 variant='h6' className="movie-title" >{movie.title}</h2>
                    <Stack 
                        direction="row"
                        useFlexGap
                        sx={{flexWrap: "wrap"}}
                        spacing={1}>
                        {showGenre(movie.genre_ids).slice(0, 3).map((genre) => {
                            return <Chip key={genre} 
                                        label={genre}
                                        sx={{color: "#fff"}}
                                        size="small" 
                                        variant="outlined"
                                        className="genre-chip" />
                        })}
                        {movie.genre_ids?.length > 3 && (
                            <Chip 
                                label="..."
                                sx={{color:"#fff"}}
                                size="small"
                                variant="outlined" />
                        )}
                    </Stack>
                </div>
                <div className="movie-rate-infos">
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <StarIcon color="warning" fontSize="small" />
                        {movie.vote_average.toFixed(2)}
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <WhatshotIcon color="error" fontSize="small" />
                        {Math.floor(movie.popularity)}
                    </Box>
                    <div>{movie.adult ? <OverAge /> : <UnderAge /> }</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
