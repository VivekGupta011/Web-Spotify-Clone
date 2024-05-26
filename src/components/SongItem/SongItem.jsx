import React, { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import './songItem.scss';  

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className='song-item'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <p className='desc'>{desc}</p>
    </div>
  );
};

export default SongItem;
