import { useAppSelector } from '@hooks/customReduxHooks';
import { FaThermometerHalf } from 'react-icons/fa';
import Card from '@components/Card/Card';

const TemperatureCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col my-8 bg-white text-dark'>
      <span className='flex justify-start items-center my-1 mx-5 w-full font-bold text-[20px] text-primary'>
        <FaThermometerHalf className='mx-1' />
        Heat
      </span>
      <div className='p-1 mb-2'>
        <div className='p-3 mx-5 rounded bg-cream'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Maximum temperature
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.maxTempC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Minimum temperature
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.minTempC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Heat index
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.heatIndexC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Wind chill
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.windChillC ?? ''} &deg;C
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default TemperatureCard;
