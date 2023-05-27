import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { WindCard } from './WindCard';
import { RainCard } from './RainCard';
import { VisibilityCard } from './VisibilityCard';
import { DaylightCard } from './DaylightCard';
import { HeatCard } from './HeatCard';

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
