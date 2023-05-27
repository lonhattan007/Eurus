import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
  TemperatureCard,
  DaylightCard,
  RainCard,
  WindCard,
} from '../InfoCards';

const DetailTab = () => {
  return (
    <MDBContainer>
      <MDBRow className='flex-row-reverse items-stretch'>
        <MDBCol className='justify-stretch'>
          <TemperatureCard />
          <RainCard />
        </MDBCol>
        <MDBCol className='justify-stretch'>
          <DaylightCard />
          <WindCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DetailTab;
