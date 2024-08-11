import React, { useState, useEffect } from 'react';

const Banner = ({ description, timer, link, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);

    if (timeLeft === 0) {
      onClose();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft, onClose]);

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div>
        <p>{description}</p>
        <a href={link} className="text-yellow-300 underline">Learn More</a>
      </div>
      <div>
        <span>{timeLeft}s</span>
      </div>
    </div>
  );
};

export default Banner;
