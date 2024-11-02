import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherComponent.css'; // Import CSS file

interface WeatherOptions {
  lon: string;
  lat: string;
}

export const WeatherComponent: React.FC<{ options: WeatherOptions }> = ({ options }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3030/integration/weather?lat=${options.lat}&lon=${options.lon}`)
      .then((res) => res.json())
      .then((data) => setWeather(data.data));
  }, [options]);

  if (!weather) return <div className="weather-loading">Loading weather...</div>;

  return (
    <div className="weather-component">
      <h3>{weather.location}</h3>
      <WeatherIcon weatherType={weather.condition} />
      <p>{weather.temperature}°{weather.unit}</p>
    </div>
  );
};
