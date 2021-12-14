import React from 'react';

const NewsletterBanner = () => {
  return (
    <div className="bg-black text-white py-6 px-10 text-sm flex justify-between items-center">
      <div>
        <h1>
          Subscribe to our newsletter to keep up with new releases, articles,
          and more!
        </h1>
      </div>
      <div className="border border-opacity-50 p-2 rounded-md space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-black"
        />
        <button className="text-blue-400 hover:text-blue-600">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterBanner;
