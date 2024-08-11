import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import Logo from './components/Logo';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerContent, setBannerContent] = useState({
    description: '',
    timer: 0,
    link: '',
  });

  useEffect(() => {
    // Fetch the banner content from the backend on component mount
    axios.get('http://localhost:5000/banner')
      .then((response) => {
        setBannerContent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching banner content:', error);
      });
  }, []);

  const updateBanner = (content) => {
    // Update the banner content locally and in the database
    setBannerContent(content);
    axios.post('http://localhost:5000/banner', content)
      .catch((error) => {
        console.error('Error updating banner content:', error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Logo />

      {bannerVisible && (
        <Banner
          description={bannerContent.description}
          timer={bannerContent.timer}
          link={bannerContent.link}
          onClose={() => setBannerVisible(false)}
        />
      )}

      <div className={`relative w-full ${bannerVisible ? 'blur-sm' : ''}`}>
        <Dashboard
          bannerContent={bannerContent}
          setBannerContent={updateBanner}
          toggleBanner={() => setBannerVisible((prev) => !prev)}
        />
      </div>

      <footer className="mt-8 text-gray-600">
        Made by Rudhra Pratap Singh
      </footer>
    </div>
  );
}

export default App;
