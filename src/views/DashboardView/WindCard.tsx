import { useAppSelector } from '@hooks/customReduxHooks';
import {
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBTable,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import Card from '@components/Card/Card';

const WindCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='wind' /> Wind
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div
          id='wind-card-content'
          className='p-3 mx-5 rounded table-container'
        >
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Wind speed{' '}
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.windSpeedKmph ?? ''} Km/h
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Wind gust{' '}
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.windGustKmph ?? ''} Km/h
                </th>
              </tr>
              <tr className='h-25'>
                <th scope='row' className='text-start'>
                  Wind direction
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.windDirDegree ? (
                    <>
                      {/* The icon is slanted by 45 degrees by default */}
                      <MDBIcon
                        className='px-1'
                        icon='location-arrow'
                        style={{
                          rotate: `${-45 + currentWeather.windDirDegree}deg`,
                        }}
                      />
                      <span>{currentWeather.windDirDegree}&deg;</span>
                    </>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </Card>
  );
};

export { WindCard };
