import React from "react";
import { assets } from "../../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current URL matches the specified route
  const isAlbumRoute = location.pathname.startsWith("/album");
  

  return (
    <div className="sidebar">
      <div className="bg-dark">
        <div onClick={() => navigate("/")} className="nav-logo">
          <img
            className="nav-icon"
            src={assets.spotify_white_logo}
            alt="Spotify Logo"
          />
          <p className="nav-text">Spotify</p>
        </div>
        <div className="nav-item" onClick={()=>{navigate("/album/0")}}>
          <p className="nav-text" >For You</p>
        </div>
        <div className="nav-item" onClick={() => navigate("/")}>
          <p className="nav-text" >Top Tracks</p>
        </div>
        <div className="nav-item" onClick={()=>{navigate("/album/favourite")}}>
          <p className="nav-text">Favourite </p>
        </div>
        <div className="nav-item">
          <p className="nav-text">Recently Played</p>
        </div>
      </div>

      {!isAlbumRoute && (
        <div className="bg-secondary">
          <div className="library-header">
            <div className="library-info">
              <img
                className="library-icon"
                src={assets.stack_icon}
                alt="Library"
              />
              <p className="library-text">Your Library</p>
            </div>
            <div className="library-actions">
              <img className="action-icon" src={assets.plus_icon} alt="Plus" />
              <img
                className="action-icon"
                src={assets.arrow_icon}
                alt="Arrow"
              />
            </div>
          </div>
          <div className="playlist">
            <h1>Create your custom playlist</h1>
            <p>Personalize your music experience</p>
            <button className="btn btn-primary btn-square">
              Create playlist
            </button>
          </div>
          <div className="podcast">
            <h1>Discover new podcasts</h1>
            <p>Explore a world of captivating stories</p>
            <button className="btn btn-secondary btn-square">
              Explore podcasts
            </button>
          </div>
        </div>
      )}

        <div className="px-6 py-3 cursor-pointer">
          <img className="profile-icon" src={assets.profileImg} alt="Profile" />
        </div>
    </div>
  );
};

export default Sidebar;
