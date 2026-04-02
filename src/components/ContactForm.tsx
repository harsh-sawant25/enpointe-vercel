"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    budget: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 flex justify-center">
      <div className="w-full max-w-2xl p-4">
        <h2 className="text-[40px] font-bold text-center mb-3">
          Let&apos;s Talk
        </h2>
        <p className="text-xl font-light text-center text-gray-600 mb-6">
          We have worked with clients of all sizes, from enterprise brands to
          funded startups. Let&apos;s talk about your project and how we can
          help provide value.
        </p>

        <form
          action="https://formsubmit.co/ss@enpointe.io"
          method="POST"
          className="w-full max-w-3xl bg-white space-y-4 sm:space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Honeypot field (Hidden field to prevent spam bots) */}
          <input type="text" name="_honey" className="hidden" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            />
            <select
              name="budget"
              className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
              onChange={handleChange}
              required
            >
              <option value="">Budget</option>
              <option value="Less than 50K">Less than 50K</option>
              <option value="50-100K">$50,000 - $100,000</option>
              <option value="100-150K">$100,000 - $150,000</option>
              <option value="150-250K">$150,000 - $250,000</option>
              <option value="250-350K">$250,000 - $350,000</option>
              <option value="350-500K">$350,000 - $500,000</option>
              <option value="500-750K">$500,000 - $750,000</option>
              <option value="750K-1 Million">$750,000 - $1 Million</option>
              <option value="1 Million+">$1 Million+</option>
            </select>
          </div>
          <textarea
            name="about"
            placeholder="Tell us about your project. What problem can we help you solve?"
            className="p-2 sm:p-3 border border-gray-300 rounded w-full hover:shadow-md"
            onChange={handleChange}
            required
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white p-3 rounded cursor-pointer w-full md:w-auto px-6 hover:ring-4 hover:ring-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
