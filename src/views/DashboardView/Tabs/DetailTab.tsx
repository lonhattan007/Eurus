import { useAppSelector } from '@hooks/customReduxHooks';
import {
  TemperatureCard,
  DaylightCard,
  RainCard,
  WindCard,
} from '../InfoCards';

import Greetings from '@components/Greetings';

const DetailTab = () => {
	const currentWeather = useAppSelector((state) => state.currentWeather.value);


  return (
    <>
      <Greetings className='hidden items-start md:flex' />
			<code>{`${JSON.stringify(currentWeather)}`}</code>
			{/*
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
      </div>*/}
    </>
  );
};

export default DetailTab;
