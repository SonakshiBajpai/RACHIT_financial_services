import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const steps = [
    {
      bubble: 'Investment Research',
      text: 'In order to deliver top-notch services, we carry out extensive investment research on fund houses and their schemes. We also closely examine intangibles such as investment philosophy and management quality of the asset management companies.',
    },
    {
      bubble: 'Risk Profiling',
      text: 'At Rachit Financial Services, we regard risk profiling as an enigma, and one of the cornerstones of our profession. We identify each client’s unique financial personality, life stage, and risk horizon to make informed investment choices.',
    },
    {
      bubble: 'Fund Analysis',
      text: 'Our analysts use several tools to judge the performance of mutual fund schemes. Each scheme’s risk-return profile, sector weights, diversification strategy, and consistency in performance is monitored closely before making decisions.',
    },
    {
      bubble: 'Fund Allocation',
      text: 'Once we understand your financial needs, we allocate funds into various mutual fund schemes tailored to your investment goals, regularly monitoring and adjusting the portfolio to reflect market conditions and your life changes.',
    },
    {
      bubble: 'Portfolio Construction',
      text: 'We design portfolios aligned with your financial personality and objectives, treating each portfolio with utmost care and ensuring that it is customized to meet your needs, beyond just data and statistics.',
    },
    {
      bubble: 'Portfolio Review',
      text: 'We review your portfolio regularly to ensure it is in line with your evolving financial needs. We stay in touch to make adjustments as your life situation or the financial market changes.',
    },
    {
      bubble: 'Rebalancing Portfolio',
      text: 'To maximize your returns while minimizing risk, we rebalance your portfolio whenever market conditions change or when your financial goals evolve, ensuring that your investment journey stays on track.',
    },
  ];

  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stepTrigger = Math.floor(scrollPosition / 200);
      setVisibleStep(stepTrigger);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center py-8 md:py-16 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 md:mb-16">
        Our Modus Operandi
      </h1>
      <div className="relative w-full max-w-4xl">
        {/* Mobile-only styling */}
        <div className="block md:hidden">
          {steps.map((step, index) => (
            <div
              className={`flex flex-col items-center w-full mb-16 transition-all duration-500 ${
                visibleStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              key={index}
            >
              <div className="relative w-16 h-16 bg-blue-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full mb-4">
                {index + 1}
              </div>
              <h2 className="text-2xl font-bold text-blue-600 text-center">{step.bubble}</h2>
              <p className="mt-2 text-base text-gray-700 text-center mx-10">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Desktop-only styling */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
          {steps.map((step, index) => (
            <div
              className={`flex items-center w-full mb-24 transition-all duration-500 ${
                visibleStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              key={index}
            >
              {index % 2 === 0 ? (
                <div className="flex justify-between w-full">
                  <div className="w-1/2 pr-8 flex flex-col items-end">
                    <h2 className="text-3xl font-bold text-blue-600">{step.bubble}</h2>
                    <p className="mt-4 text-lg text-gray-700 text-right">{step.text}</p>
                  </div>
                  <div className="relative w-16 h-16 bg-blue-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg">
                    {index + 1}
                    <div className="absolute right-full w-8 h-px bg-gray-300"></div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between w-full">
                  <div className="relative w-16 h-16 bg-red-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg">
                    {index + 1}
                    <div className="absolute left-full w-8 h-px bg-gray-300"></div>
                  </div>
                  <div className="w-1/2 pl-8 flex flex-col items-start">
                    <h2 className="text-3xl font-bold text-blue-600">{step.bubble}</h2>
                    <p className="mt-4 text-lg text-gray-700 text-left">{step.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
