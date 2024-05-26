import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
import Display from "./components/Display/Display";
import { PlayerContext } from "./context/PlayerContext";
import SidePlayer from "./components/SidePlayer/SidePlayer";
import "./app.scss";

const App = () => {
  const { audioRef, track, backgroundColor } = useContext(PlayerContext);
  const location = useLocation();
  const isAlbumRoute = location.pathname.startsWith("/album/");
  const albumRouteWithBackground = isAlbumRoute;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`app-container ${isAlbumRoute ? "album-route" : ""}`}>
     <div className="main-content" style={{ background: albumRouteWithBackground ? `linear-gradient(rgba(0, 0, 0, 0.5), ${backgroundColor}, #121212)` : "" }}>
        <Sidebar />
        <Display />
        {isAlbumRoute && !isMobile && <SidePlayer />}
      </div>
      <audio ref={audioRef} preload="auto" src={track.file}></audio>
      {!isAlbumRoute && <Player />}
      {isAlbumRoute && isMobile && <Player />}
    </div>
  );
};

export default App;
