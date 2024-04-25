import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
  const news = useLoaderData();
  const {
    title,
    details,
    _id,
    author,
    rating,
    image_url,
    total_view,
    category_id,
  } = news;
  return (
    <div>
      <div className='card  bg-base-100 shadow-xl'>
        <figure>
          <img src={image_url} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{details}</p>
          <div className='card-actions justify-start'>
            <Link to={`/categorie/${category_id}`}>
              <button className='btn bg-red-700 text-white'>
                All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
