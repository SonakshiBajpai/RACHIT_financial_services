import { useState } from 'react';

const InvestmentPage = () => {
  const [activeTab, setActiveTab] = useState('financial-assessment');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-6 bg-white shadow-lg">
        <nav className="space-y-4">
          <button
            onClick={() => handleTabChange('financial-assessment')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'financial-assessment' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Financial Assessments
          </button>
          <button
            onClick={() => handleTabChange('mutual-funds')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'mutual-funds' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Mutual Funds
          </button>
          <button
            onClick={() => handleTabChange('about-sip')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'about-sip' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            About SIP
          </button>
          <button
            onClick={() => handleTabChange('fixed-deposit')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'fixed-deposit' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Fixed Deposit
          </button>
          <button
            onClick={() => handleTabChange('bonds')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'bonds' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Bonds
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-10">
        {activeTab === 'financial-assessment' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Financial Assessment</h1>
            <p>
              Simply put, financial assessment is the process of identifying and defining your financial goals, prioritizing them and achieving these goals with a clear, focused and a customized game plan. Financial Assessment can help you achieve both greater wealth and financial security, while inadequate or improper planning can be disastrous.
            </p>
            <p>
              Financial Assessment is an ongoing and continuous activity involving investment management, cash flow planning, retirement solutions, insurance solutions and tax solutions.
            </p>
            <p>
              Financial assessment is a long-term process of wisely managing your finances so that you can achieve your goals and dreams. It is a process, which starts with the identification of your specific goals. Once this critical phase is complete, pertinent data is gathered and your goals are analyzed in terms of your ability to achieve them.
            </p>
            <p>These goals may include:</p>
            <ul>
              <li>Buying a house</li>
              <li>Buying a car</li>
              <li>Saving for your child's education</li>
              <li>Your daughter's marriage</li>
              <li>Eventually planning for retirement</li>
            </ul>
            <p>
              Financial assessment is all about preplanning. Most young professionals today do not plan their finances - some because of a lack of awareness about its benefits, others because of their belief that they do not require it at the initial stage of their careers and some others because it may be expensive for them now.
            </p>
            <p>
              The sooner you start investing, the more time your money will have to grow - pure and simple "compounding" or the "snowball effect" on your money.
            </p>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'mutual-funds' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Mutual Fund</h1>
            <p>
              Mutual Funds are financial instruments. These funds are collective investments which gather money from different investors to invest in stocks, short-term money market financial instruments, bonds and other securities and distribute the proceeds as dividends. The Mutual Funds in India are handled by Fund Managers, also referred to as the portfolio managers. The Securities Exchange Board of India regulates the Mutual Funds in India. The unit value of the Mutual Funds in India is known as net asset value per share (NAV). The NAV is calculated on the total amount of the Mutual Funds in India, by dividing it with the number of units issued and outstanding units on a daily basis.
            </p>
            <h2 className="text-lg font-semibold">Benefits of Investing in Mutual Funds:</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Professional Financial Experts:</strong> Every Mutual Fund scheme has a well-defined objective and behind every scheme, there is a dedicated team of financial experts working in tandem with a specialized investment research team.
              </li>
              <li>
                <strong>Diversifying Risk:</strong> Mutual funds invest in a broad range of securities. This limits investment risk by reducing the effect of a possible decline in the value of any one security.
              </li>
              <li>
                <strong>Low Cost:</strong> Mutual Funds generally provide an opportunity to invest with fewer funds as compared to other avenues in the capital market.
              </li>
              <li>
                <strong>Liquidity:</strong> You can encash your money from a mutual fund on an immediate basis when compared with other forms of savings.
              </li>
              <li>
                <strong>Variety of Investment:</strong> There is no shortage of variety when investing in mutual funds.
              </li>
            </ol>
            <h2 className="text-lg font-semibold">Types of Mutual Funds:</h2>
            <ol className="list-decimal list-inside">
              <li><strong>Equity Funds:</strong> Aim to provide capital growth by investing in shares of individual companies.</li>
              <li><strong>Debt or Income Funds:</strong> Aim to provide you with a steady income by investing in securities such as bonds, corporate debentures, and government securities.</li>
              <li><strong>Hybrid Funds:</strong> Aim to provide both growth and regular income by investing in equities and fixed-income securities.</li>
              <li><strong>Money Market Funds:</strong> Aim to provide liquidity, capital preservation and slightly higher interest rates than bank accounts.</li>
            </ol>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'about-sip' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Systematic Investment Plan</h1>
            <p>
              It is more famously known as SIP. It is bit by bit systematic investment. Under this plan, your investments are staggered. You invest a fixed sum either monthly or quarterly in a mutual fund.
            </p>
            <p>
              SIP helps in averaging the cost as equal amounts are invested regularly every month at different NAVs. SIP works well in a volatile market as in the months where markets are down you get more units, and when the markets are up you get fewer units.
            </p>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'fixed-deposit' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Fixed Deposits</h1>
            <p>
              FDs are one of the oldest and most common methods of investing. Fixed Deposits let you make the most of value-added benefits as you create wealth at low risk.
            </p>
            <p>
              Fixed Deposits in companies that earn a fixed rate of return over a period of time are called Company Fixed Deposits.
            </p>
            <h2 className="text-lg font-semibold">Features and Benefits:</h2>
            <ul>
              <li>Company Fixed Deposits offer comparatively higher returns than banks.</li>
              <li>You can choose how frequently you want to receive your interest payments.</li>
              <li>Company Fixed Deposits are non-transferable.</li>
              <li>Premature encashment of deposit is available any time subject to payment of prescribed penalty.</li>
            </ul>
            <p>For more information, please contact us.</p>
          </div>
        )}

        {activeTab === 'bonds' && (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-red-600 mb-6">Bonds</h1>
            <p>
              Bonds are fixed-income instruments that represent a loan made by an investor to a borrower. They are used by companies, municipalities, states, and sovereign governments to finance a variety of projects and activities. When you purchase a bond, you are essentially lending money to the issuer in exchange for periodic interest payments and the return of the bond's face value when it matures.
            </p>
            <h2 className="text-lg font-semibold">Types of Bonds:</h2>
            <ul>
              <li><strong>Government Bonds:</strong> Issued by the government and considered low-risk investments.</li>
              <li><strong>Corporate Bonds:</strong> Issued by companies and carry higher risk than government bonds.</li>
              <li><strong>Muni Bonds:</strong> Issued by local governments and offer tax-free interest.</li>
              <li><strong>Zero-Coupon Bonds:</strong> Sold at a discount and do not pay periodic interest.</li>
            </ul>
            <h2 className="text-lg font-semibold">Benefits of Investing in Bonds:</h2>
            <ul>
              <li><strong>Stable Returns:</strong> Bonds typically offer fixed interest payments, providing a predictable income stream.</li>
              <li><strong>Risk Diversification:</strong> Adding bonds to your investment portfolio can reduce overall risk.</li>
              <li><strong>Tax Benefits:</strong> Certain bonds, like municipal bonds, offer tax advantages.</li>
              <li><strong>Liquidity:</strong> Many bonds are easily tradable in the secondary market.</li>
            </ul>
            <p>For more information, please contact us.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentPage;
