import { useState } from 'react';

const InsurancePage = () => {
  const [activeTab, setActiveTab] = useState('why-insurance');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-6 bg-white shadow-lg h-auto md:h-full">
        <nav className="space-y-4">
          <button
            onClick={() => handleTabChange('why-insurance')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'why-insurance' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Why Insurance
          </button>
          <button
            onClick={() => handleTabChange('life-insurance')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'life-insurance' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Life Insurance
          </button>
          <button
            onClick={() => handleTabChange('health-insurance')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'health-insurance' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Health Insurance
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-10">
        {activeTab === 'why-insurance' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Why Insurance?</h1>
            <p className="text-lg leading-relaxed">
              Insurance is one of the most important financial topics in today's complex world. Failure to have sufficient insurance coverage is the quickest and easiest way to accrue mass debt. Nothing will make your business, car, house, family, or self more vulnerable or susceptible to financial strain than a lack of adequate insurance. However, paying too much for insurance can be a financial strain in itself. And paying for insurance that is not needed is just money down the drain.
            </p>
            <p className="text-lg leading-relaxed">
              Many people have a preconceived notion that insurance is just a waste of money, something that is not necessary. This is not true. Almost everyone needs insurance. How do you know? If you own anything that cannot be easily replaced without economic hardship, it should be insured. If your house burned down, what would you do? If you became disabled at work, would there still be food on the table? Or, in the worst case, would your family be provided for if you passed away?
            </p>
            <p className="text-lg leading-relaxed">
              These are tough scenarios to imagine, but they happen every day. It is important to understand the consequences and to be prepared for the worst. Some people tend to think of insurance as a luxury, but this is not true at all. Insurance is simply a way to avoid an impoverished state.
            </p>
            <p className="text-lg leading-relaxed">
              Like many things in life, the decision to purchase insurance or not is based on a system of risk/reward. Unfortunately, consumers often look at the reward and ignore the risk altogether. This can impede the process of making an educated decision. For example, the lottery is a very popular system of risk/reward. In this case, the risk is generally small, but the reward can be great, making it a popular choice. Gambling in casinos is another example. In this case, some people become so fixated on the reward that they forget the risk of losing.
            </p>
            <p className="text-lg leading-relaxed">
              Hopefully, you now realize that insurance is a necessary part of today's world. So let's move on. There are four questions you should have in mind when you set out to purchase insurance.
            </p>
            <ul className="list-disc list-inside pl-5 text-lg">
              <li>What kinds of insurance do I need?</li>
              <li>How much of each kind do I need?</li>
              <li>Who do I insure from?</li>
              <li>How do I get the best deal?</li>
            </ul>
            <p className="text-lg leading-relaxed">
              There is also a fifth question that you should continually ask yourself when deciding about your insurance needs: What happens if I'm not covered?
            </p>
            <p className="text-lg leading-relaxed">
              What really happens if you aren't covered, whether it's not enough of a particular type of insurance or none at all? Imagine a scenario and play it out in your head. Will it even affect you? Can you recover from it at all? We will go through some basic scenarios together and you can decide for yourself.
            </p>
            <p className="text-lg leading-relaxed">
              For more information, please <a href="/contact" className="">contact us.</a>
            </p>
          </div>
        )}

        {activeTab === 'life-insurance' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Life Insurance</h1>
            <p className="text-lg leading-relaxed">
              Life insurance is a financial resource for your family and loved ones in case of your death. It is a cover which allows your family to maintain a standard of living as they are currently, and meet their financial obligations. It also serves as an effective investment and tax-saving tool.
            </p>
            <h2 className="text-2xl font-semibold">Why Consult Us?</h2>
            <ul className="list-disc list-inside pl-5 text-lg">
              <li>We are an independent and unbiased investment advisor, suggesting products and services that are best for you, not for us.</li>
              <li>We search the market to find the best options for you.</li>
              <li>We have a research team that helps us scan through various products from across the marketplace to pick only those that meet your standards.</li>
              <li>We are IRDA approved and we have a track record of ethical dealings for the last several years and have had the honour of helping our investors to achieve their financial objectives.</li>
            </ul>
            <h2 className="text-2xl font-semibold">Insurance Plans are Available For:</h2>
            <ul className="list-disc list-inside pl-5 text-lg">
              <li>Life Insurance</li>
              <li>Retirement</li>
              <li>Child Plans</li>
            </ul>
            <p className="text-lg leading-relaxed">
              For more information, please contact us.
            </p>
          </div>
        )}

        {activeTab === 'health-insurance' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Health Insurance</h1>
            <p className="text-lg leading-relaxed">
              With medical costs spiraling out of control and the increase in shift to lifestyle diseases, healthcare today is at its all-time high in terms of treatment costs. In the event of an unforeseen illness, you may have no option other than to utilize your hard-earned savings, built over your lifetime. Finally, what’s more important than your health, and what better way to protect it than with the right Health Insurance Plan?
            </p>
            <p className="text-lg leading-relaxed">
              A Health Insurance plan ensures complete peace of mind and makes sure that you use your hard-earned savings for the real reasons – be it your child’s higher education or his dream wedding, a well-deserved family vacation, or just about anything you dreamed of all your life.
            </p>
            <p className="text-lg leading-relaxed">
              For those who have a family, we recommend a family floater instead of a standalone policy since the probability of all family members needing hospitalization at one go is remote.
            </p>
            <p className="text-lg leading-relaxed">
              Even if your employer offers group medical insurance, get your own cover. A change of job or retirement could leave you without health insurance. Getting a fresh cover after 45 is anyways difficult.
            </p>
            <p className="text-lg leading-relaxed">
              For more information, please contact us.
            </p>
          </div>
        )}

        {activeTab === 'human-value-calculator' && <h2 className="text-3xl">Human Life Value Calculator Content Coming Soon</h2>}
      </div>
    </div>
  );
};

export default InsurancePage;
