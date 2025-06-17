import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {
  const targetDate = new Date('2025-06-12T07:30:00'); // Set reunion time

  const calculateTimeLeft = () => {
    const now = new Date();
    console.log('Target Date:', targetDate);
    console.log('Current Date:', new Date());

    const difference = targetDate - now;

    console.log('Difference in ms:', difference);

    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));

    return { months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {!timeLeft ? (
        <h2>Loading countdown…</h2>
      ) : timeLeft.months === 0 &&
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 ? (
        <h2>🎉 We see each other now!! 🎉</h2>
      ) : (
        <h2>
          Only {timeLeft.months} month{timeLeft.months !== 1 && 's'}{' '}
          {timeLeft.days} day{timeLeft.days !== 1 && 's'} {timeLeft.hours} hour
          {timeLeft.hours !== 1 && 's'} {timeLeft.minutes} minute
          {timeLeft.minutes !== 1 && 's'} {timeLeft.seconds} second
          {timeLeft.seconds !== 1 && 's'} until we see each other again.
        </h2>
      )}
    </div>
  );
}

export default CountdownTimer;