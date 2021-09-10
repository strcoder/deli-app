import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { HiChevronRight } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import './styles.scss';

const Appbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [count, setCount] = useState(1);
  const price = 20;

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
        <div className='Appbar__cart bounceInRight'>
          <div className='Appbar__cart--header flex items-center justify-between'>
            <p><strong>Carrito (3)</strong></p>
            <button
              type='button'
              title='Vaciar carrito'
              className='btn-link-danger'
            >
              <FiTrash />
            </button>
          </div>

          <div className='Appbar__cart--body content-start scroll-auto'>
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className='CardCard--min'>
                <figure className='CardCard__image'>
                  <img src='/food-1.jpg' alt='Food' />
                </figure>
                <div className='flex items-center justify-between'>
                  <p className='single-line'>Nombre del producto bien grandote</p>
                  <button
                    type='button'
                    title='Eliminar producto'
                    className='btn-link-gray'
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className='flex items-center justify-between'>
                  <p><strong>{`$${price * count} MXN`}</strong></p>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      title='Remover'
                      disabled={count <= 1}
                      className='btn-link-gray'
                      onClick={() => setCount(count - 1)}
                    >
                      <FaMinus />
                    </button>
                    <p>{count}</p>
                    <button
                      type='button'
                      title='Agreagar'
                      className='btn-link-accent'
                      onClick={() => setCount(count + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='Appbar__cart--footer'>
            <Link
              to='/cart'
              onClick={() => setOpenCart(false)}
              className='form-button btn-link-primary'
            >
              Ver carrito
            </Link>
            <Link
              to='/payment'
              onClick={() => setOpenCart(false)}
              className='form-button btn-primary'
            >
              Proceder al pago
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Appbar;
