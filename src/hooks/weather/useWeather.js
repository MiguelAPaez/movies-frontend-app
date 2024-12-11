import { get } from "../../services/api";

export const searchWeatherDateApi = async (release_date) => {
    try {
        const params = {
            params: {
                latitude: process.env.REACT_APP_BOGOTA_LATITUDE,
                longitude: process.env.REACT_APP_BOGOTA_LONGITUDE,
                start_date: release_date,
                end_date: release_date,
                hourly: 'temperature_2m'
            }
        }
        return await get(process.env.REACT_APP_METEO_OPEN_ENDPOINT || '', params);
    } catch {
        console.error()
    }
};