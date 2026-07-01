import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchRecommendation = ({id, recommendationPage}) => {
    return api.get(`/movie/${id}/recommendations?page=${recommendationPage}`);
}

export const useRecommendationQuery = ({id, recommendationPage}) => {
    return useQuery({
        queryKey: ['movie-recommendation', {id, recommendationPage}],
        queryFn: () => fetchRecommendation({id, recommendationPage}),
        select: (result) => result.data
    })
}
