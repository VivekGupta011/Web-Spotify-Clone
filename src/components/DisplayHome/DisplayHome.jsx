import React from 'react';
import { albumsData, songsData } from '../../assets/assets';
import AlbumItem from '../AlbumItem/AlbumItem';
import SongItem from '../SongItem/SongItem';
import DisplayNav from '../DisplayNav/DisplayNav';
import './displayHome.scss'; 

const DisplayHome = () => {
  return (
    <>
      <DisplayNav />
      <div className='display-home-container'>
        <div className='section'>
          <h1>Featured Charts</h1>
          <div className='item-container'>
            {albumsData.map((item, index) => (
              <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
            ))}
          </div>
        </div>
        <div className='section'>
          <h1>Today's biggest hits</h1>
          <div className='item-container'>
            {songsData.map((item, index) => (
              <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
