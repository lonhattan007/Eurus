import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCardBody, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import Card from '@components/Card/Card';

const HeatCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='thermometer-half' />
          Heat
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div
          id='heat-card-content'
          className='p-3 mx-5 rounded table-container'
        >
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
      </MDBCardBody>
    </Card>
  );
};

export { HeatCard };
