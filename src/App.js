import './App.css';
import React, { useState } from 'react';
import { searchMovieApi } from './hooks/search/useSearchMovie';
import { searchMovieDescriptionApi } from './hooks/desc/useDescMovie';
import { searchWeatherDateApi } from './hooks/weather/useWeather';
import { goUpSubmissionApi } from './hooks/submission/useSubmission';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [officialTitleValue, setofficialTitle] = useState('');
  const [genresValue, setGenresValue] = useState([]);
  const [releaseDateValue, setReleaseDateValue] = useState('');
  const [minimumTemperatureValue, setMinimumTemperatureValue] = useState('');
  const [maximumTemperatureValue, setMaximumTemperatureValue] = useState('');
  const [eventIdSubmission, setEventIdSubmission] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchMovie = async () => {
    const searchMovieData = await searchMovieApi(inputValue);
    setofficialTitle(searchMovieData.results[0].original_title);
    const searchMovieDescription = await searchMovieDescriptionApi(searchMovieData.results[0].id);
    setGenresValue(searchMovieDescription.genres);
    setReleaseDateValue(searchMovieData.results[0].release_date);
    const searchWeather = await searchWeatherDateApi(searchMovieData.results[0].release_date);
    const temperaturesOfReleaseDate = searchWeather.hourly.temperature_2m;
    setMinimumTemperatureValue(Math.min(...temperaturesOfReleaseDate));
    setMaximumTemperatureValue(Math.max(...temperaturesOfReleaseDate));
    goUpSubmissionData({
      movieOfficialTitle: searchMovieData.results[0].original_title,
      movieGenres: searchMovieDescription.genres,
      movieReleaseDate: searchMovieData.results[0].release_date,
      releaseDateMinimumTemperature: Math.min(...temperaturesOfReleaseDate),
      releaseDateMaximumTemperature: Math.max(...temperaturesOfReleaseDate)
    })
  }

  const goUpSubmissionData = async (submissionData) => {
    const submissionResponse = await goUpSubmissionApi(submissionData);
    setEventIdSubmission(submissionResponse?.event_id);
  }

  const validateInput = () => {
    return inputValue !== '' ? searchMovie() : alert('Please, insert a movie title :)')
  };

  return (
    <div>
      <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="topnav">
          <div className="search-container">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search a movie..." name="search" />
            <button onClick={validateInput}><i className="fa fa-search"></i></button>
          </div>
        </div>
      </header>
      <table className='table-div'>
        <tr>
          <th>Official Movie Title</th>
          <th>Genres</th>
          <th>Minimum Temperature</th>
          <th>Maximum Temperature</th>
        </tr>
        <tr>
          <td>{officialTitleValue}</td>
          <td>
            <ul>
              {genresValue.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </td>
          <td>{minimumTemperatureValue}</td>
          <td>{maximumTemperatureValue}</td>
        </tr>
      </table>
      <div className='description-div'>
        <p><b>Note:</b> The temperature is for <b>Bogotá, Colombia</b> on <b>{releaseDateValue}</b></p>
        <p><b>Bookhub Event Id:</b> {eventIdSubmission}</p>
      </div>
    </div>
  );
}

export default App;
