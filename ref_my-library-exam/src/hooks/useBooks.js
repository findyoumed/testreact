import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const fetchBook = () => {
    return axios.get(`https://openlibrary.org/subjects/love.json?limit=10`);
}

export const useBookQuery = () => {
    return useQuery({
        queryKey: ["subjects"],
        queryFn: () => fetchBook(),
        retry: 1,
        select: (data) => {
            return data.data.works;
        },
    });
};

export default useBookQuery;
