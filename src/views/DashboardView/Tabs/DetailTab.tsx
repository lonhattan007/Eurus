import {
  TemperatureCard,
  DaylightCard,
  RainCard,
  WindCard,
} from '../InfoCards';

const DetailTab = () => {
  return (
    <div className='container p-0'>
      <div className='flex-row-reverse items-stretch row'>
        <div className='col h-[60vh] justify-stretch'>
          <TemperatureCard />
          <RainCard />
        </div>
        <div className='col h-[60vh] justify-stretch'>
          <DaylightCard />
          <WindCard />
        </div>
      </div>
    </div>
  );
};

export default DetailTab;
