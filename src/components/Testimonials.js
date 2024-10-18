import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "Unlike most IFAs, Rachit Financial Services is not sales motivated. It is a refreshing change to deal with someone not motivated by selling products which do not necessarily meet my needs. Their proactive approach to financial assessment has already put me in a much stronger position.",
    name: "Sahil Saluja, Entrepreneur"
  },
  {
    quote: "Rachit Financial Services has helped me tremendously in managing my finances efficiently. Their personalized approach is what sets them apart from others.",
    name: "Priya Mehra, Business Owner"
  },
  {
    quote: "The level of professionalism and integrity exhibited by Rachit Financial Services is commendable. I highly recommend their services.",
    name: "Amit Singh, Software Engineer"
  },
  {
    quote: "A truly trustworthy and reliable financial consulting service. They’ve exceeded my expectations in every way.",
    name: "Neha Verma, Marketing Manager"
  },
  {
    quote: "Great team, highly professional and very friendly. They helped me secure my future in ways I hadn't imagined.",
    name: "Rahul Kumar, Doctor"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { quote, name } = testimonialsData[currentIndex];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Testimonials</h2>

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <FaQuoteLeft className="text-5xl text-red-600 mb-4" />

          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'} ease-in-out`}>
            <p className="text-gray-600 text-lg italic mb-4">
              "{quote}"
            </p>
            <h4 className="text-blue-700 font-bold text-xl">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
