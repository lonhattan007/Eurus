import { FC, useEffect, useState } from 'react';

const Greetings: FC<{
  className: string;
}> = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Side effect function to keep time updated
  useEffect(() => {
    // Interval range till the next minute, in milliseconds
    const intervalRange = (60 - currentTime.getSeconds()) * 1000;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, intervalRange);

    // Clean up function, needed to avoid memory leak
    return () => clearInterval(interval);
  });

  // Generate greetings based on time in a day
  const greeting = (): string => {
    const hour = currentTime.getHours();

    if (hour < 12) return 'Good Morning!';
    else if (hour < 18) return 'Good Afternoon!';
    else if (hour < 22) return 'Good Evening!';
    else return 'Good Night!';
  };

  return (
    <div className={`flex m-3 p-3 flex-col ${props.className}`}>
      <p className='font-bold text-[40px] text-primary'>
        {currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <p className='my-1 text-dark'>
        {currentTime.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p className='font-semibold text-[20px] text-primary'>{greeting()}</p>
    </div>
  );
};

export default Greetings;
