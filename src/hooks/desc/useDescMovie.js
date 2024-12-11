import { get } from "../../services/api";

export const searchMovieDescriptionApi = async (idMovie) => {
    try {
        const params = {
            language:'en-US',
        }
      return await get(process.env.REACT_APP_DESCRIPTION_MOVIE_ENDPOINT + `${idMovie}` || '', params);
    } catch (error) {
        console.error(error)
    }
};