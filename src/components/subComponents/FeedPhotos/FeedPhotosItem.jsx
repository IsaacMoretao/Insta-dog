import './Stylle.scss';
import React from 'react';
import { Eye } from 'phosphor-react';
import { Image } from './../../Helper/Image/Index';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className='FeedPhotosItem' onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className='span'><Eye size={20} color="#f2f2f2" weight="bold" />{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
