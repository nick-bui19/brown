// src/components/CountdownTimer.js

import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +new Date(targetDate) - +now;

    if (difference <= 0) return null;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { months, days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000 * 10);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <h2 className="countdown-title">You're together now 💖</h2>;
  }

  return (
    <h2 className="countdown-title">
      Hi bb, only {timeLeft.months} month{timeLeft.months !== 1 && 's'} {timeLeft.days} day{timeLeft.days !== 1 && 's'} {timeLeft.hours} hour{timeLeft.hours !== 1 && 's'} {timeLeft.minutes} minute{timeLeft.minutes !== 1 && 's'} until we see each other again.
    </h2>
  );
};

export default CountdownTimer;