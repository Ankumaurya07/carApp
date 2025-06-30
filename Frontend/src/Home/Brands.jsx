import React from 'react';
import toyota from '../images/toyoto.png';
import honda from '../images/Honda.png';
import ford from '../images/Ford.png';
import bmw from '../images/bmw.png';
import audi from '../images/Audi.png';
import hyundai from '../images/Huandyi.png';
import mercedes from '../images/marcedes.png';
import kia from '../images/kia.png';
import tata from '../images/tata.png';
import volkswagen from '../images/wagen.png';

const carBrands = [
  { name: 'Toyota', image: toyota },
  { name: 'Honda', image: honda },
  { name: 'Ford', image: ford },
  { name: 'BMW', image: bmw },
  { name: 'Audi', image: audi },
  { name: 'Hyundai', image: hyundai },
  { name: 'Mercedes', image: mercedes },
  { name: 'Kia', image: kia },
  { name: 'Tata', image: tata },
  { name: 'Volkswagen', image: volkswagen },
];

const Brands = () => {
  return (
    <section className="py-20 bg-gray-100 mt-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Top Car Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
          {carBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg cursor-pointer hover:shadow-black shadow-2xl transition duration-200 w-50 h-50 flex items-center justify-center"
            >
              <img src={brand.image} alt={brand.name} className="max-h-36 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
