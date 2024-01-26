import { useState, useEffect } from 'react';
// import axios from 'axios';
import moment from 'moment';
import { Weather } from '@models/Weather.interface';

function useWeather(location: string): Weather {
  // Round the time interval within an hour
  const startDateTime: string = moment()
    .startOf('h')
    .format('YYYY-MM-DDTHH:mm:ss');
  const endDateTime: string = moment()
    .add(1, 'h')
    .startOf('h')
    .format('YYYY-MM-DDTHH:mm:ss');

  const [weather, _setWeather] = useState<Weather>({});

  useEffect(() => {
    const params = {
      locationName: location,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    // axios
    //   .get('/weathers/location-name', { params: params })
    //   .then((res) => {
    //     const weatherReports = JSON.parse(res.request.response);
    //     setWeather({ ...weatherReports[0] });
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
    JSON.stringify(params);
  }, [location]);

  return weather;
}

export { useWeather };
