'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm border border-black rounded-icon px-3 py-2">
      <span>{time}</span>
      <span className="ml-1 text-muted">[IST]</span>
    </div>
  );
}
