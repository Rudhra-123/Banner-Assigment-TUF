import React, { useState } from 'react';

const Dashboard = ({ bannerContent, setBannerContent, toggleBanner }) => {
  const [description, setDescription] = useState(bannerContent.description);
  const [timer, setTimer] = useState(bannerContent.timer);
  const [link, setLink] = useState(bannerContent.link);
  const [showBanner, setShowBanner] = useState(true);
  const [theme, setTheme] = useState('light'); // Theme state

  // State to manage button click feedback
  const [buttonClicked, setButtonClicked] = useState('');

  const handleUpdate = () => {
    let validatedTimer = Number(timer);
    if (isNaN(validatedTimer)) validatedTimer = 0;
    if (validatedTimer < 0) {
      alert('Timer cannot be negative. Setting timer to 0.');
      validatedTimer = 0;
    } else if (validatedTimer > 60) {
      alert('Timer cannot be more than 60. Setting timer to 60.');
      validatedTimer = 60;
    }

    setBannerContent({ description, timer: validatedTimer, link });
    setButtonClicked('update');
    setTimeout(() => setButtonClicked(''), 200);
  };

  const handleToggle = () => {
    toggleBanner();
    setShowBanner(!showBanner);
    setButtonClicked('toggle');
    setTimeout(() => setButtonClicked(''), 200);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Banner Settings</h2>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ backgroundColor: theme === 'light' ? '#4B5563' : '#F3F4F6', color: theme === 'light' ? '#F3F4F6' : '#4B5563' }}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`mt-1 p-3 border rounded-lg w-full ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-700 text-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter banner description..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Timer (seconds)</label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          className={`mt-1 p-3 border rounded-lg w-full ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-700 text-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter timer in seconds..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={`mt-1 p-3 border rounded-lg w-full ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-700 text-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter banner link..."
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleUpdate}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform duration-200 ${
            buttonClicked === 'update' ? 'bg-blue-700' : 'bg-blue-500'
          } text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          Update
        </button>
        <button
          onClick={handleToggle}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform duration-200 ${
            buttonClicked === 'toggle' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300`}
        >
          {showBanner ? 'Hide Banner' : 'Show Banner'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
