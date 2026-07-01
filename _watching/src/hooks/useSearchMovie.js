import { useQuery } from '@tanstack/react-query'
import api from '../utils/api';

const fetchSearchMovie = ({keyword, page, sortOption, selectedGenreList}) => {

    const genreOptions = (selectedGenreList) ? `&with_genres=${selectedGenreList.join("|")}` : ''

    return keyword
        ? api.get(`/discover/movie?with_text_query=${keyword}&page=${page}&sort_by=${sortOption}.desc${genreOptions}`) 
        : api.get(`/discover/movie?page=${page}&sort_by=${sortOption}.desc${genreOptions}`);
}

export const useSearchMovieQuery = ({keyword, page, sortOption, selectedGenreList}) => {
    return useQuery({
        queryKey:[`movie-search`, {keyword, page, sortOption, selectedGenreList}],
        queryFn: () => fetchSearchMovie({keyword, page, sortOption, selectedGenreList}),
        select: (result) => result.data,
    });
}
