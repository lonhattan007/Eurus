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
      <div className='overflow-x-hidden overflow-y-scroll flex-row-reverse m-0 w-screen h-screen row'>
        <div className='flex justify-center items-start p-0 bg-white col'>
          <div className='container p-0'>
            <div className='justify-center my-3 row'>
              <LocationSearchBar
                id='search-section'
                className='mb-[20px] mt-[10px]'
              />
            </div>
            <div className='justify-center my-3 row'>
              <DetailedWeatherCard />
            </div>
            <div className='justify-start my-3 text-center row'>
              <h6 className='text-[#f9a550]'>
                {localStorage.getItem('recentLocations') !== null
                  ? 'Recently Viewed'
                  : 'Other Locations'}
              </h6>
            </div>
            {recentLocations.slice(1).map((location) => (
              <div
                key={location + '-summarized-info'}
                className='justify-center my-3 row'
              >
                <SummarizedWeatherCard location={location} />
              </div>
            ))}
          </div>
        </div>
        <div className='p-0 bg-sky-100/90 col'>
          <Greetings className='hidden items-start md:flex' />
          <div className='mx-3 row'>
            <DashboardViewTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
