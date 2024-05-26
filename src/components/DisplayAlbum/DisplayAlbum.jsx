import React, { useContext, useState } from "react";
import { albumsData, assets, songsData } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";
import DisplayNav from "../DisplayNav/DisplayNav";
import "./displayAlbum.scss";
import SearchIcon from "../../utils/musicSvg/Search";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);
  const albumData = albumsData[id];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <DisplayNav />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">For You</h1>
        <div className="album-info">
          <img className="w-[8rem] py-6" src={albumData.image} alt="" />
        </div>
        {/* Search bar input field */}
        <div className="relative mr-auto w-full max-w-[33rem]">
          <input
            className="w-full bg-white h-12 px-5 pr-12 rounded-lg text-gray-900 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Song, Artists"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-4 text-gray-600"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="album-container px-2">
       
        <div className="song-list mt-4">
          <div className="grid-header"></div>
          {filteredSongs.map((item, index) => (
            <div
              onClick={() => playWithId(item.id)}
              className="song-item flex items-center py-4 cursor-pointer"
              key={index}
            >
              <p className="song-name flex items-center">
                <b className="song-index mr-2">{index + 1}</b>
                <img className="song-image mr-2" src={item.image} alt="" />
                <div className="flex flex-col">
                  <div> {item.name}</div>
                  <div>{item.creator}</div>
                </div>
              </p>
              <p className="song-duration ml-auto">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
