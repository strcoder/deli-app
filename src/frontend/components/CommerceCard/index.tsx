import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.scss';

const CommerceCard = ({ image, favorite }) => {

  return (
    <Link to='/commerce/id' className='CommerceCard'>
      <figure className='CommerceCard__header'>
        <img
          src={image}
          alt='Commerce example'
        />
        <span>
          {!favorite && <AiOutlineHeart />}
          {favorite && <AiFillHeart />}
        </span>
      </figure>
      <div className='CommerceCard__body'>
        <p><strong>Commerce name</strong></p>
        <p>
          <span><HiOutlineLocationMarker /></span>
          <span>Commerce address</span>
        </p>
      </div>
    </Link>
  );
};

export default CommerceCard;
