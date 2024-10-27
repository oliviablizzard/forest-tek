import React from 'react';
import './Browse.scss';

const Browse = () => {
  const categories = [
    {
      title: "Events",
      href: "/learn",
      svg: (
        <svg width="40" height="41" fill="none" viewBox="0 0 40 41">
          {/* SVG content here */}
        </svg>
      ),
    },
    {
      title: "Data",
      href: "/learn",
      svg: (
        <svg width="47" height="48" fill="none" viewBox="0 0 47 48">
          {/* SVG content here */}
        </svg>
      ),
    },
    {
      title: "Directory",
      href: "/learn",
      svg: (
        <svg width="47" height="48" fill="none" viewBox="0 0 47 48">
          {/* SVG content here */}
        </svg>
      ),
    },
  ];

  return (
    <section className="icon-category-browse" data-testid="icon-category-browse">
      <div className="icon-category-wrapper">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="icon-category-card"
            data-testid="category-card"
          >
            <div className="icon-category-card__image">
              {category.svg}
            </div>
            <p className="icon-category-card__title">{category.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Browse;
