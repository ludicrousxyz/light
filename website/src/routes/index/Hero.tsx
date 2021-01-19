import Link from '@docusaurus/Link';
import React from 'react';

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            light.js
          </h2>
          <p className="mt-1 text-6xl font-extrabold text-gray-900 sm:text-7xl sm:tracking-tight lg:text-8xl">
            The node framework for the next generation.
          </p>
          <p className="max-w-4xl mt-5 mx-auto text-xl text-gray-500">
            Light.js is a zero-configuration Express.js/Koa.js packed with all the features but with
            the performance of a bare-metal node server. It comes with all of the best node has to
            offer with: react-hooks style templates, typescript support, and file-system based
            routing.
          </p>
          <div className="mt-4">
            <Link
              to="docs/introduction/getting-started"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
