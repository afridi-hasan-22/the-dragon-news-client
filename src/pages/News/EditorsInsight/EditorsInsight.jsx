import React from 'react';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
const EditorsInsight = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-3 py-6'>
      <div className='card  bg-base-100 shadow-xl'>
        <figure>
          <img
            src={first}
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='card  bg-base-100 shadow-xl'>
        <figure>
          <img
            src={second}
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='card  bg-base-100 shadow-xl'>
        <figure>
          <img
            src={third}
            alt='Shoes'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsInsight;
