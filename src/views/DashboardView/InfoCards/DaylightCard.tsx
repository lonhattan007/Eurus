import { useAppSelector } from '@hooks/customReduxHooks';
import { FaCloudSun } from 'react-icons/fa';
import Card from '@components/Card/Card';

const DaylightCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col my-8 bg-white text-dark'>
      <span className='flex justify-start items-center my-1 mx-5 w-full font-bold text-[20px] text-primary'>
        <FaCloudSun className='mx-1' icon='sun' />
        Daylight
      </span>
      <div className='p-1 mb-2'>
        <div className='p-3 mx-5 rounded bg-cream'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  UV index
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.uvIndex ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Sun hour
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.sunHour ?? ''} hr
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Sunset
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.sunset ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Sunset
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.sunset ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Moon illumination
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.sunHour ?? ''} %
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Moonrise
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.moonrise ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Moonset
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.moonset ?? ''}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default DaylightCard;
