import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCardBody, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import Card from '@components/Card/Card';

const VisibilityCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <Card className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon
            className='px-1'
            icon='binoculars'
            style={{ rotate: '-90deg' }}
          />
          Visibility
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div
          id='visibility-card-content'
          className='p-3 mx-5 rounded table-container'
        >
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
      </MDBCardBody>
    </Card>
  );
};

export { VisibilityCard };
