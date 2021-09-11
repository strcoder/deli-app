import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoSearchOutline, IoArrowForwardOutline } from 'react-icons/io5';
import CommerceCard from '../../components/CommerceCard';
import TextField from '../../components/form/TextField';
import './styles.scss';

const images = [
  'https://images.pexels.com/photos/7317525/pexels-photo-7317525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1114620/pexels-photo-1114620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/5779365/pexels-photo-5779365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

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

      <main className='Home__featured'>
        <div className='flex justify-between items-center'>
          <p><strong>Negocios destacados</strong></p>
          <button
            type='button'
            className='btn-link-gray txt-lg'
          >
            <HiDotsHorizontal />
          </button>
        </div>
        <div className='Home__featured--list scroll-auto'>
          {[0, 1, 2, 3, 4].map((item) => (
            <React.Fragment key={`Featured-${item}`}>
              <CommerceCard
                image={images[item]}
                favorite={item % 2 === 0}
              />
            </React.Fragment>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Home;

