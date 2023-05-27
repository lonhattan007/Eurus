import Card from '@components/Card/Card';
import DailyForecastChart from '@components/DailyForecastChart';

const DailyForecastTab = () => {
  return (
    <div className='flex flex-row row'>
      <div className='flex flex-col col'>
        <Card className='flex my-8 bg-white text-dark'>
          <div>
            <DailyForecastChart />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DailyForecastTab;
