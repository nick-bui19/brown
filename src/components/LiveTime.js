import React, { useEffect, useState } from 'react';
import './LiveTime.css';

function LiveTime() {
  const [nickTime, setNickTime] = useState('');
  const [tinaTime, setTinaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const nickOptions = {
        timeZone: 'America/Los_Angeles', //Asia/Ho_Chi_Minh
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const tinaOptions = {
        timeZone: 'America/New_York', // America/Denver 
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const nickFormatted = now.toLocaleTimeString('en-US', nickOptions);
      const tinaFormatted = now.toLocaleTimeString('en-US', tinaOptions);

      setNickTime(nickFormatted);
      setTinaTime(tinaFormatted);
    };

    updateTime(); // set initial time immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="live-time">
      <h2>
        It’s {nickTime} where I am and it’s {tinaTime} where you are right now.
      </h2>
    </div>
  );
}

export default LiveTime;