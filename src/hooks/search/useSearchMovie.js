import { get } from "../../services/api";

export const searchMovieApi = async (movieName) => {
    try {
        if(movieName !== '') {
            const params = {
                params: {
                    query: movieName,
                    include_adult: false,
                    language: 'en-US',
                    page: 1
                }
            }
            return await get(process.env.REACT_APP_SEARCH_MOVIE_ENDPOINT || '', params);
        }
    } catch {
        console.error()
    }
};