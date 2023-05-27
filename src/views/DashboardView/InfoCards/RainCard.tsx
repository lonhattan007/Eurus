import { useAppSelector } from '@hooks/customReduxHooks';
import { FaCloudRain } from 'react-icons/fa';
import Card from '@components/Card/Card';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col info-card'>
      <span className='flex justify-start items-center w-full font-bold text-[20px] text-primary'>
        <FaCloudRain className='mx-1 w-6 h-6' />
        Precipitation
      </span>
      <div>
        <div className='p-3 mx-5 rounded table-container'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='text-start'>
                  Precipitation
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.precipitationMm ?? ''} mm
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Snow fall
                </th>
                <th scope='row' className='text-end text-primary fw-bold'>
                  {currentWeather.totalSnowCm ?? ''} cm
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Dew point
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.dewPointC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Visibility
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.visibility ?? ''} Km
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Cloud cover
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.cloudCover ?? ''} %
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default RainCard;
