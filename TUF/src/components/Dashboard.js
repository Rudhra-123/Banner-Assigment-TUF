import React, { useState } from 'react';

const Dashboard = ({ bannerContent, setBannerContent, toggleBanner }) => {
  const [description, setDescription] = useState(bannerContent.description);
  const [timer, setTimer] = useState(bannerContent.timer);
  const [link, setLink] = useState(bannerContent.link);

  const handleUpdate = () => {
    setBannerContent({ description, timer, link });
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
        <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        <button onClick={toggleBanner} className="bg-red-500 text-white px-4 py-2 rounded">Toggle Banner</button>
      </div>
    </div>
  );
};

export default Dashboard;
