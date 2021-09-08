import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import './styles.scss';

const Appbar = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className='Appbar'>
      <section className='Appbar__logo'>
        <Link to='/'>
          <figure>
            <h1 className='color-accent'>Deli-app</h1>
          </figure>
        </Link>
      </section>
      <nav className='Appbar__links'>
        <NavLink
          exact
          to='/'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          Home
        </NavLink>
        <NavLink
          exact
          to='/projects'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          Commerces
        </NavLink>
        <NavLink
          exact
          to='/services'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          Foods
        </NavLink>
        <NavLink
          exact
          to='/company'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          Offer
        </NavLink>
        {/* <NavLink
          exact
          to='/contact'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          Contacto
        </NavLink> */}
      </nav>
      <div className='Appbar__user flex'>
        {openCart && (
          <button
            type='button'
            title='Close cart'
            className='Appbar__cart--close'
            onClick={() => setOpenCart(false)}
          >
            Close
          </button>
        )}
        <button
          type='button'
          className='btn-link-accent'
          onClick={() => setOpenCart(true)}
        >
          <span className='btn-icon'><RiShoppingCartLine /></span>
          <span>Carrito</span>
        </button>
        <Link to='/login' className='btn-outline-accent'>
          <span>Login</span>
        </Link>
        <Link to='/register'>
          <span>Register</span>
          <span className='btn-icon'><HiChevronRight /></span>
        </Link>
      </div>
      {openCart && (
        <div className='Appbar__cart bounceIn'>
          <div className='CardCard--min'>
            <figure className='CardCard__image'>
              <img src='/food-1.jpg' alt='Food' />
            </figure>
            <p className='single-line'>Nombre del producto</p>
            <p><strong>$20 MXN</strong></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Appbar;
