import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import RightNav from '../pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className='my-container mb-6'>
        <div className='grid grid-cols-12 gap-6'>
         
          <div className='col-span-12 lg:col-span-9 '>
            <Outlet></Outlet>
          </div>
          <div className='col-span-12 lg:col-span-3 '>
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
