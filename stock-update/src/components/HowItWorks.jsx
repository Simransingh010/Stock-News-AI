import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Sign up free",
            description: "Enter your email and you're in. No credit card, no commitment.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "We summarize daily",
            description: "Our AI reads CNBC, Bloomberg and distills the key headlines.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Get smarter in 3 minutes",
            description: "Wake up to insights that matter, delivered straight to your inbox.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get market-ready in three simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Card */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                                {/* Step Number */}
                                <div className="absolute -top-4 left-8">
                                    <div className="bg-yellow-400 text-black font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="mt-8 mb-6 flex justify-center">
                                    <div className="bg-gray-100 p-4 rounded-full">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting Arrow (hidden on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-0">
                                    <svg className="w-12 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* What You'll Get Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            What You'll Get Every Evening
                        </h3>
                        <p className="text-lg text-gray-600">
                            A sample from today's brief
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Email Preview */}
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
                            {/* Email Header */}
                            <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
                                <h4 className="font-semibold text-lg">Nightly Business Brief</h4>
                                <div className="flex items-center space-x-4 text-sm text-gray-300">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        Dec 8, 2025
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        3 min read
                                    </span>
                                </div>
                            </div>

                            {/* Email Content */}
                            <div className="p-6 space-y-4">
                                {/* News Item 1 */}
                                <div className="border-l-4 border-yellow-400 pl-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-600 mr-2">📈</span>
                                        <h5 className="font-semibold text-gray-900">Fed Signals Rate Cut in 2025</h5>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Federal Reserve Chair Powell hinted at potential interest rate cuts next year as inflation continues to cool. Markets rallied on the news, with the S&P 500 gaining 1.2%.
                                    </p>
                                </div>

                                {/* News Item 2 */}
                                <div className="border-l-4 border-red-400 pl-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-red-600 mr-2">📱</span>
                                        <h5 className="font-semibold text-gray-900">Tech Layoffs Continue Despite Strong Earnings</h5>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Major tech companies announced another round of job cuts affecting 15,000+ workers, even as Q4 earnings beat expectations. Restructuring towards AI investments cited as primary reason.
                                    </p>
                                </div>

                                {/* News Item 3 */}
                                <div className="border-l-4 border-green-400 pl-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-green-600 mr-2">🛢️</span>
                                        <h5 className="font-semibold text-gray-900">Oil Prices Surge on OPEC Production Cuts</h5>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Crude oil jumped 4.5% after OPEC+ announced extended production cuts through Q2. Energy stocks led market gains with XLE up 3.8%.
                                    </p>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    );
};

export default HowItWorks;