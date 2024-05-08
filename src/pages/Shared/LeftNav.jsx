import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      'https://the-dragon-news-server-ofsy.vercel.app/categories'
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className='text-2xl'>All Categories</h2>
      <div className='p-5 flex flex-col space-y-3'>
        {categories.map((categorie) => (
          <p
            key={categorie.id}
            className='text-xl hover:text-red-500 transition duration-200'
          >
            <Link to={`/categorie/${categorie.id}`}>{categorie.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
