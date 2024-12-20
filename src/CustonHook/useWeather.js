import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [rowId, setRowId] = useState(1);
  const [error, setError] = useState('');

  const APIkey = "5011c36b13efc7f9aca5ad9b1c276d76";

  const fetchWeather = async (city) => {
    try {
      setError('');
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      );
      const data = await response.json();

      if (response.ok) {
        const newRow = {
          id: rowId,
          name: data.name,
          temperature: parseFloat((data.main.temp - 273.15).toFixed(2)),
          weather: data.weather[0].description,
        };

        setWeatherData((prev) => [...prev, newRow]);
        setRowId((prev) => prev + 1);
      } else {
        setError('City not found. Please try again.');
      }
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(error);
    }
  };

  const handleDeleteRow = (id) => {
    setWeatherData((prev) => prev.filter((row) => row.id !== id));
  };

  return { weatherData, error, fetchWeather, handleDeleteRow };
};

export default useWeather;
