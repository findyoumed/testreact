import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import LoadingSpinner from '../../common/components/LoadingSpinner';
import AlertMessage from '../../common/components/AlertMessage';
import { useSearchParams } from 'react-router-dom';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Chip, Grid, MenuItem, MenuList, Pagination, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import MovieCardList from '../../common/MovieCardList/MovieCardList';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popular Movie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState("popularity");
  const [selectedGenreList, setSelectedGenreList] = useState([]);
  
  const keyword = query.get("q");
  const sortOptionList = [{id:"popularity", label:"인기 많은 순"}, {id:"primary_release_date", label:"최신 개봉일 순"}, {id:"vote_average", label:"별점 높은 순"}];

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page, sortOption, selectedGenreList });
  const {data:genreData} = useMovieGenreQuery();

  useEffect(() => {
    setPage(1);
    setSortOption("popularity");
    setSelectedGenreList([]);
  },[keyword]);

  useEffect(() => {
    if(data && data.total_pages && data.total_pages < page) {
      setPage(data.total_pages === (page - 1) ? (page-1) : data.total_pages)
    }
  }, [data?.total_pages])

  const handlePageChange = (event, value) => {
    setPage(value);
  }
  const handleGenreList = (genreId) => {
    return selectedGenreList.includes(genreId) 
      ? setSelectedGenreList(selectedGenreList.filter((id) => id !== genreId))
      : setSelectedGenreList([...selectedGenreList, genreId]);
  }
  
  if (isLoading) return <LoadingSpinner />
  if (isError) return <AlertMessage type="error" message={error.message} />
  return (
    <Grid sx={{ p: "20px" }} container spacing={2}>
      <Grid sx={{color:"#fff"}} size={{ md: 4, xs: 12 }}>
          <Accordion sx={{
            backgroundColor: "transparent",
            border: "solid 1px #fff",
            color: "#fff"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Sort by</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MenuList>
                {sortOptionList.map((option) => (
                  <MenuItem
                    key={option.id}
                    selected={option.id===sortOption}
                    onClick={()=>setSortOption(option.id)}
                    sx={{
                      "&:hover" : {
                        backgroundColor: "gray"
                      },
                      "&.Mui-selected" : {
                        backgroundColor: "error.dark"
                      }
                    }}
                    >{option.label}</MenuItem>
                ))}
              </MenuList>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{
            backgroundColor: "transparent",
            border: "solid 1px #fff",
            color: "#fff",
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">by Genre</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                direction="row"
                useFlexGap
                sx={{flexWrap: "wrap"}}
                spacing={1}>
                  {genreData?.map((genre) => {
                    const isSelected = selectedGenreList.includes(genre.id);
                    return (
                      <Chip
                        key={genre.id}
                        label={genre.name}
                        sx={{
                          color: "#fff",
                          backgroundColor: isSelected? "#c62828" : 'transparent',
                          "&:hover" : {
                            backgroundColor: isSelected ? "#d32f2f !important" : "rgba(128, 128, 128, 0.3) !important"
                          },
                        }}
                        variant="outlined"
                        onClick={()=>handleGenreList(genre.id)}
                        />
                    )
                  })}
              </Stack>
            </AccordionDetails>
            <AccordionActions>
              <Button 
                variant="contained"
                color="inherit"
                sx={{ 
                  color: "#fff",
                  "&:hover" : {
                    backgroundColor: "rgba(128, 128, 128, 0.3)"
                  }
                }}
                onClick={()=>setSelectedGenreList([])}
              >초기화</Button>
            </AccordionActions>
          </Accordion>
      
      </Grid>
      <Grid size={{ md: 8, xs: 12 }}>
        <MovieCardList data={data} page={page} handlePageChange={handlePageChange} />
      </Grid>
    </Grid>
  )
}

export default MoviePage
