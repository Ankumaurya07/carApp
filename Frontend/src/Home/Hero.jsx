import React from 'react';
import hero from '../images/hero.png';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="w-full py-24 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="md:w-1/2 w-full mb-10 md:mb-0 animate-float">
            <img src={hero} alt="Hello Carwale" className="w-full h-auto" />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl font-bold text-violet-600 mb-4">Your Road to the Perfect Ride</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Driving Dreams into <span className="text-violet-600">Reality</span> with us
            </h1>
            <p className="text-base md:text-lg text-gray-700 font-semibold leading-relaxed max-w-md mx-auto md:mx-0 mb-8 text-justify">
              Experience car buying like never before. CarWale offers an extensive range of options,
              unbeatable deals, expert guidance, and a hassle-free journey to your dream car.
              Discover, compare, and drive with confidence.
            </p>
            <div className="flex justify-center md:justify-start">
              <NavLink
                to="/cars"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
