import React from "react"
import WeatherUpdates from "../components/WeatherUpdates"
import "../styles/WeatherPage.css"

const WeatherPage = () => {
  return (
    <div className="weather-page">
      <h1 className="page-title">Weather Updates</h1>
      <WeatherUpdates />
    </div>
  )
}

export default WeatherPage

