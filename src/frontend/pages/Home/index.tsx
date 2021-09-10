import React from 'react';
import { IoSearchOutline, IoArrowForwardOutline } from 'react-icons/io5';
import TextField from '../../components/form/TextField';
import './styles.scss';

const Home = () => {

  return (
    <section className='Home'>
      <form className='Home__searcher'>
        <TextField
          id='Searcher'
          name='searcher'
          autoComplete='off'
          placeholder='¿Qué quieres comer hoy?'
          register={() => {}}
        />
        <span
          title='Buscar'
        >
          <IoSearchOutline />
        </span>
        <button
          type='button'
          title='Buscar'
        >
          <IoArrowForwardOutline />
        </button>
      </form>
    </section>
  );
};

export default Home;

