"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SuccessPage = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/AI for Business Leaders.pdf';
      link.download = 'AI for Business Leaders.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show downloading state for a brief moment
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl 2xl:max-w-6xl mx-auto text-center space-y-6 sm:space-y-8"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Confirmation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
            Your E-book is Ready!
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-3">
              Click below to download
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              <strong>The Intelligent Shift <br /> Beyond Code & Culture</strong>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 italic font-medium">
              &quot;THE AI PLAYBOOK FOR LEADERS WHO NEED RESULTS, NOT THEORY&quot;
            </p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            whileHover={!isDownloading ? { scale: 1.05 } : {}}
            whileTap={!isDownloading ? { scale: 0.95 } : {}}
            className={`inline-flex items-center space-x-3 ${
              isDownloading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#FF33CC] to-[#0055FF] hover:shadow-lg'
            } text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer text-lg`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Your Playbook</span>
              </>
            )}
          </motion.button>
          
          {/* Fallback download link */}
          <p className="text-sm text-gray-600">
            Having trouble downloading?{" "}
            <a 
              href="/AI for Business Leaders.pdf" 
              download="AI for Business Leaders.pdf"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Click here for direct download
            </a>
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-800">What&apos;s Next?</h2>
          
          <div className="grid md:grid-cols gap-8">
            {/* Strategy Session CTA */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Ready to Implement AI?
              </h3>
              <p className="text-gray-600">
                Book a complimentary AI Strategy Session with our transformation team
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors duration-300"
              >
                Book Strategy Session
              </motion.a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="border-t pt-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-15 h-15 bg-black rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">EP</span>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-gray-800">Enpointe Global Team</h4>
                <p className="text-gray-600 text-sm">
                  &quot;With over 10 years of digital transformation experience, we&apos;ve helped 
                  500+ organizations successfully implement AI solutions.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Homepage</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SuccessPage;