import React from 'react';
import secure from '../images/secure.gif';
import rotate from '../images/views.gif';
import fast from '../images/money.gif';

const Futures = () => {
  return (
    <section
      id="features"
      className="py-24 mt-5 "
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xl font-bold text-purple-800 mb-2">Feature-Packed Driving</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Our Automated Features</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#ba9aff] text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition">
            <img
              src={secure}
              alt="Secure Payment"
              width={195}
              className="mx-auto mb-4 animate-float"
            />
            <h3 className="text-xl font-bold mb-4">Secure Payment</h3>
            <p className="text-sm font-semibold leading-relaxed text-white">
              We take your security seriously, and that's why we've implemented state-of-the-art secure
              payment systems. Your financial information is safeguarded with the latest encryption
              technology, ensuring your transactions are always safe and secure.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#9e63ff] text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition">
            <img
              src={rotate}
              alt="360 Visualization"
              width={195}
              className="mx-auto mb-4 animate-float"
            />
            <h3 className="text-xl font-bold mb-4">360 Visualization</h3>
            <p className="text-sm font-semibold leading-relaxed text-white">
              Explore every angle, every detail, and every curve of your dream car from the comfort of
              your screen. Step inside the driver's seat virtually and truly immerse yourself.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#ba9aff] text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition">
            <img
              src={fast}
              alt="Fast and Secure"
              width={195}
              className="mx-auto mb-4 animate-float"
            />
            <h3 className="text-xl font-bold mb-4">Fast and Secure</h3>
            <p className="text-sm font-semibold leading-relaxed text-white">
              Our platform offers a seamless, lightning-fast, and secure experience. Effortlessly
              browse, compare, and connect with sellers or dealers, all in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Futures;
