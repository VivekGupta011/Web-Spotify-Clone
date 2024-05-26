import React, { useEffect, useRef,useContext} from "react";
import DisplayHome from "../DisplayHome/DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "../DisplayAlbum/DisplayAlbum";
import { albumsData } from "../../assets/assets";
import "./display.scss";
import { PlayerContext } from "../../context/PlayerContext";
import DisplayFavAlbum from "../DisplayFavouriteAlbum/DisplayFavAlbum";

const Display = () => {
  const { setBackgroundColor } = useContext(PlayerContext);
  const displayRef = useRef();
  const location = useLocation();
  let isAlbum = location.pathname.includes("album");
  let albumId = isAlbum ? location.pathname.slice(-1) : "";
  let bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    setBackgroundColor(bgColor);
  }, [bgColor, setBackgroundColor]);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className={`display-container ${isAlbum ? "album-view" : "home-view"}`}
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/album/favourite" element={<DisplayFavAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
