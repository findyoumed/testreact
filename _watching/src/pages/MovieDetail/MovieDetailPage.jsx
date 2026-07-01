import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useParams } from 'react-router-dom';
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import NoImage from '../../assets/no_image.png';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import AlertMessage from '../../common/components/AlertMessage';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useMovieVideoQuery } from '../../hooks/useMovieVideo';
import TabContext from './components/TabContext/TabContext';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PersonIcon from '@mui/icons-material/Person';
import VideoModal from './components/VideoModal/VideoModal';


const UnderAge = () => (
  <Box component="span"
    sx={{
      bgcolor: "success.dark",
      border: "1px solid #fff",
      width: 30,
      height: 30,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.8rem"
    }}>
    ALL
  </Box>
);
const OverAge = () => (
  <Box component="span"
    sx={{
      bgcolor: "error.dark",
      border: "1px solid #fff",
      width: 25,
      height: 25,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.6rem"
    }}>
    18+
  </Box>
);

const MovieDetailPage = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: movie, isLoading, isError, error } = useMovieDetailQuery(id);

  const {
    data: videoData,
    isLoading: isVideoLoading,
    isError: isVideoError,
    error: videoError
  } = useMovieVideoQuery(id);

  const getVideoTrailer = () => {
    if (!videoData || videoData.length === 0) return null;
    const youtubeTrailer = videoData.find(video =>
      video.site.toLowerCase() === "youtube" && video.type.toLowerCase() === "trailer"
    );

    const youtubeClip = videoData.find(video =>
      video.site.toLowerCase() === "youtube" && video.type.toLowerCase() === "clip"
    )
    return youtubeTrailer || youtubeClip || null;
  }

  const videoTrailer = getVideoTrailer();

  if (isLoading || isVideoLoading) return <LoadingSpinner />
  if (isError) return <AlertMessage type="error" message={error.message} />
  if (!movie) return <AlertMessage type="warning" message="영화 정보를 불러오지 못했습니다." />
  return (
    <Grid container sx={{ color: "#fff" }}>
      <Grid container spacing={2} sx={{ mb: "10px", mt: "20px", width: "100%" }}>
        <Grid size={{ md: 4, xs: 12 }}>
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              backgroundImage:
                movie.poster_path
                  ? `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')`
                  : `url(${NoImage})`,
              backgroundSize: "cover",
              backgroundPosition: "left 30%",
              width: "100%",
              height: "550px",
            }}
          >
            <Button
              onClick={handleOpen}
              startIcon={<PlayArrowIcon />}
              variant="contained"
              sx={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                color: "#000",
                backgroundColor: "#fff",
                "&.Mui-disabled": {
                  backgroundColor: "gray",
                  cursor: "no-drop"
                }
              }}
              disabled={!videoTrailer}
            >예고편 재생</Button>
            <VideoModal video={videoTrailer && videoTrailer} open={open} handleClose={handleClose} />
          </div>
        </Grid>
        <Grid 
          size={{ md: 8, xs: 12 }}
          sx={{ px: "10px" }}
        >
          <Stack spacing={2}>
            <Typography 
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: "bold",
              }}
              >{movie.title}</Typography>
            <Stack direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
              spacing={1}>
              {movie.genres?.map((genre) => (
                <Chip key={genre.id}
                  label={genre.name}
                  sx={{ color: "#fff" }}
                  size="large"
                  variant="filled"
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={1} >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon color="warning" />
                {movie.vote_average.toFixed(2)} (<PersonIcon />{movie.vote_count})
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}><WhatshotIcon color="error" />{Math.floor(movie.popularity)}</Box>
              <div>{movie.adult ? <OverAge /> : <UnderAge />}</div>
            </Stack>
            <Stack direction="row" spacing={2}>
              <div>
                <Chip label="예산" />
                 $ {movie.budget.toLocaleString()}
              </div>
              <div>
                <Chip label="수익" />
                 $ {movie.revenue.toLocaleString()}
              </div>
            </Stack>
            <div><Chip label="개봉일" /> {movie.release_date}</div>
          </Stack>
          <Box sx={{width: "95%", mt: "30px"}}>
            <Typography variant="body1" color="textPrimary">
              {movie.overview}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <TabContext id={id} />
    </Grid>
  )
}

export default MovieDetailPage
