import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const WeatherBox = ({weather, loading, apiError}) => {
    return (
    <div className="weather-box">
        {loading? (
            <ClipLoader
            color='#fff'
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"/>
        ) : !apiError ? (
            <div className="weather-box_content">
                <div className="weather-box_content_name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    {weather?.name}</div>
                <div className="weather-box_content_data">
                    <div className="weather-box_img">
                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
                        <span>{weather?.weather[0].description}</span>
                    </div>
                    <div className="weather-box_temp">
                        <h2 className="temp_celsius">{weather?.main.temp.toFixed(1)}℃</h2>
                        <span>{(weather?.main.temp*1.8+32).toFixed(1)}℉</span>
                    </div>
                </div>
            </div>
        ) : (
        <div className="weather-box_error">
            {apiError}
        </div>)}
    </div>
  )
}

export default WeatherBox
