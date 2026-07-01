import { useQuery } from '@tanstack/react-query'
import api from '../utils/api';

const fetchMovieReview = ({id, reviewPage}) => {
    return api.get(`movie/${id}/reviews?page=${reviewPage}`)
}

export const useMovieReviewQuery = ({id, reviewPage}) => {
    return useQuery({
        queryKey: ['movie-review', {id, reviewPage}],
        queryFn: () => fetchMovieReview({id, reviewPage}),
        select: result => result.data,
    });
}
