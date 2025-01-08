import React from "react";
import { benefits } from "../../data";

function Benefits() {
  return (
    <div className="container mx-auto px-4 py-16" id="benefits">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 uppercase font-tertiary tracking-[3px]">Our Benefits</h2>
        <p className="text-gray-600 mt-2 font-tertiary">
          Discover the unique advantages we offer for your convenience.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="shadow-lg flex flex-col items-center p-6 bg-white hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-accent text-white rounded-full mb-4">
              <benefit.icon className="text-3xl" />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {benefit.name}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
