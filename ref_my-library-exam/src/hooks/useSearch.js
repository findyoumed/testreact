import { useQuery } from '@tanstack/react-query'

const fetchBook = () => {
    // https://openlibrary.org/search.json

}

export const useSearchQuery = () => {
    return useQuery({
        queryKey: [],
        queryFn: () => fetchBook(),
        retry: 1,
        select: (data) => {
            return data.data;
        },
    });
};

export default useSearchQuery;
