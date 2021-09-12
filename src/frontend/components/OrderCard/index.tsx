import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const OrderCard = ({ image, status, total }) => {
  const statusType = {
    'active': 'En curso',
    'canceled': 'Cancelado',
    'delivered': 'Entregado',
  };
  return (
    <Link to='/order/id' className='OrderCard'>
      <figure className='OrderCard__image'>
        <img
          alt='OrderCard'
          src={image}
        />
      </figure>
      <div className='OrderCard__body'>
        <p className='single-line'>
          <strong>Nombre del producto (1)</strong>
        </p>
        <p className={`single-line ${status}`}>
          {`Estatus: ${statusType[status]}`}
        </p>
        <p className='single-line'>
          {`Total: $${total} MXN`}
        </p>
      </div>
    </Link>
  );
};

export default OrderCard;
