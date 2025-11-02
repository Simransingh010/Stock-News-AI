import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What time do the market summaries arrive?",
            answer: "Every evening at exactly 8:00 PM EST, you'll receive your daily market summary. We chose this time so you can review the day's events and prepare for the next trading day. The email typically takes 2-3 minutes to read.",
            icon: "⏰"
        },
        {
            question: "How do you choose which stories to include?",
            answer: "Our AI analyzes hundreds of sources including Bloomberg, Reuters, CNBC, and WSJ. We prioritize stories based on market impact, trading volume changes, and relevance to major indices. Each summary covers the top 3-5 most significant market movements of the day.",
            icon: "🤖"
        },
        {
            question: "Is MarketPulse really completely free?",
            answer: "Yes! Our basic daily market summary is 100% free with no hidden costs, trials, or credit card required. We believe everyone deserves access to quality market intelligence. We may introduce premium features in the future, but the core service will always remain free.",
            icon: "💰"
        },
        {
            question: "Can I unsubscribe anytime?",
            answer: "Absolutely! Every email has an unsubscribe link at the bottom. No questions asked, no hard feelings. You can also manage your preferences or pause emails temporarily if you're going on vacation.",
            icon: "✉️"
        },
        {
            question: "What if I miss a day's summary?",
            answer: "No worries! All our daily summaries are archived on your subscriber dashboard. You can catch up on any missed days or browse historical summaries. We also send a weekly recap every Sunday highlighting the week's biggest market moves.",
            icon: "📚"
        },
        {
            question: "Do you cover international markets?",
            answer: "Currently, we focus primarily on US markets (NYSE, NASDAQ) with occasional coverage of major international events that impact US trading. We're planning to expand to European and Asian markets in 2025 based on subscriber feedback.",
            icon: "🌍"
        },
        {
            question: "How accurate are your AI summaries?",
            answer: "Our AI is trained on years of financial data and is continuously updated. While we strive for accuracy, our summaries are for informational purposes only and shouldn't be considered investment advice. Always do your own research before making investment decisions.",
            icon: "🎯"
        },
        {
            question: "Can I customize what topics I receive?",
            answer: "Not yet, but it's coming! We're working on personalization features that will let you focus on specific sectors (tech, healthcare, energy) or market cap ranges. This feature is planned for Q2 2025.",
            icon: "⚙️"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        Got Questions?
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about MarketPulse and how it works
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'border-green-500 shadow-xl'
                                    : 'border-transparent hover:border-gray-200 hover:shadow-xl'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4 flex-shrink-0">{faq.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}>
                                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                } overflow-hidden`}>
                                <div className="px-8 pb-6">
                                    <div className="pl-12">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               

                
            </div>
        </section>
    );
};

export default FAQ;