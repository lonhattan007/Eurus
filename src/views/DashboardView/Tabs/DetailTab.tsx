import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
  HeatCard,
  DaylightCard,
  RainCard,
  WindCard,
  VisibilityCard,
} from '../InfoCards';

const DetailTab = () => {
  return (
    <MDBContainer>
      <MDBRow className='flex-row-reverse items-stretch'>
        <MDBCol className=' justify-stretch'>
          <HeatCard />
          <DaylightCard />
        </MDBCol>
        <MDBCol className='justify-stretch'>
          <RainCard />
          <WindCard />
          <VisibilityCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export { DetailTab };
