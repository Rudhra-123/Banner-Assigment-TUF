import React, { useState, useEffect } from 'react';

const Banner = ({ description, timer, link, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      onClose();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex justify-between items-center rounded-lg shadow-lg animate-slideIn"
           style={{ width: '80vw', maxWidth: '1200px' }}>
        <div>
          <p className="font-semibold text-lg">{description}</p>
          <a href={link} className="text-yellow-300 underline mt-2 block hover:text-yellow-400 transition-colors duration-300">
            Learn More
          </a>
        </div>
        <div className="text-xl font-bold">
          <span>{timeLeft}s</span>
        </div>
        <button onClick={onClose} className="ml-4 bg-red-600 p-2 rounded hover:bg-red-700 transition-colors duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default Banner;
