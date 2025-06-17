import React, { useEffect, useState } from 'react';
import './LiveTime.css';

function LiveTime() {
  const [vnTime, setVnTime] = useState('');
  const [utahTime, setUtahTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const vnOptions = {
        timeZone: 'America/Los_Angeles', //Asia/Ho_Chi_Minh
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const utahOptions = {
        timeZone: 'America/Denver', // America/Denver Salt Lake City uses this
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const vnFormatted = now.toLocaleTimeString('en-US', vnOptions);
      const utahFormatted = now.toLocaleTimeString('en-US', utahOptions);

      setVnTime(vnFormatted);
      setUtahTime(utahFormatted);
    };

    updateTime(); // set initial time immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="live-time">
      <h2>
        It’s {vnTime} where I am and it’s {utahTime} where you are right now.
      </h2>
    </div>
  );
}

export default LiveTime;