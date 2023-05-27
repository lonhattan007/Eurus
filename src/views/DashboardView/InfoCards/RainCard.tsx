import { useAppSelector } from '@hooks/customReduxHooks';
import { FaCloudRain } from 'react-icons/fa';
import Card from '@components/Card/Card';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col my-8 text-black bg-white info-card'>
      <span className='flex justify-start items-center my-1 mx-5 w-full font-bold text-[20px] text-primary'>
        <FaCloudRain className='mx-1 w-6 h-6' />
        Precipitation and Fog
      </span>
      <div className='p-1 mb-2'>
        <div className='p-3 mx-5 rounded bg-cream'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='font-normal text-start text-dark'>
                  Precipitation
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.precipitationMm ?? ''} mm
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start text-dark'>
                  Snow fall
                </th>
                <th scope='row' className='font-bold text-end text-primary'>
                  {currentWeather.totalSnowCm ?? ''} cm
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start text-dark'>
                  Dew point
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.dewPointC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start text-dark'>
                  Visibility
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.visibility ?? ''} Km
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start text-dark'>
                  Cloud cover
                </th>
                <th className='font-bold text-end text-primary'>
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
