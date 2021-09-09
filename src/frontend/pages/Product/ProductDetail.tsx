import React from 'react';
import useCounterProducts from '../../hooks/useCousterProducts';
import './ProductDetail.scss';

const ProductDetail = () => {

  const { counter, increment, decrement } = useCounterProducts();

  return (
    <div className='ProductDetail'>
      <div className='ProductDetail__figure'>
        <figure className='ProductDetail__figure'>
          <img src='/smoothie.jpg' alt='Product' />
        </figure>
      </div>
      <div className='ProductDetail__Stats'>
        <p className='ProductDetail__Stats--Name'>Nombre del producto</p>
        <p className='ProductDetail__Stats--Local'>Local</p>
        <span className='ProductDetail__Stats--Calif'>Calificacion</span>
        <p className='ProductDetail__Stats--Rec'>
          Recomendación:
        </p>
        <span className='ProductDetail__Stats--Recom'>Smooth but would add more strawberries</span>
        <div className='ProductDetail__interactive'>
          <button type='button' className='ProductDetail__AgregarCarrito'>Agregar Carrito</button>
          <p className='ProductDetail__interactive--cuantity'>
            Cantidad:
            {counter}
          </p>
          <button type='button' className='ProductDetail__btns--add' onClick={() => increment()}>+</button>
          <button type='button' disabled={counter <= 1} className='ProductDetail__btns--rest' onClick={() => decrement()}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
