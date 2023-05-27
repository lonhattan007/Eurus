import DailyForecastChart from '@components/DailyForecastChart';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const DailyForecastTab = () => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard className='info-card'>
          <MDBCardBody>
            <DailyForecastChart />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default DailyForecastTab;
