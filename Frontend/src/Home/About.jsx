import React from 'react';
import about from '../images/aboutUs.png';
import about2 from '../images/aboutUs2.png';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div className=' mt-10'>
      <section
        id="about"
        className="bg-cover bg-no-repeat bg-center  "
      >
        {/* First Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <p className="text-white bg-violet-600 font-extrabold text-xl w-6 py-1 p-1.5 rounded-lg mb-6">
              1
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              CarWale, where your car buying journey begins
            </h2>
            <p className="text-gray-600 text-[15px] font-semibold leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0">
              With a passion for cars and a commitment to helping you find the perfect ride, we've built a platform that simplifies the car buying experience. Our extensive inventory, expert reviews, and user-friendly tools empower you to make informed decisions. Whether you're in search of a fuel-efficient compact or a high-performance luxury vehicle, CarWale has you covered. We believe that buying a car should be exciting, not stressful, and that's why we're here to guide you every step of the way. Join us on the journey to finding your ideal car, and let's drive your dreams together.
            </p>
            <div className="mt-6">
              <NavLink
                to="/cars"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition"
              >
                Explore Now
              </NavLink>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center">
            <img src={about} alt="About" className="w-full h-auto" />
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-4">
              <img src={about2} alt="About 2" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-white bg-violet-600 font-extrabold text-xl w-6 py-1 p-1.5 rounded-lg mb-6">
                2
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                The best car buying company, we understand your needs
              </h2>
              <p className="text-gray-600 text-[15px] font-semibold leading-relaxed text-justify max-w-2xl mx-auto lg:mx-0">
                We're more than just a website; we're your trusted partner in finding the perfect vehicle. With a passion for automobiles and a dedication to your satisfaction, we've curated a vast selection of cars to suit every need and budget. Our mission is to simplify the car-buying process, providing you with the tools and resources you need to make informed decisions. Our team of experts is here to guide you, offering valuable insights and advice along the way.
              </p>
              <div className="mt-6">
                <NavLink
                to="/cars"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition"
              >
                Shop Now
              </NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
