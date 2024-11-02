import React, { FC } from 'react';

import { ReactComponent as CloudyIcon } from '../icons/cloudy.svg';
import { ReactComponent as RainIcon } from '../icons/rain.svg';
import { ReactComponent as ClearDayIcon } from '../icons/clear-day.svg';

type WeatherIconProps = {
  weatherType: 'cloudy' | 'rain' | 'clear-day';
};

const WeatherIcon: FC<WeatherIconProps> = ({ weatherType }) => {
  return (
    <div>
      {weatherType === 'cloudy' && <CloudyIcon />}
      {weatherType === 'rain' && <RainIcon />}
      {weatherType === 'clear-day' && <ClearDayIcon />}
    </div>
  );
};

export default WeatherIcon;
