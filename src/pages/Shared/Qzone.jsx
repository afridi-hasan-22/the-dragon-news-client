import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
const Qzone = () => {
  return (
    <div className='w-full bg-[#F3F3F3] p-3'>
      <h4 className='text-2xl'>Qzone</h4>
      <div className='flex flex-col'>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;