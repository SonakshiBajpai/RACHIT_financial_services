import React from 'react';

const Index = () => {
  const scrollToAnswer = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-4">FAQs</h1>
      <ul className="list-decimal pl-5">
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('mutual-fund')}>
          What is a mutual fund?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('asset-management-company')}>
          What is an Asset Management Company?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('types-of-mutual-fund-schemes')}>
          What are the different types of mutual fund schemes?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('open-ended-vs-closed-ended')}>
          What is the difference between an open-ended and closed-ended scheme?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('prospectus')}>
          What is a Prospectus or Offer Document?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('nav')}>
          What is the Net Asset Value (NAV)?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('dividends')}>
          What are Dividends?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('investment-safety')}>
          Are investments in mutual fund units safe?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('mutual-fund-risks')}>
          What are the Risks in a mutual fund?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('benefits')}>
          What are the benefits of a mutual fund?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('assured-returns')}>
          Do mutual funds assure returns?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('making-money')}>
          How do you make money in mutual funds?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('who-should-invest')}>
          Who should invest in mutual funds?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('small-investors')}>
          As mutual fund schemes invest only in stock markets, are they suitable for small investors?
        </li>
      </ul>

      <div className="mt-10">
        <h2 id="mutual-fund" className="text-2xl font-bold text-red-600">What is a mutual fund?</h2>
        <p>A mutual fund is a trust. It pools money from like-minded shareholders and invests in diversified portfolio of securities, through various schemes that address different needs of investors. The pool of money thus collected is then invested by the Asset Management Company (AMC) in different types of securities. These could include shares, debentures, convertibles, bonds, money market instruments or other securities, based on the investment objective of a particular scheme. Such objective is clearly laid down in the offer document for that scheme. The fund adds value to the investment in two ways: income earned and any capital appreciation realised through sale. This is shared by unit holders in proportion to the number of units they own.</p>

        <h2 id="asset-management-company" className="text-2xl font-bold text-red-600">What is an Asset Management Company?</h2>
        <p>An AMC is responsible for daily administration and acts as an investment advisor for the fund. AMCs are promoted by sponsors, often large corporate entities with a sound financial record. An AMC typically has three departments: Fund Management, Sales & Marketing, and Operations & Accounting.</p>

        <h2 id="types-of-mutual-fund-schemes" className="text-2xl font-bold text-red-600">What are the different types of mutual fund schemes?</h2>
        <p>Mutual fund schemes can be classified by structure or investment objective:</p>
        <h3 className="font-bold">By Structure</h3>
        <p><strong>Open-end Funds:</strong> Available for subscription throughout the year with no fixed maturity. Investors can buy and sell units at NAV prices.</p>
        <p><strong>Close-ended Funds:</strong> Have a fixed maturity period (3 to 15 years). Open for subscription only during a specified period and traded on stock exchanges.</p>

        <h3 className="font-bold">By Investment Objective</h3>
        <p><strong>Growth Funds:</strong> Aim for capital appreciation over the medium to long term, primarily investing in equities.</p>
        <p><strong>Income Funds:</strong> Aim to provide regular income by investing in fixed income securities like bonds.</p>
        <p><strong>Balanced Funds:</strong> Provide both growth and income by investing in a mix of equities and fixed income securities.</p>
        <p><strong>Money Market Funds:</strong> Offer liquidity and moderate income by investing in short-term instruments.</p>

        <h2 id="open-ended-vs-closed-ended" className="text-2xl font-bold text-red-600">What is the difference between an open-ended and closed-ended scheme?</h2>
        <p>Open ended funds can issue and redeem units any time during the life of the scheme. Close ended funds cannot issue new units except through a bonus or rights issue. Hence, unit capital of open ended funds can fluctuate daily. Further, new investors to an open ended fund can join the scheme by directly applying to the mutual fund at applicable Net Asset Value-related prices. In the case of close ended schemes, new investors can buy units only from the secondary market.</p>

        <h2 id="prospectus" className="text-2xl font-bold text-red-600">What is a Prospectus or Offer Document?</h2>
        <p>It is a document which an open-end fund, or newly issued closed-end fund, is required to provide to investors. Funds say that investors should read it carefully before investing or sending money. A prospectus contains descriptions of:
<ul>
        <li>Fees, in a standardized format</li>
  <li>Investment Objective</li>
  <li>Some financial data</li>
  <li>Investment methods</li>
  <li>Risk factors and description</li>
  <li>Investment management and compensation</li>
  <li>Dividend and Capital Gain distributions</li>
  <li>Other services</li>

  </ul>
        </p>

        <h2 id="nav" className="text-2xl font-bold text-red-600">What is the Net Asset Value (NAV)?</h2>
        <p>The net asset value (NAV) is the market value of the fund's underlying securities. It is calculated at the end of the trading day. Any open-end fund buy or sell order received on that day is traded based on the net asset value calculated at the end of the day. The NAV per units is such Net Asset Value divided by the number of outstanding units.

NAV	=	Market Value of Assets - Liabilities / 
Units Outstanding</p>

        <h2 id="dividends" className="text-2xl font-bold text-red-600">What are Dividends?</h2>
        <p>A mutual fund may receive dividend or interest income from the securities it owns; it is required to pay out this income to its investors. Most open-end funds offer an option to purchase additional shares with the dividends. Dividends are often made monthly or quarterly, though many funds make distributions only yearly.</p>

        <h2 id="investment-safety" className="text-2xl font-bold text-red-600">Are investments in mutual fund units safe?</h2>
        <p>No stock market related investments can be termed safe with certainty; they are inherently risky. However, different funds have different risk profile, which is stated in its objective. Funds which categorize themselves as low risk, invest generally in debt which is less risky than equity. Anyway, as mutual funds have access to services of expert fund managers, they are always safer than direct investment in the stock markets.</p>

        <h2 id="mutual-fund-risks" className="text-2xl font-bold text-red-600">What are the Risks in a mutual fund?</h2>
        <p>Equity Funds are open to market risk i.e. there is a possibility that the price of the stocks in which the Fund has invested may decrease. Of course, the prices may also go up, making it possible for the Fund to earn profits.

Debts Funds are open to two main risks - Credit Risk and Interest Rate Risk. Credit Risk refers to the possibility that the company that has issued the bond or debenture in which the Fund has invested may default on interest or on principal payments. Debt Fund managers take care of this by investing in bonds which have good credit rating.

Interest Rate Risk refers to the possibility that the price of the bond in which the Fund has invested may go down because of an increase in the interest rates in the economy. In general, it is useful to remember that this is a "see-saw" relationship - bond prices (and therefore, NAV) goes up when interest rates drop and drops when interest rates rise.</p>

        <h2 id="benefits" className="text-2xl font-bold text-red-600">What are the benefits of a mutual fund?</h2>
        <ul className="list-disc pl-5">
        <li>Your money is managed by experienced and skilled professionals.</li>
  <li>Your investment is automatically diversified over a large number of companies and industries, thus reducing the element of risk.</li>
  <li>Your money is very liquid, especially in an open-end fund.</li>
  <li>The potential to provide a higher return over the medium to long term is better in a wide range of securities than in any one.</li>
  <li>The costs of research and investing directly in individual securities are spread over a large corpus and thousands of investors, thus minimizing individual share.</li>
  <li>There is a high degree of transparency in the operation of a mutual fund, so you can take investment decisions based on more information.</li>
  <li>You have a choice of schemes to suit your needs.</li>
  <li>The industry is well regulated with many measures oriented towards investor protection.</li>
</ul>
        

        <h2 id="assured-returns" className="text-2xl font-bold text-red-600">Do mutual funds assure returns?</h2>
        <p>Some mutual funds have floated "assured" return schemes that guarantee a certain annual return. At present, there are very few funds who assure returns as they have realized that it is not possible to assure returns in a volatile market.</p>

        <h2 id="making-money" className="text-2xl font-bold text-red-600">How do you make money in mutual funds?</h2>
        <p>There are three ways in which you can make money in a mutual fund.

First you can earn a dividend from the Mutual Fund. Most Debt Funds declare dividends around once in six months in their Dividend Option. If you do not want the dividend, you can choose to be in the Cumulative Option. When a dividend is declared, the NAV of the units will fall, since dividend is paid out of the appreciation in the value of the unit.

Next, you can make a profit by selling the mutual fund units at a price higher than that at which you bought them. This is capital gain. (If you sell the units at a lower price, you make a capital loss.)

Finally, the value of the units you hold can appreciate. This is unrealised capital gain. Dividends and capital gains are treated differently. </p>

        <h2 id="who-should-invest" className="text-2xl font-bold text-red-600">Who should invest in mutual funds?</h2>
        <p>Mutual funds can meet the investment objectives of almost all types of investors. Younger investors who can take some risk while aiming for substantial growth of capital in the long term will find growth schemes (i.e. funds which invest in stocks) an ideal option.

Older investors who are risk-averse and prefer a steady income in the medium term can invest in income schemes (i.e. funds which invest in debt instruments). Investors in middle age can allocate their savings between income funds and growth funds and achieve both income and capital growth. 
Investors who want to benefit from regular savings, save a small sum every month, can use the Systematic Investment Plan.</p>

        <h2 id="small-investors" className="text-2xl font-bold text-red-600">As mutual fund schemes invest only in stock markets, are they suitable for small investors?</h2>
        <p>Mutual funds are meant for small investors. The prime reason is that successful investments in stock markets require careful analysis which is not possible for a small investor. Mutual funds are usually equipped to carry out thorough analysis and can provide superior returns.

Back to top


 Disclaimer - This contents above should not be considered as substitute for specialized professional advice and expert guidance may be sort before acting upon </p>
      </div>
    </div>
  );
};

export default Index;
