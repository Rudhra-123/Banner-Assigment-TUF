import React, { useState } from 'react';

const Dashboard = ({ bannerContent, setBannerContent, toggleBanner }) => {
  const [description, setDescription] = useState(bannerContent.description);
  const [timer, setTimer] = useState(bannerContent.timer);
  const [link, setLink] = useState(bannerContent.link);



  // State to manage button click feedback
  const [buttonClicked, setButtonClicked] = useState('');

  const handleUpdate = () => {
    // Update the banner content in the parent component and the backend
    setBannerContent({ description, timer, link });
    setButtonClicked('update');
    setTimeout(() => setButtonClicked(''), 200); // Reset button feedback after 200ms
  };

  const handleToggle = () => {
    toggleBanner();
    setButtonClicked('toggle');
    setTimeout(() => setButtonClicked(''), 200); // Reset button feedback after 200ms
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Banner Settings</h2>     
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Timer (seconds)</label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleUpdate}
          className={`px-4 py-2 rounded ${buttonClicked === 'update' ? 'bg-blue-700' : 'bg-blue-500'} text-white transition-colors duration-200`}
        >
          Update
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded ${buttonClicked === 'toggle' ? 'bg-red-700' : 'bg-red-500'} text-white transition-colors duration-200`}
        >
          Toggle Banner
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
