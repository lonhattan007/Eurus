import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Greetings from '@components/Greetings';
import LocationSearchBar from '@components/LocationSearchBar';
import DetailedWeatherCard from '@components/DetailedWeatherCard/DetailedWeatherCard';
import SummarizedWeatherCard from '@components/SummarizedWeatherCard/SummarizedWeatherCard';
import { DashboardViewTabs } from './DashboardViewTabs';

// import { useEffect } from 'react';
// import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import { useAppSelector } from '@hooks/customReduxHooks';

import './DashboardView.scss';
import { ForecastTypes, useForecast } from '@hooks/useForecast';
// import { useGetWeatherByCoords } from '@hooks/useGetWeatherByCoords';
// import { useGetWeatherByCoords } from '@hooks/useGetWeatherByCoords';

const DashboardView = () => {
  // const currentCoords = useCurrentCoordinates();
  const recentLocations = useAppSelector(
    (state) => state.recentLocations.value,
  );

  // if (currentCoords) {
  //   useGetWeatherByCoords()
  // }

  useForecast(ForecastTypes.weekly);
  useForecast(ForecastTypes.hourly);

  return (
    <MDBContainer id='content-container'>
      <MDBRow id='content-row' className='flex-row-reverse'>
        <MDBCol
          className='p-0 side-panel d-flex justify-content-center align-items-start'
          lg='3'
          md='4'
        >
          <MDBContainer>
            <MDBRow className='my-3 justify-content-center'>
              <LocationSearchBar id='search-section' />
            </MDBRow>
            <MDBRow className='my-3 justify-content-center'>
              <DetailedWeatherCard />
            </MDBRow>
            <MDBRow className='my-3 justify-content-start text-align-left'>
              <h6 className='text'>
                {localStorage.getItem('recentLocations') !== null
                  ? 'Recently Viewed'
                  : 'Other Locations'}
              </h6>
            </MDBRow>
            {recentLocations.slice(1).map((location) => (
              <MDBRow
                key={location + '-summarized-info'}
                className='my-3 justify-content-center'
              >
                <SummarizedWeatherCard location={location} />
              </MDBRow>
            ))}
          </MDBContainer>
        </MDBCol>
        <MDBCol className='p-0 detail-board' lg='9' md='8'>
          <Greetings className='d-none d-md-flex align-items-start' />
          <MDBRow className='mx-3'>
            <DashboardViewTabs />
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
