// components/About.js
import React from 'react';

const HomePanel = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section: Image and Text */}
        <div className="md:w-1/2 px-6">
          <h1 className="text-4xl font-bold mb-6">
            Rachit Financial Services
          </h1>
          <p className="text-gray-200 mb-6">
            In an era of constant changing and volatile financial market, investors need qualified, trained, and unbiased professionals to assist them in achieving their short-term and long-term investment goals.
          </p>
          <p className="text-gray-200 mb-6">
            At Rachit Financial Servies, our single utmost aim is to assist clients with dedication and integrity so that we exceed their expectations and build enduring relationships.
          </p>
          <p className="text-gray-200 mb-6">
            We have more than a decade of experience in the financial services sector. We offer technology-based services for our clients to effectively monitor their portfolio and help...{" "}
            <a href="/about" className="text-yellow-400 font-semibold hover:underline">
              Read More
            </a>
          </p>
        </div>

        {/* Right Section: Call to Action */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-bold mb-4">
              Our Promoters
            </h2>
            <p className="text-gray-300 mb-6">
              Take some time and meet Our Team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-red-700 transition duration-300"
            >
              Meet Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePanel;
