import { useAppSelector } from '@hooks/customReduxHooks';
import { FiWind } from 'react-icons/fi';
import { FaLocationArrow } from 'react-icons/fa';
import Card from '@components/Card/Card';

const WindCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col my-8 bg-white text-dark'>
      <span className='flex justify-start items-center my-1 mx-5 w-full font-bold text-[20px] text-primary'>
        <FiWind className='mx-1 w-7 h-7' /> Wind
      </span>
      <div className='p-1 mb-2'>
        <div className='p-3 mx-5 rounded bg-cream'>
          <table>
            <tbody>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Wind speed
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.windSpeedKmph ?? ''} Km/h
                </th>
              </tr>
              <tr>
                <th scope='row' className='font-normal text-start'>
                  Wind gust
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.windGustKmph ?? ''} Km/h
                </th>
              </tr>
              <tr className='h-25'>
                <th scope='row' className='font-normal text-start'>
                  Wind direction
                </th>
                <th className='font-bold text-end text-primary'>
                  {currentWeather.windDirDegree ? (
                    <>
                      <span className='flex items-center'>
                        {/* The icon is slanted by 45 degrees by default */}
                        <FaLocationArrow
                          className='mx-1'
                          style={{
                            rotate: `${-45 + currentWeather.windDirDegree}deg`,
                          }}
                        />
                        {currentWeather.windDirDegree};
                      </span>
                    </>
                  ) : (
                    ''
                  )}
                  &deg;
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default WindCard;
