import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './displayNav.scss';  

const DisplayNav = () => {
  const navigate = useNavigate();

  return (
    <div className="display-nav">
      <div className="nav-top">
        <div className="nav-buttons">
          <img onClick={() => navigate(-1)} className="nav-arrow" src={assets.arrow_left} alt="Go Back" />
          <img onClick={() => navigate(1)} className="nav-arrow" src={assets.arrow_right} alt="Go Forward" />
        </div>
        <div className="nav-options">
          <p className="explore-premium">Explore Premium</p>
          <p className="install-app">Install App</p>
          <p className="profile">D</p>
        </div>
      </div>
      <div className="nav-bottom">
        <p className="nav-item active">All</p>
        <p className="nav-item">Music</p>
        <p className="nav-item">Podcasts</p>
      </div>
    </div>
  );
};

export default DisplayNav;
