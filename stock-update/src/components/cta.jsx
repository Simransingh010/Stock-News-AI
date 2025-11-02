import React, { useState } from 'react';

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="bg-white rounded-2xl p-12 shadow-2xl max-w-md mx-auto">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to MarketPulse!</h3>
                            <p className="text-gray-600 mb-6">
                                You're all set! Your first market summary will arrive tonight at 8 PM.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>What's next?</strong><br />
                                    Check your email for a confirmation link and add us to your contacts to ensure delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white">
                        <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            Join Our Newsletter
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Stay Informed Every Evening
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Subscribe to receive the top market headlines summarized in 3 minutes or less.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-blue-100">Daily market summaries at 8 PM</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-blue-100">AI-powered insights from top sources</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-blue-100">No spam, unsubscribe anytime</span>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-8 pt-8 border-t border-blue-800">
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                                </div>
                                <span className="ml-4 text-blue-100 text-sm">
                                    Join <strong className="text-white">12,000+</strong> investors already subscribed
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                    placeholder="Acme Inc."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Subscribing...
                                    </>
                                ) : (
                                    'Start Getting Daily Updates'
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By subscribing, you agree to receive marketing emails from MarketPulse.
                                You can unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-20 pt-16 border-t border-blue-800/30">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Trusted by Busy Professionals
                        </h3>
                        <p className="text-blue-100 text-lg">
                            Join thousands who rely on MarketPulse for their daily market intelligence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-white mb-6 leading-relaxed">
                                "MarketPulse saves me 30 minutes every morning. Instead of scrolling through multiple news apps, I get everything I need in one concise email. The AI summaries are spot-on and help me make informed decisions for my portfolio."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    M
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Michael Chen</div>
                                    <div className="text-blue-200 text-sm">Senior Portfolio Manager</div>
                                    <div className="text-blue-300 text-xs">Goldman Sachs</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-white mb-6 leading-relaxed">
                                "As a busy entrepreneur, I don't have time to track every market movement. MarketPulse delivers exactly what I need to know in a format that's easy to digest. It's become an essential part of my evening routine."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    S
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Sarah Rodriguez</div>
                                    <div className="text-blue-200 text-sm">Founder & CEO</div>
                                    <div className="text-blue-300 text-xs">TechVenture Capital</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-white mb-6 leading-relaxed">
                                "The quality of analysis is impressive. MarketPulse doesn't just tell me what happened—it explains why it matters. Perfect for staying informed without getting overwhelmed by financial jargon."
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    D
                                </div>
                                <div>
                                    <div className="text-white font-semibold">David Park</div>
                                    <div className="text-blue-200 text-sm">Investment Advisor</div>
                                    <div className="text-blue-300 text-xs">Merrill Lynch</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">12,000+</div>
                            <div className="text-blue-200 text-sm">Active Subscribers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                            <div className="text-blue-200 text-sm">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">3 min</div>
                            <div className="text-blue-200 text-sm">Average Read Time</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-2">98%</div>
                            <div className="text-blue-200 text-sm">Delivery Success</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;