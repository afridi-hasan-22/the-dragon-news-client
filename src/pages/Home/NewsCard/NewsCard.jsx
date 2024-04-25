import React from 'react';
import { CiSaveDown2, CiShare2 } from 'react-icons/ci';
import { AiFillEye, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
  const { title, details, _id, author, rating, image_url, total_view } = news;
  return (
    <div className='w-full border mb-3'>
      <div className='flex flex-col space-y-5 p-3'>
        <div className='flex justify-between items-center bg-[#F3F3F3] p-3 rounded-lg'>
          <div className='flex space-x-4 items-center'>
            <img className='w-[40px] rounded-full' src={author.img} alt='' />
            <div className=''>
              <p className='text-sm font-bold'>{author.name}</p>
              <p className='text-sm'>
                {moment(author?.published_date).format('yyyy-mm-d')}
              </p>
            </div>
          </div>
          <div className='flex space-x-2'>
            <CiSaveDown2 className='text-[25px]'></CiSaveDown2>
            <CiShare2 className='text-[25px]'></CiShare2>
          </div>
        </div>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <img className='w-[518px] self-center' src={image_url} alt='' />
        <p>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}</>}
          ...
          <Link to={`/news/${_id}`} className='text-[#FF8C47]'>
            Read More
          </Link>
        </p>
        <hr />
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<img src={<AiOutlineStar></AiOutlineStar>} />}
              readonly
              placeholderSymbol={
                <img
                  src={<AiFillStar></AiFillStar>}
                  className='text-yellow-400'
                />
              }
              fullSymbol={
                <img src={<AiFillStar></AiFillStar>} className='icon' />
              }
            ></Rating>
            <p>{rating.number}</p>
          </div>
          <div className='flex space-x-2 items-center'>
            <AiFillEye></AiFillEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
