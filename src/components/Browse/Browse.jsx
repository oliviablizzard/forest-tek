import React from 'react';
import './Browse.scss';

const Browse = () => {
  const categories = [
    {
      title: 'Organizations',
      href: '/organizations',
      svg: <svg>{/* Your SVG for organizations */}</svg>, // Replace with your SVG or icon for organizations
    },
    {
      title: 'Programs',
      href: '/programs',
      svg: <svg>{/* Your SVG for programs */}</svg>, // Replace with your SVG or icon for programs
    },
    {
      title: 'Tools',
      href: '/tools',
      svg: <svg>{/* Your SVG for tools */}</svg>, // Replace with your SVG or icon for tools
    },
  ];

  return (
    <section className="browse" data-testid="browse">
      <div className="browse__grid">
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
      </div>
      <button className="browse__button">Restart Demo</button>
    </section>
  );
};

export default Browse;