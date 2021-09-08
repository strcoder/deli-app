import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__head'>
        <h1>Foody+</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quidem dolores quas voluptate, modi et! Perspiciatis quos illum ut saepe nulla nihil doloribus quae magnam, beatae, placeat ex blanditiis atque.</p>
        <nav>
          <Link to='/social-media/facebook' title='Facebook' className='btn-link-facebook'>
            <FaFacebookF />
          </Link>
          <Link to='/social-media/facebook' title='Intagram' className='btn-link-instagram'>
            <FaInstagram />
          </Link>
          <Link to='/social-media/facebook' title='Twiiter' className='btn-link-twitter'>
            <FaTwitter />
          </Link>
          <Link to='/social-media/facebook' title='Linkedin' className='btn-link-linkedin'>
            <FaLinkedinIn />
          </Link>
        </nav>
      </div>
      <div className='Footer__container'>
        <nav className='Footer__container--links'>
          <p><strong>Recetas</strong></p>
          <Link to='/'>Desayunos</Link>
          <Link to='/'>Comidas</Link>
          <Link to='/'>Cenas</Link>
          <Link to='/'>Fastfood</Link>
        </nav>
        <nav className='Footer__container--links'>
          <p><strong>Services</strong></p>
          <Link to='/'>Recetas</Link>
          <Link to='/'>Delivery</Link>
          <Link to='/'>Calendario</Link>
          <Link to='/'>Salud</Link>
        </nav>
        <nav className='Footer__container--links'>
          <p><strong>Company</strong></p>
          <Link to='/'>Jobs</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Partners</Link>
        </nav>
      </div>
      <div className='Footer__copy'>
        <p>&reg;Foody+</p>
        <Link to='/'>Privacy & Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
