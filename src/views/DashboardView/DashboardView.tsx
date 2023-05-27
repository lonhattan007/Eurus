import { FC } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';
import DetailedWeatherCard from '@components/DetailedWeatherCard/DetailedWeatherCard';
import SummarizedWeatherCard from '@components/SummarizedWeatherCard/SummarizedWeatherCard';
import { DashboardViewTabs } from './DashboardViewTabs';

import { useGetCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardView.scss';
// import { ForecastTypes, useForecast } from '@hooks/useForecast';
// import { useGetWeatherByCoords } from '@hooks/useGetWeatherByCoords';
// import { useGetWeatherByCoords } from '@hooks/useGetWeatherByCoords';

const DashboardView: FC = () => {
  useGetCurrentCoordinates();
  const recentLocations = useAppSelector(
    (state) => state.recentLocations.value,
  );
  return (
    <MDBContainer id='content-container'>
      <MDBRow id='content-row' className='flex-row-reverse'>
        <MDBCol
          className='flex justify-center items-start p-0 side-panel'
          lg='3'
          md='4'
        >
          <MDBContainer>
            <MDBRow className='justify-center my-3'>
              <LocationSearchBar id='search-section' />
            </MDBRow>
            <MDBRow className='justify-center my-3'>
              <DetailedWeatherCard />
            </MDBRow>
            <MDBRow className='justify-start my-3 text-center'>
              <h6 className='text'>
                {localStorage.getItem('recentLocations') !== null
                  ? 'Recently Viewed'
                  : 'Other Locations'}
              </h6>
            </MDBRow>
            {recentLocations.slice(1).map((location) => (
              <MDBRow
                key={location + '-summarized-info'}
                className='justify-center my-3'
              >
                <SummarizedWeatherCard location={location} />
              </MDBRow>
            ))}
          </MDBContainer>
        </MDBCol>
        <MDBCol className='p-0 detail-board' lg='9' md='8'>
          <Greetings className='hidden items-start md:flex' />
          <MDBRow className='mx-3'>
            <DashboardViewTabs />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
