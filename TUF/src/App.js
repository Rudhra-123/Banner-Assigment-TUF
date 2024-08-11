import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import Logo from './components/Logo';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerContent, setBannerContent] = useState({
    description: '',
    timer: 0,
    link: '',
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch the banner content from the backend on component mount
      axios.get('http://localhost:5000/banner', { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          setBannerContent(response.data);
        })
        .catch((error) => {
          console.error('Error fetching banner content:', error);
        });
    }
  }, [user]);

  const updateBanner = (content) => {
    // Update the banner content locally and in the database
    setBannerContent(content);
    axios.post('http://localhost:5000/banner', content, { headers: { Authorization: `Bearer ${user.token}` } })
      .catch((error) => {
        console.error('Error updating banner content:', error);
      });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Logo />

        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginForm onLogin={(userData) => setUser(userData)} />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterForm onRegister={(userData) => setUser(userData)} />} />
          <Route path="/" element={user ? (
            <>
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
            </>
          ) : (
            <Navigate to="/login" />
          )} />
        </Routes>

        <footer className="mt-8 text-gray-600">
          Made by Rudhra Pratap Singh
        </footer>
      </div>
    </Router>
  );
}

export default App;
