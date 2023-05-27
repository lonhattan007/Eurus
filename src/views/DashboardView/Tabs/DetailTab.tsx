import {
  TemperatureCard,
  DaylightCard,
  RainCard,
  WindCard,
} from '../InfoCards';

const DetailTab = () => {
  return (
    <div className='flex p-0'>
      <div className='flex flex-row-reverse items-stretch'>
        <div className='flex flex-col h-[60vh] justify-stretch'>
          <TemperatureCard />
          <RainCard />
        </div>
        <div className='flex flex-col h-[60vh] justify-stretch'>
          <DaylightCard />
          <WindCard />
        </div>
      </div>
    </div>
  );
};

export default DetailTab;
