"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import './resources.css';

const Resources = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    company: "",
    role: "",
    country: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the success page URL for FormSubmit redirect
  const successUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/resources/success`
    : '/resources/success';



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Allow the form to submit naturally to FormSubmit
    // FormSubmit will handle the redirect based on the _next field
    console.log("Form submitted:", formData);
    
    // Safety timeout in case redirect doesn't work
    setTimeout(() => {
      setIsSubmitting(false);
    }, 10000); // Reset after 10 seconds as fallback
    
    // Don't prevent default - let the form submit naturally
    // The _next field will redirect to success page
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-24 resources-container">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="resources-grid grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:pr-4"
          >
            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight"
              >
                Get Your{" "}
                <span 
                  className="gradient-text-fix"
                  style={{
                    background: 'linear-gradient(to right, #FF33CC, #0055FF)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Free Copy
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 leading-tight"
              >
                The Intelligent Shift <br /> Beyond Code & Culture <br /> A Practical Playbook
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl"
            >
              THE AI PLAYBOOK FOR LEADERS <br /> WHO NEED RESULTS, NOT THEORY
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                What&apos;s Inside:
              </h3>
                            <div className="resources-features-grid grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {[
                  "Proven AI Implementation Frameworks",
                  "30-Day Pilot Roadmap",
                  "Cultural Transformation Playbook",
                  "Real-World Case Studies",
                  "ROI Measurement Strategies",
                  "Change Management Guidelines"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#FF33CC] to-[#0055FF] rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200"
            >
              <div className="resources-trust-indicators grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">AI Implementations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12 lg:sticky lg:top-8 border border-gray-100"
          >
            <form 
              onSubmit={handleSubmit} 
              action="https://formsubmit.co/ab1285186ce22c512da355ffb714b0d8"
              method="POST"
              className="space-y-5 sm:space-y-6"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={successUrl} />
               <input type="hidden" name="_subject" value="New AI Playbook Download Request" />
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_template" value="table" />
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/Cover.png" 
                    alt="AI Playbook Cover" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Download Your Copy
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Join thousands of managers transforming their organizations with AI
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="resources-form-field w-full px-4 py-3 rounded-xl transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <label htmlFor="businessEmail" className="block text-sm font-semibold text-gray-900">
                  Business Email Address *
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="resources-form-field w-full px-4 py-3 rounded-xl transition-all duration-200"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="resources-form-field w-full px-4 py-3 rounded-xl transition-all duration-200"
                  placeholder="Your company name"
                  required
                />
              </div>

              {/* Role and Country Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-900">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="resources-form-field w-full px-4 py-3 rounded-xl transition-all duration-200"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="CXO">C-Level Executive</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-900">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="resources-form-field w-full px-4 py-3 rounded-xl transition-all duration-200"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
                    <option value="JP">Japan</option>
                    <option value="IN">India</option>
                    <option value="SG">Singapore</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 bg-white"
                />
                <label htmlFor="newsletter" className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  I&apos;d like to receive future insights and updates from Enpointe Global about 
                  AI transformation, digital innovation, and industry trends.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`resources-button w-full ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#FF33CC] to-[#0055FF] hover:shadow-lg'
                } text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Get My Copy Now'
                )}
              </motion.button>

              {/* Security Note */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default Resources;
