import { useAppSelector } from '@hooks/customReduxHooks';
import { FaBinoculars } from 'react-icons/fa';
import Card from '@components/Card/Card';

const VisibilityCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='flex flex-col info-card'>
      <span className='flex justify-start items-center w-full font-bold text-[20px] text-primary'>
        <FaBinoculars className='mx-1 w-5 h-5 rotate-[-90deg]' />
        Visibility
      </span>
      <div>
        <div className='p-3 mx-5 rounded table-container'>
          <table>
            <tbody>
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

export { VisibilityCard };
