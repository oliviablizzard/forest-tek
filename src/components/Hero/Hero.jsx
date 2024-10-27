import React from 'react';
import './Hero.scss';
import hero from '../../assets/images/hero-green.jpg';

const Hero = () => {
  return (
    <section className="feed-fullbleed-header">
      <div className="header__wrapper">
        <div className="header__bg-wrapper">
            <img
              src={hero}
            />
        </div>

      </div>
    </section>
  );
};

export default Hero;