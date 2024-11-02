import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';

interface WeatherOptions {
  lon: string;
  lat: string;
}

export const WeatherComponent: React.FC<{ options: WeatherOptions }> = ({ options }) => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3030/integration/weather?lat=${options.lat}&lon=${options.lon}`)
      .then((res) => res.json())
      .then((data) => setWeather(data.data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, [options]);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div>
      <h3>{weather.location}</h3>
      <WeatherIcon weatherType={weather.condition} />
      <p>{weather.temperature}°{weather.unit}</p>
    </div>
  );
};
