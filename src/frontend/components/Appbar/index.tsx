import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { IoLogInOutline, IoFastFoodOutline } from 'react-icons/io5';
import './styles.scss';
import Modal from '../Modal';
import TextField from '../form/TextField';

const Appbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [register, setRegister] = useState(false);
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
          <span className='btn-icon'><AiOutlineHome /></span>
          <span>Home</span>
        </NavLink>
        <NavLink
          exact
          to='/projects'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          <span className='btn-icon'><AiOutlineShop /></span>
          <span>Commerces</span>
        </NavLink>
        <NavLink
          exact
          to='/services'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          <span className='btn-icon'><IoFastFoodOutline /></span>
          <span>Foods</span>
        </NavLink>
        <NavLink
          exact
          to='/company'
          activeClassName='active'
          className='btn-link-gray-700'
        >
          <span className='btn-icon'><HiOutlineLightBulb /></span>
          <span>Offer</span>
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
        <button
          type='button'
          title='Entrar'
          className='Appbar__user--enter'
          onClick={() => setOpenModal(true)}
        >
          <span>Entrar</span>
          <span className='btn-icon'><IoLogInOutline /></span>
        </button>
      </div>
      {openCart && (
        <div className='Appbar__cart bounceInRight'>
          <div className='Appbar__cart--header flex items-center justify-between'>
            <div className='flex items-center'>
              <button
                type='button'
                className='btn-link-gray'
                onClick={() => setOpenCart(false)}
              >
                <FaTimes />
              </button>
              <p><strong>Carrito (3)</strong></p>
            </div>
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
      <Modal
        title='¡Bienvenido a Deli-app!'
        show={openModal}
        onClose={setOpenModal}
      >
        <>
          {!register && (
            <form className='Appbar__modal gap-20'>
              <p><strong>Iniciar sesión</strong></p>
              <TextField
                id='Email'
                name='email'
                type='email'
                label='Correo'
                placeholder='Digita tu correo electronico'
                register={() => {}}
              />
              <TextField
                id='Password'
                name='password'
                type='password'
                label='Contraseña'
                placeholder='Digita tu contraseña'
                register={() => {}}
              />
              <button
                type='submit'
                className='btn-primary form-button'
              >
                Iniciar sesión
              </button>
              <button
                type='button'
                onClick={() => setRegister(true)}
                className='btn-link-tertiary form-button'
              >
                ¿No tienes cuenta?
              </button>
            </form>
          )}
          {register && (
            <form className='Appbar__modal register gap-10'>
              <p><strong>Registrate</strong></p>
              <TextField
                id='Name'
                name='name'
                label='Nombre'
                placeholder='Digita tu nombre'
                register={() => {}}
              />
              <TextField
                id='Lastname'
                name='lastname'
                label='Apellidos'
                placeholder='Digita tu apellidos'
                register={() => {}}
              />
              <TextField
                id='Email'
                name='email'
                type='email'
                label='Correo'
                placeholder='Digita tu correo electronico'
                register={() => {}}
              />
              <TextField
                type='number'
                id='Telephone'
                name='telephone'
                label='Número telefonico'
                placeholder='55 1234-5678'
                register={() => {}}
              />
              <TextField
                id='Password'
                name='password'
                type='password'
                label='Contraseña'
                placeholder='Digita tu contraseña'
                register={() => {}}
              />
              <button
                type='submit'
                className='btn-primary form-button'
              >
                Registrate
              </button>
              <button
                type='button'
                onClick={() => setRegister(false)}
                className='btn-link-tertiary form-button'
              >
                ¿Ya tienes cuenta?
              </button>
            </form>
          )}
        </>
      </Modal>
    </header>
  );
};

export default Appbar;
