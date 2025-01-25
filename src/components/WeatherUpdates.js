import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Loader2 } from "lucide-react"
import "../styles/WeatherUpdates.css"

function WeatherUpdates() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))

  const fetchWeather = async (latitude, longitude) => {
    try {
      const apiKey = "f08d354266eaf262dbb2feb859df71f0";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
      )
      const data = await response.json()

      setWeather({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        description: data.weather[0].description,
        main: data.weather[0].main,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
      })
    } catch (error) {
      setError("Failed to fetch weather data")
      console.error("Error fetching weather data:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
  }

  useEffect(() => {
    let weatherInterval, timeInterval

    const getLocationAndFetchWeather = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude)
          },
          (err) => {
            setError("Failed to get location. Please enable location services.")
            setLoading(false)
          },
        )
      } else {
        setError("Geolocation is not supported by your browser")
        setLoading(false)
      }
    }

    getLocationAndFetchWeather()
    weatherInterval = setInterval(getLocationAndFetchWeather, 300000)
    timeInterval = setInterval(updateTime, 60000)

    return () => {
      clearInterval(weatherInterval)
      clearInterval(timeInterval)
    }
  }, [])

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case "clear":
        return "☀️"
      case "clouds":
        return "☁️"
      case "rain":
        return "🌧️"
      case "snow":
        return "❄️"
      case "thunderstorm":
        return "⛈️"
      case "drizzle":
        return "🌦️"
      case "mist":
      case "fog":
        return "🌫️"
      default:
        return ""
    }
  }

  if (error)
    return (
      <Card className="weather-error">
        <CardContent>{error}</CardContent>
      </Card>
    )

  return (
    <Card className="weather-updates-card">
      <CardHeader>
        <CardTitle className="weather-header">
          Weather Report
          <span className="weather-time">{time}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="weather-loading">
            <Loader2 className="weather-loader" />
            Loading...
          </div>
        ) : weather ? (
          <div className="weather-content">
            <h3 className="weather-location">
              {weather.city}, {weather.country}
            </h3>
            <div className="weather-details">
              <div className="weather-main">
                <div className="weather-icon">{getWeatherIcon(weather.main)}</div>
                <div className="temperature">{Math.round(weather.temp)}°C</div>
              </div>
              <div className="weather-info">
                <div>Feels Like: {Math.round(weather.feelsLike)}°C</div>
                <div>Min: {Math.round(weather.tempMin)}°C</div>
                <div>Max: {Math.round(weather.tempMax)}°C</div>
                <div>Condition: {weather.description}</div>
                <div>Wind Speed: {weather.windSpeed} m/s</div>
                <div>Humidity: {weather.humidity}%</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-no-data">No data available</div>
        )}
      </CardContent>
    </Card>
  )
}

export default WeatherUpdates;

