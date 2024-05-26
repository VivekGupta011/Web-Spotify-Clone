import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";
import "./sidePlayer.scss";
import SoundIcon from "../../utils/musicSvg/Sound";
import PauseIcon from "../../utils/musicSvg/pause";
import ThreeDotIcon from "../../utils/musicSvg/ThreeDot";

const SidePlayer = () => {
  const {
    track,
    playStatus,
    play,
    pause,
    previous,
    next,
    seekBar,
    seekBg,
    seekSong,
    time,
    updateLikedSongs,
    likedSongs,
  } = useContext(PlayerContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLikeSong = () => {
    let updatedLikedSongs = [...likedSongs];
    if (likedSongs.includes(track.id)) {
      updatedLikedSongs = updatedLikedSongs.filter(songId => songId !== track.id);
    } else {
      updatedLikedSongs.push(track.id);
    }
    updateLikedSongs(updatedLikedSongs);
    setShowDropdown(false);
  };

  return (
    <div className="player-container">
      <div className="track-info flex flex-col">
        <div className="track-details py-1">
          <p className="track-name text-left">{track.name}</p>
        </div>
        <div className="track-details py-1 pb-3">
          <p className="track-description text-left">{track.creator}</p>
        </div>
        <div className="track-image">
          <img className="track-image" src={track.image} alt={track.name} />
        </div>
      </div>
      <div className="seek-bar-container">
        <p className="time">
          {time.currentTime.minute}:{time.currentTime.second}
        </p>
        <div className="seek-bg" onClick={seekSong} ref={seekBg}>
          <hr className="seek-bar" ref={seekBar} />
        </div>
        <p className="time">
          {time.totalTime.minute}:{time.totalTime.second}
        </p>
      </div>
      <div className="controls">
        <div style={{ cursor: "pointer", position: "relative" }} onClick={() => setShowDropdown(!showDropdown)}>
          <ThreeDotIcon />
          {showDropdown && (
            <div className="dropdown-menu">
              <div onClick={handleLikeSong} className="text-black">
                {likedSongs.includes(track.id) ? "Unlike" : "Like"}
              </div>
            </div>
          )}
        </div>
        <div className="control-icons">
          <img src={assets.prev_icon} alt="Previous" onClick={previous} />
          {playStatus ? (
            <img src={assets.pause_icon} alt="Pause" onClick={pause} />
          ) : (
            <img src={assets.play_icon} alt="Play" onClick={play} />
          )}
          <img src={assets.next_icon} alt="Next" onClick={next} />
        </div>
        <div>
          <SoundIcon />
        </div>
      </div>
    </div>
  );
};

export default SidePlayer;
