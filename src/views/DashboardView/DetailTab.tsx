import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
  HeatCard,
  DaylightCard,
  RainCard,
  WindCard,
  VisibilityCard,
} from './InfoCards';

const DetailTab = () => {
  return (
    <MDBContainer>
      <MDBRow className='flex-row-reverse'>
        <MDBCol className='justify-between'>
          <HeatCard />
          <DaylightCard />
        </MDBCol>
        <MDBCol className='justify-between'>
          <RainCard />
          <WindCard />
          <VisibilityCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export { DetailTab };
