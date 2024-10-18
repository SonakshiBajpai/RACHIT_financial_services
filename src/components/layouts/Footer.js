import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 body-font mt-0">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between">
        <div className="flex flex-col text-left">
          <p className="text-sm">
            <span className="text-red-500 font-semibold">Risk Factors:</span> Investments in Mutual Funds are subject to Market Risks. Read all scheme-related documents carefully before investing. There is no guarantee that the investment objectives of any suggested scheme will be achieved. All investors should evaluate the cost structures before investing.
          </p>
          <p className="text-xs mt-4">
            AMFI Registered Mutual Fund Distributor | ARN-82992 | Initial Registration: 21 July 2011 | Current Validity: 20 July 2026
          </p>
          <p className="text-xs mt-2">
            Grievance Officer: <span className="text-red-500">Rachit</span>, Phone: <a href="tel:+919839111539" className="text-blue-400">0512-2304044</a>, Email: <a href="mailto:rachit_portfolio@yahoo.com" className="text-blue-400">rachit_portfolio@yahoo.com</a>
          </p>
        </div>
        
        <div className="flex flex-col text-sm">
          <p className="text-xs mb-2">
            <a href="#" className="hover:text-red-500">Disclaimer</a> | <a href="#" className="hover:text-red-500">Disclosure</a> | <a href="#" className="hover:text-red-500">Privacy Policy</a> | <a href="#" className="hover:text-red-500">Terms & Conditions</a>
          </p>
          <p className="text-xs">
            <span className="text-blue-400">0512-2304044</span> | <a href="mailto:rachit_portfolio@yahoo.com" className="text-blue-400 hover:underline">rachit_portfolio@yahoo.com</a>
          </p>
        </div>
      </div>

      <div className="bg-gray-700 py-4">
        <div className="container mx-auto flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Rachit Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
