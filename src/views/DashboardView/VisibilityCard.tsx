import { useAppSelector } from '@hooks/customReduxHooks';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

const VisibilityCard = () => {
  const currentWeather = useAppSelector((state) => state.currentWeather.value);

  return (
    <MDBCard className='info-card'>
      <MDBCardTitle className='text-primary'>
        <span>
          <MDBIcon className='px-1' icon='binoculars' style={{ rotate: '-90deg' }} />
          Visibility
        </span>
      </MDBCardTitle>
      <MDBCardBody>
        <div id='visibility-card-content' className='p-3 mx-5 rounded table-container'>
          <MDBTable>
            <MDBTableBody>
              <tr>
                <th scope='row' className='text-start'>
                  Visibility
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.visibility} Km </th>
              </tr>
              <tr>
                <th scope='row' className='text-start'>
                  Cloud cover
                </th>
                <th className='text-end text-primary fw-bold'>{currentWeather.cloudCover} %</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export { VisibilityCard };
