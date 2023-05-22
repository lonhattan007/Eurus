import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './customReduxHooks';
import { useGetWeatherByCoords } from './useGetWeatherByCoords';
import { setCurrentCoords } from '@stores/currentCoordsSlice';
import axios from 'axios';
import moment from 'moment';

// The maximum age in milliseconds of a possible cached position that is acceptable to return
// Currently set to 1 hour
const MAX_AGE = 1000 * 60 * 60;

// Currently set to 10 seconds
const GET_COORDS_TIME_OUT = 10000;

function useCurrentCoordinates() {
  const currentCoords = useAppSelector((state) => state.currentCoords.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // If a position is found, save its coordinates to local storage
    const success = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // const startDateTime = moment().startOf('h').format('YYYY-MM-DDTHH:mm:ss');
      // const endDateTime = moment().add(1, 'h').startOf('h').format('YYYY-MM-DDTHH:mm:ss');

      const payload = { latitude, longitude };

      const params = {
        latitude,
        longitude,
        format: 'jsonv2',
      };

      localStorage.setItem('currentCoordinates', `${latitude},${longitude}`);
      dispatch(setCurrentCoords(payload));

      axios
        .get(`https://nominatim.openstreetmap.org/reverse`, { params })
        .then((res) => {})
        .catch((err: any) => {
          console.log(err.message);
        });

      console.log('Geolocation detected');
    };

    const error = (err: any) => {
      console.error(err);
    };

    const options = {
      maximumAge: MAX_AGE,
      timeout: GET_COORDS_TIME_OUT,
    };

    if (!navigator.geolocation) {
      console.error('Geolocation not supported!');
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useGetWeatherByCoords();

  return currentCoords;
}

export { useCurrentCoordinates };
