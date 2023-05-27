import React, { FC, Suspense, useEffect } from 'react';

import Card from '@components/Card';
const Greetings = React.lazy(() => import('@components/Greetings'));

import { FiMapPin, FiWind } from 'react-icons/fi';
import { FaTint } from 'react-icons/fa';
import { TbGauge } from 'react-icons/tb';

import { useWeather } from '@hooks/useWeather';
import { useAppDispatch, useAppSelector } from '@hooks/customReduxHooks';
import { updateCurrentWeather } from '@stores/currentWeatherSlice';
import type { Weather } from '@models/Weather.interface';

const DetailedWeatherCard: FC = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.currentLocation.value);
  const weather: Weather = useWeather(location);

  useEffect(() => {
    // Update the current weather in the store whenever the weather changes
    dispatch(updateCurrentWeather(weather));
  }, [weather]);

  return (
    <Card
      className='
        flex flex-col justify-items-center
        w-4/5 min-h-[300px] h-[50vh]
        mb-[15px] 
        text-white 
        bg-gradient-to-br from-[#97c4ff] to-[#599eef]'
    >
      <Suspense>
        <Greetings className='flex flex-auto md:hidden' />
      </Suspense>
      <span className='flex flex-auto justify-center items-center mt-0 w-full text-2xl md:mt-3'>
        <FiMapPin className='inline-block mr-1 w-6 h-6 stroke-1.5' />
        {location}
      </span>
      <div className='flex flex-col flex-auto justify-evenly p-6 w-full'>
        <div>
          <h1 className='font-bold'>{weather.tempC ?? ''}&deg;C</h1>
          <div className='text-base'>
            Real Feel {weather.feelsLikeC ?? ''}&deg;C
          </div>
          <div className='font-bold'>{weather.weatherStatus ?? ''}</div>
        </div>
        <table className='p-0 m-0 font-medium bg-transparent border-collapse'>
          <tbody>
            <tr>
              <th scope='row' className='text-start'>
                <FiWind />
              </th>
              <td className='text-start'>Wind speed</td>
              <td className='text-end'>{`${
                weather.windSpeedKmph ?? ''
              } Km/h`}</td>
            </tr>
            <tr>
              <th scope='row' className='text-start'>
                <FaTint />
              </th>
              <td className='text-start'>Humidity</td>
              <td className='text-end'>{`${weather.humidity ?? ''} %`}</td>
            </tr>
            <tr>
              <th scope='row' className='text-start'>
                <TbGauge />
              </th>
              <td className='text-start'>Air pressure</td>
              <td className='text-end'>{`${weather.pressure ?? ''} mbar`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DetailedWeatherCard;
