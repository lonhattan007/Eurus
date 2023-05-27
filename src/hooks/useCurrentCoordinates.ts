import { useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from './customReduxHooks';
import axios, { AxiosError, AxiosResponse } from 'axios';
// import type { Address } from '@models/Address.interface';

// The maximum age in milliseconds of a possible cached position
// that is acceptable to return
// Currently set to 1 hour
const MAX_AGE = 1000 * 60 * 60;

// The maximum length of time in milliseconds the device is allowed to take
// in order to return a position
// Currently set to 15 seconds
const GET_COORDS_TIME_OUT = 60000;

function useGetCurrentCoordinates() {
  useEffect(() => {
    // If a position is found, save its coordinates to local storage
    const success: PositionCallback = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const params = {
        format: 'json',
        lat: latitude,
        lon: longitude,
      };

      axios
        .get('', {
          baseURL: import.meta.env.VITE_GEOCODING_URL,
          params,
        })
        .then((res: AxiosResponse) => {
          console.log(res.data.address);
        })
        .catch((err: Error | AxiosError) => {
          console.log(err.message);
        });
    };

    const error: PositionErrorCallback = (err: GeolocationPositionError) => {
      console.error(`ERROR(${err.code}): ${err.message}`);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      maximumAge: MAX_AGE,
      timeout: GET_COORDS_TIME_OUT,
    };

    if (!navigator.geolocation) {
      console.error('Geolocation not supported!');
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
}

export { useGetCurrentCoordinates };
