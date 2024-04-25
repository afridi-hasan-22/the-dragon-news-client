import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import LeftNav from '../pages/Shared/LeftNav';
import RightNav from '../pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <div className='my-container mb-6'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-3 '><LeftNav></LeftNav></div>
        <div className='col-span-12 lg:col-span-6 '><Outlet></Outlet></div>
        <div className='col-span-12 lg:col-span-3 '><RightNav></RightNav></div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;