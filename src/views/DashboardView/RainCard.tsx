import { useAppSelector } from '@hooks/customReduxHooks';
import {
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBTable,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import Card from '@components/Card/Card';

const RainCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='cloud-showers-heavy' /> Rainfall and
          Mist
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div
          id='rain-card-content'
          className='p-3 mx-5 rounded table-container'
        >
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Precipitation
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.precipitationMm ?? ''} mm
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Snow fall
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.totalSnowCm ?? ''} cm
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Dew point
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.dewPointC ?? ''} &deg;C
                </th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </Card>
  );
};

export { RainCard };
