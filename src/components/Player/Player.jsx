import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { PlayerContext } from '../../context/PlayerContext';
import './player.scss'; 

const Player = () => {
  const { track, playStatus, play, pause, previous, next, seekBar, seekBg, seekSong, time } = useContext(PlayerContext);

  return (
    <div className='custom-player-container'>
      <div className='track-info'>
        <img src={track.image} alt={track.name} />
        <div className='track-details'>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='controls'>
        <div className='control-icons'>
          <img src={assets.shuffle_icon} alt="Shuffle" />
          <img src={assets.prev_icon} alt="Previous" onClick={previous} />
          {playStatus ? (
            <img src={assets.pause_icon} alt="Pause" onClick={pause} />
          ) : (
            <img src={assets.play_icon} alt="Play" onClick={play} />
          )}
          <img src={assets.next_icon} alt="Next" onClick={next} />
          <img src={assets.loop_icon} alt="Loop" />
        </div>
        <div className='seek-bar-container'>
          <p className='time'>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div className='seek-bg' onClick={seekSong} ref={seekBg}>
            <hr className='seek-bar' ref={seekBar} />
          </div>
          <p className='time'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='additional-controls'>
        <img src={assets.plays_icon} alt="Plays" />
        <img src={assets.mic_icon} alt="Mic" />
        <img src={assets.queue_icon} alt="Queue" />
        <img src={assets.speaker_icon} alt="Speaker" />
        <img src={assets.volume_icon} alt="Volume" />
        <div className='volume-control'>
          <hr />
        </div>
        <img src={assets.mini_player_icon} alt="Mini Player" />
        <img src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
