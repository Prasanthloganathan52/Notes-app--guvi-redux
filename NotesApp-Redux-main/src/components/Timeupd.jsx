import React, { useState, useEffect } from 'react';

function TimeElapsedCounter() {
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const endTime = Date.now();
        const timeElapsedSeconds = Math.floor((endTime - startTime) / 1000);
        setTimeElapsed(timeElapsedSeconds);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  const formatTime = (timeInSeconds) => {
    if (timeInSeconds < 60) {
      return `${timeInSeconds} seconds`;
    } else if (timeInSeconds < 3600) {
      const minutes = Math.floor(timeInSeconds / 60);
      return `${minutes} minutes`;
    } else if (timeInSeconds < 86400) {
      const hours = Math.floor(timeInSeconds / 3600);
      return `${hours} hours`;
    } else if (timeInSeconds < 604800) {
      const days = Math.floor(timeInSeconds / 86400);
      return `${days} days`;
    } else if (timeInSeconds < 2419200) {
      const weeks = Math.floor(timeInSeconds / 604800);
      return `${weeks} weeks`;
    } else if (timeInSeconds < 31560000) {
      const months = Math.floor(timeInSeconds / 2419200);
      return `${months} months`;
    } else {
      const year = Math.floor(timeInSeconds / 31560000);
      return `${year} year`;
    }
  };

  const startTimer = () => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  return (
    <div>
      {startTimer()}
      <p>{formatTime(timeElapsed)} ago</p>
    </div>
  );
}

export default TimeElapsedCounter;
