import React, { useState } from 'react';
import faq from '../images/search.png';

const faqData = [
  {
    question: '1. Can I do car payment online?',
    answer:
      'Yes, you can. At CarWale, we make payment easy. Just navigate to our Cart page and submit your information. Once our team receives it, they will look it over and get back to you promptly.',
  },
  {
    question: '2. Can I buy a car online?',
    answer:
      'Yes, you can. CarWale is pleased to offer online car buying! Start your vehicle search on our Inventory page. You can shop for your next vehicle and get pre-approved without leaving home.',
  },
  {
    question: '3. How many cars are currently available at CarWale?',
    answer:
      "We offer an extensive selection of top-tier car brands available in bulk quantities. Use the search bar or the 'Cars' section to find what you're looking for.",
  },
  {
    question: '4. Do you offer express service?',
    answer:
      "Yes. If you're in need of a quick check or procedure, take advantage of our express service. We'll take care of it for you quickly and accurately.",
  },
  {
    question: '5. How many brands are available at CarWale?',
    answer:
      "We offer a wide array of premium car brands and accessories. You can access these options by navigating to the 'Brands' section.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white py-20 px-4 mt-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl font-bold text-purple-700 mb-2">We're here to help</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Accordion */}
          <div className="w-full lg:w-2/3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg mb-4 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 font-semibold text-lg hover:text-black cursor-pointer text-purple-800 flex justify-between items-center"
                >
                  {item.question}
                  <span className="text-gray-500">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 text-sm font-medium leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 hidden lg:block">
            <img src={faq} alt="FAQ" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
