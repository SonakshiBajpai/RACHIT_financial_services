// components/Services.js
import React from 'react';

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-6">Our Services</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-white shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 duration-500"
          >
            <div
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:shadow-xl group-hover:shadow-red-500/50 transition duration-500`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10"
              />
            </div>
            <h3
              className="text-black group-hover:text-red-600 mb-4 transition-colors duration-500"
            >
              {service.title}
            </h3>
            <p className="text-gray-500 mb-6">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data for each service
const serviceData = [
  {
    title: 'Mutual Funds',
    description: 'A mutual fund is simply a financial intermediary...',
    icon: '1h.png',
  },
  {
    title: 'Financial Planning',
    description: 'We have a proven and unique approach in providing our services...',
    icon: '2h.png',
  },
  {
    title: 'Insurance',
    description: 'Insurance is one of the most important financial topics...',
    icon: '3h.png',
  },
  {
    title: 'SIP',
    description: 'This is a simple strategy for accumulating wealth...',
    icon: '4h.png',
  },
  {
    title: 'Financial Calculators',
    description: 'Goal Calculator, Education Calculator...',
    icon: '5h.png',
  },
  {
    title: 'Tax Planning & Advisory',
    description: 'We have a team of tax professionals providing advice...',
    icon: '6h.png',
  },
];

export default ServiceCards;
