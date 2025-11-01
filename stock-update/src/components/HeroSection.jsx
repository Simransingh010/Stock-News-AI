import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-800">
      {/* <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
        <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-green-500">
          <span className="mr-2 text-4xl">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
          </span>
          MarketPulse
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-7 cursor-pointer md:hidden text-blue-600" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold text-gray-100 md:mr-12"><a href="#">How it Works</a></li>
            <li className="text-gray-100 md:mr-12"><a href="#">Sample Report</a></li>
            <li className="text-gray-100 md:mr-12"><a href="#">Pricing</a></li>
            <li className="md:mr-12">
              <button className="rounded-full border-2 border-green-400 px-6 py-1 font-medium text-green-400 transition-colors hover:bg-green-400 hover:text-gray-900">
                Subscribe
              </button>
            </li>
          </ul>
        </nav>
      </header> */}

      <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="">
            <div className="lg:max-w-xl lg:pr-5">
              <p className="flex text-sm uppercase text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Daily at 8 PM • AI-Powered • Free
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                Stay ahead of the{' '}
                <span className="my-1 inline-block border-b-8 border-white bg-green-500 px-4 font-bold text-white">
                  market
                </span>
              </h2>
              <p className="text-base text-gray-400">
                Get a concise, AI-generated summary of daily market movements delivered straight to your inbox every evening. No fluff, just the insights you need.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a 
                href="/" 
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-green-700"
              >
                Get Daily Updates
              </a>
              <a href="/" aria-label="See sample report" className="group inline-flex items-center font-semibold text-white">
                See sample report
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div className="bg-gray-700 rounded-lg p-6 shadow-2xl border border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Daily Market Summary</h3>
                <span className="text-sm text-gray-400">Today, 8:00 PM</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">S&P 500</span>
                  <span className="text-green-400 font-medium">+1.2% ↗</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">NASDAQ</span>
                  <span className="text-green-400 font-medium">+2.1% ↗</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">DOW</span>
                  <span className="text-red-400 font-medium">-0.3% ↘</span>
                </div>
                <hr className="border-gray-600 my-3" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  "Markets rallied today as tech stocks led gains following positive earnings reports. The Fed's dovish comments boosted investor sentiment..."
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Powered by AI
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection
