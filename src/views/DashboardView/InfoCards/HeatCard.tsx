import { useAppSelector } from '@hooks/customReduxHooks';
import { FaThermometerHalf } from 'react-icons/fa';
import Card from '@components/Card/Card';

const HeatCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col info-card'>
      <span className='flex justify-start items-center w-full font-bold text-[20px] text-primary'>
        <FaThermometerHalf className='mx-1' />
        Heat
      </span>
      <div>
        <div className='p-3 mx-5 rounded table-container'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='text-start'>
                  Maximum temperature
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.maxTempC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Minimum temperature
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.minTempC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Heat index
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.heatIndexC ?? ''} &deg;C
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Wind chill
                </th>
                <th className='text-end text-primary fw-bold'>
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

export { HeatCard };
