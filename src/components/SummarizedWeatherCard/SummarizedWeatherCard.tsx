import React from 'react';
import { useWeather } from '@hooks/useWeather';
import { useAppDispatch } from '@hooks/customReduxHooks';

import { MDBCardTitle, MDBIcon, MDBCol, MDBRow } from 'mdb-react-ui-kit';

import Card from '@components/Card';
import { rearrangeLocation } from '@stores/recentLocationsSlice';
import { updateLocation } from '@stores/currentLocationSlice';

import { fixLocationName } from '@utils/fixLocationName';

import './SummarizedWeatherCard.scss';
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
    <Card className='other-card' onClick={handleClick}>
      <MDBCardTitle className='flex-row-reverse mt-2 d-flex fs-5'>
        <span>
          <MDBIcon icon='map-marker-alt' size='xs' />
          {/* TODO: This is just a patch, removed when DB is more concise */}
          {' ' + fixLocationName(props.location)}
        </span>
      </MDBCardTitle>
      <div className='flex-auto p-0 pb-3'>
        <MDBRow className='p-0 m-0'>
          <MDBCol className='p-0 d-flex flex-column-reverse align-items-start'>
            <table className='p-0 m-0 text-sm bg-transparent border-collapse'>
              <tbody>
                <tr>
                  <th scope='row'>
                    <MDBIcon icon='wind' size='sm' />
                  </th>
                  <td>Wind</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${
                    weather.windSpeedKmph ?? ''
                  } Km/h`}</td>
                </tr>
                <tr>
                  <th scope='row'>
                    <MDBIcon icon='tint' size='sm' />
                  </th>
                  <td>Hum</td>
                  <td className='px-2'>|</td>
                  <td className='text-start'>{`${
                    weather.humidity ?? ''
                  } %`}</td>
                </tr>
              </tbody>
            </table>
          </MDBCol>
          <MDBCol className='p-0 d-flex flex-column-reverse align-items-end'>
            <span className='fw-bold fs-5'>{weather.tempC ?? ''}&deg;C</span>
          </MDBCol>
        </MDBRow>
      </div>
    </Card>
  );
};

export default SummarizedWeatherCard;
