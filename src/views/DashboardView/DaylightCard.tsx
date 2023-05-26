import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCardBody, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import Card from '@components/Card/Card';

const DaylightCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='sun' />
          Daylight
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div
          id='daylight-card-content'
          className='p-3 mx-5 rounded table-container'
        >
          <table>
            <tbody>
              <tr>
                <th scope='row' className='text-start'>
                  UV index
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.uvIndex ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Sun hour
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.sunHour ?? ''} hr
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Sunset
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.sunset ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Sunset
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.sunset ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Moon illumination
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.sunHour ?? ''} %
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Moonrise
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.moonrise ?? ''}
                </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Moonset
                </th>
                <th className='text-end text-primary fw-bold'>
                  {currentWeather.moonset ?? ''}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </MDBCardBody>
    </Card>
  );
};

export { DaylightCard };
