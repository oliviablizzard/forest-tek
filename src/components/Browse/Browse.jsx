import React, { useEffect, useState } from 'react';
import './Browse.scss';
import axios from 'axios';

const Browse = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="browse" data-testid="browse">
      {categories.map((category, index) => (
        <a
          key={index}
          href={category.href}
          className="browse__card"
          data-testid="category-card"
        >
          {category.svg && <div className="browse__icon">{category.svg}</div>}
          <p className="browse__title">{category.title}</p>
        </a>
      ))}
    </section>
  );
};

export default Browse;