import { FC } from 'react';

import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';
import DetailedWeatherCard from '@components/DetailedWeatherCard/DetailedWeatherCard';
import SummarizedWeatherCard from '@components/SummarizedWeatherCard/SummarizedWeatherCard';
import { DashboardViewTabs } from './DashboardViewTabs';

import { useGetCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardView.css';

const DashboardView: FC = () => {
  useGetCurrentCoordinates();
  const recentLocations = useAppSelector(
    (state) => state.recentLocations.value,
  );
  return (
    <div className='p-0 m-0 w-full h-full'>
      <div className='flex overflow-x-hidden overflow-y-scroll flex-col m-0 w-screen h-screen md:flex-row-reverse'>
        <div className='flex flex-col flex-auto justify-center items-start p-0 bg-white md:w-1/3 lg:w-1/4'>
          <div className='container p-0'>
            <div className='flex justify-center my-3'>
              <LocationSearchBar
                id='search-section'
                className='mb-[20px] mt-[10px]'
              />
            </div>
            <div className='flex justify-center my-3'>
              <DetailedWeatherCard />
            </div>
            <div className='justify-start my-3 text-center'>
              <h6 className='text-[#f9a550] font-bold'>
                {localStorage.getItem('recentLocations') !== null
                  ? 'Recently Viewed'
                  : 'Other Locations'}
              </h6>
            </div>
            {recentLocations.slice(1).map((location) => (
              <div
                key={location + '-summarized-info'}
                className='flex justify-center my-3'
              >
                <SummarizedWeatherCard location={location} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col flex-auto p-0 md:w-2/3 lg:w-3/4 bg-sky-100/90'>
          <Greetings className='hidden items-start md:flex' />
          <div className='flex flex-row w-full'>
            <DashboardViewTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
