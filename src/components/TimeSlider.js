// src/components/TimeSlider.js
import React, { useState } from 'react';
import './TimeSlider.css';

const TimeSlider = () => {
  const [hour, setHour] = useState(0);

  const vietnamTime = hour;
  const utahTime = (hour - 13 + 24) % 24; // Vietnam is UTC+7, Utah is UTC-6 (13 hour diff)

  const formatTime = (h) => {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return `${hour12} ${ampm}`;
  };

  const handleChange = (e) => setHour(parseInt(e.target.value));

  return (
    <div className="slider-container">
      <h2>🕒 Time Sync Slider</h2>
      <input
        type="range"
        min="0"
        max="23"
        value={hour}
        onChange={handleChange}
        className="slider"
      />
      <div className="time-row">
        <div className="flag">🇻🇳 Hanoi:</div>
        <div className="time">{formatTime(vietnamTime)}</div>
      </div>
      <div className="time-row">
        <div className="flag">🇺🇸 Salt Lake City:</div>
        <div className="time">{formatTime(utahTime)}</div>
      </div>
    </div>
  );
};

export default TimeSlider;