import Card from '@components/Card/Card';
import HourlyForecastChart from '@components/HourlyForecastChart/HourlyForecastChart';

const HourlyForecastTab = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <Card className='flex my-8 bg-white text-dark'>
          <div>
            <HourlyForecastChart />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HourlyForecastTab;
