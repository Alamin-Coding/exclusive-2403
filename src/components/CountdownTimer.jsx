import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Static target date - change this to your desired date
  const targetDate = '2025-12-31T23:59:59'; // Change this date as needed
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className='flex justify-between max-w-[302px] gap-4'>
        <div>
            <strong className='font-bold'>Day's</strong>
            <p>{formatNumber(timeLeft.days)}</p>
        </div>
            <span className='text-primary text-2xl'>:</span>
        <div>
            <strong>Hours</strong>
            <p>{formatNumber(timeLeft.hours)}</p>
        </div>
        <span className='text-primary text-2xl'>:</span>
        <div>
            <strong>Minutes</strong>
            <p>{formatNumber(timeLeft.minutes)}</p>
        </div>
        <span className='text-primary text-2xl'>:</span>
        <div>
            <strong>Seconds</strong>
            <p>{formatNumber(timeLeft.seconds)}</p>
        </div>
    </div>
  );
};

export default CountdownTimer;