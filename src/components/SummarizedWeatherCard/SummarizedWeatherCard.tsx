import React from 'react';
import { useWeather } from '@hooks/useWeather';
import { useAppDispatch } from '@hooks/customReduxHooks';

import Card from '@components/Card';
import { rearrangeLocation } from '@stores/recentLocationsSlice';
import { updateLocation } from '@stores/currentLocationSlice';

import { FiMapPin, FiWind } from 'react-icons/fi';
import { FaTint } from 'react-icons/fa';

import './SummarizedWeatherCard.css';
import { Weather } from '@models/Weather.interface';

const SummarizedWeatherCard = (props: any) => {
  const dispatch = useAppDispatch();
  const weather: Weather = useWeather(props.location);

  const handleClick: React.MouseEventHandler<HTMLElement> = (
    e: React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();

    dispatch(rearrangeLocation(props.location));
    dispatch(updateLocation(props.location));
  };

  return (
    <Card
      className='flex-col text-white mb-[10px] other-card'
      onClick={handleClick}
    >
      <span className='flex flex-auto justify-end items-center w-full text-lg font-semibold'>
        <FiMapPin className='inline-block mr-1 w-4 h-4 stroke-1.5' />
        {props.location}
      </span>
      <div className='flex-auto p-0 pb-3'>
        <div className='p-0 m-0 row'>
          <div className='p-0 col d-flex flex-column-reverse align-items-start'>
            <table className='p-0 m-0 text-sm border-collapse table-auto'>
              <tbody>
                <tr>
                  <th scope='row'>
                    <FiWind />
                  </th>
                  <td>Wind</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${
                    weather.windSpeedKmph ?? ''
                  } Km/h`}</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <FaTint />
                  </th>
                  <td>Hum</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${
                    weather.humidity ?? ''
                  } %`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-0 col d-flex flex-column-reverse align-items-end'>
            <span className='fw-bold fs-5'>{weather.tempC ?? ''}&deg;C</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SummarizedWeatherCard;
