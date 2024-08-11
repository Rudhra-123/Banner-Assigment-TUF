import React, { useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerContent, setBannerContent] = useState({
    description: 'This is your banner message!',
    timer: 60,
    link: 'https://example.com',
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {bannerVisible && (
        <Banner
          description={bannerContent.description}
          timer={bannerContent.timer}
          link={bannerContent.link}
          onClose={() => setBannerVisible(false)}
        />
      )}
      <Dashboard
        bannerContent={bannerContent}
        setBannerContent={setBannerContent}
        toggleBanner={() => setBannerVisible((prev) => !prev)}
      />
    </div>
  );
}

export default App;
