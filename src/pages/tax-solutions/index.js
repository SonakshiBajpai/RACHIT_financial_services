import { useState } from 'react';

const TaxationPage = () => {
  const [activeTab, setActiveTab] = useState('why-taxation');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full p-6 bg-white shadow-lg md:h-full">
        <nav className="space-y-4">
          <button
            onClick={() => handleTabChange('why-taxation')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'why-taxation' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Why Taxation
          </button>
          <button
            onClick={() => handleTabChange('tax-deduction')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'tax-deduction' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Tax Deduction
          </button>
          <button
            onClick={() => handleTabChange('tax-slab')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'tax-slab' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Tax Slab
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="md:w-3/4 w-full p-10">
        {activeTab === 'why-taxation' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Why Taxation</h1>
            <p>
              There is more to taxation than exemptions available on savings. With our advice, you will pay the right amount of tax, not more and not less. You will also know how to tax-proof your incomes and gains. After all, your capital is more productive in your hands and it can work wonders for you if planned properly.
            </p>
            <h2 className="text-lg font-semibold">Our Advice</h2>
            <ul className="list-disc list-inside">
              <li>By careful understanding, one can reduce tax liability substantially.</li>
              <li>Declaring at the start of the FY is most important.</li>
              <li>Don’t wait for last minute. Start in April and use monthly investments to reduce risk. It will be easier on your pocket as well.</li>
              <li>Try to achieve tax saving and also planning for your needs simultaneously.</li>
              <li>Use tax-efficient investment avenues. You should not be paying too much tax on their returns.</li>
            </ul>
            <p>
              Taxation is not a device to reduce tax burden. In fact, it helps savings by investments in government securities. Savings reduce extravagance and correspondingly inflation. Tax savings are permitted only for investment made in government securities and bonds of priority sectors which ultimately help the nation.
            </p>
            <p>
              Therefore, the savings in tax help the Central and state governments to mobilize funds by way of investments and as such the government earns much by way of other benefits, by sacrificing a small amount of tax. The Supreme Court in one case observed that "Tax saving may be legitimate provided it is within the framework of Law". By tax saving, the government is equally benefited.
            </p>
            <h2 className="text-lg font-semibold">Factors to Consider</h2>
            <ul className="list-disc list-inside">
              <li>Liquidity - when he requires the amount to meet educational expenses of children, for marriage, house construction, or for a secure future after retirement.</li>
              <li>Security of the investment.</li>
              <li>The return and tax on income on such investments.</li>
            </ul>
            <p>
              To make investments there should be savings. A lower-income person also wants to save, but his gross income and day-to-day expenses don't leave him anything to save. This booklet talks about the deductions available under various heads such as salary and house property and also various modes of investments and tax deduction available from the said investments.
            </p>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'tax-deduction' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Tax Deduction</h1>
            <h2 className="text-lg font-semibold">Deductions under Chapter VI (sec 80C)</h2>
            <ul className="list-disc list-inside">
              <li>Deduction under Pension scheme (sec 80C)</li>
              <li>NSC (sec 80C)</li>
              <li>Public Provident Fund (sec 80C)</li>
              <li>Employees Provident Fund & Voluntary PF (sec 80C)</li>
              <li>Children's Education (sec 80C)</li>
              <li>Housing loan principal repayment (sec 80C)</li>
              <li>Insurance premium (sec 80C)</li>
              <li>Infrastructure Bonds & others (MF, ULIP, etc.) (sec 80C)</li>
              <li>Medical Insurance Premium (sec 80D)</li>
              <li>Medical for handicapped dependents (Sec 80DD)</li>
              <li>Medical for specified diseases (Sec 80DDB)</li>
              <li>Higher Education Loan Interest Repayment (Sec 80E)</li>
              <li>Donation to approved fund and charities (sec 80G)</li>
              <li>Rent deduction (sec 80GG) only if HRA not received.</li>
              <li>Deduction for permanent disability (80U)</li>
            </ul>
            <h2 className="text-lg font-semibold">Exemptions and Deductions</h2>
            <p>Deductions from gross income on Life Insurance premium paid under different sections:</p>
            <ul>
              <li><strong>Under Sec.80C:</strong> Premiums paid up to maximum of Rs.1,50,000 subject to a maximum of 20% of Capital sum Assured under Traditional & Unit linked Plans.</li>
              <li><strong>Under Sec.80CCC:</strong> Premiums paid up to maximum of Rs. 1,50,000 under pension plans.</li>
              <li><strong>Under Sec.80DD:</strong> Premiums paid under plans exclusively for physically handicapped persons up to Rs.50,000/- (upto Rs. 75,000/- in case of severe disability).</li>
              <li><strong>Exemption of Life Insurance Proceeds:</strong> Maturity benefits are tax-free under Sec.10(10D). Death benefits are also tax-free.</li>
            </ul>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'tax-slab' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Tax Slab</h1>
            <h2 className="text-lg font-semibold">Income Tax Slab Rates for FY 2023-2024</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Income Range</th>
                  <th className="border border-gray-300 p-2 text-left">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Up to ₹2.5 lakhs</td>
                  <td className="border border-gray-300 p-2">Nil</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">₹2.5 lakhs - ₹5 lakhs</td>
                  <td className="border border-gray-300 p-2">5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">₹5 lakhs - ₹10 lakhs</td>
                  <td className="border border-gray-300 p-2">20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Above ₹10 lakhs</td>
                  <td className="border border-gray-300 p-2">30%</td>
                </tr>
              </tbody>
            </table>
            <h2 className="text-lg font-semibold mt-6">Income Tax Slab Rates for FY 2024-2025</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Income Range</th>
                  <th className="border border-gray-300 p-2 text-left">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Up to ₹2.5 lakhs</td>
                  <td className="border border-gray-300 p-2">Nil</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">₹2.5 lakhs - ₹5 lakhs</td>
                  <td className="border border-gray-300 p-2">5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">₹5 lakhs - ₹10 lakhs</td>
                  <td className="border border-gray-300 p-2">20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Above ₹10 lakhs</td>
                  <td className="border border-gray-300 p-2">30%</td>
                </tr>
              </tbody>
            </table>
            <p>For more information, please contact us.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxationPage;
