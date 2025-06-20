import React, { useState } from "react";
import "./TimeSlider.css";

const STEP_MIN   = 5;            // 5-minute granularity
const DAY_MIN    = 24 * 60;      // 1 440
const MAX_STEPS  = DAY_MIN / STEP_MIN; // 288

export default function TimeSyncSlider() {
  // “position” is the number of 5-minute steps past midnight in SLC
  const [pos, setPos] = useState(0);

  /* helper – return local Date shifted by minutes */
  const tzTime = (baseTz, offsetMinutes) => {
  const now = new Date();
  const d = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,           // Utah offset
    0 + offsetMinutes, // plus offset
    0
  );

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: baseTz
  }).format(d);
};

  const minutes = pos * STEP_MIN;                // 0…1440
  const la      = tzTime("America/Los_Angeles", minutes);
  const slc     = tzTime("America/Denver", minutes);
  const nyc     = tzTime("America/New_York", minutes);
  const hanoi   = tzTime("Asia/Ho_Chi_Minh", minutes);

  return (
    <div className="feature-box slider-box">
      <h2>⏱️ Time Sync Slider</h2>

      {/* prettier slider */}
      <input
        type="range"
        min="0"
        max={MAX_STEPS}
        step="1"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="time-range"
      />

      <ul className="tz-readout">
        <li>🇺🇸 Los Angeles: <span>{la}</span></li>
        <li>🇺🇸 Salt Lake City: <span>{slc}</span></li>
        <li>🇺🇸 New York: <span>{nyc}</span></li>
        {/* <li>🇻🇳 Hanoi: <span>{hanoi}</span></li> */}
      </ul>
    </div>
  );
}