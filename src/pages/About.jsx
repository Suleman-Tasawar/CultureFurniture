import React from "react";

export default function About() {
  return (
    <div className="bg-background text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to Our Pakistani Style Furniture
      </h1>

      <p className="text-lg mb-4">
        At Pakistani Style Furniture, we take pride in crafting exquisite
        furniture that reflects the rich heritage and cultural aesthetics of
        Pakistan. Our commitment to quality craftsmanship and attention to
        detail sets us apart.
      </p>

      <p className="text-lg mb-4">
        Immerse yourself in the beauty of our handcrafted designs, inspired by
        the diversity of Pakistani styles. From intricate woodwork to vibrant
        colors, each piece tells a story of tradition and elegance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Add images or product showcase here */}
        <div className="bg-primary p-4 rounded-lg">
          <img
            src="/assets/prod--chairM2.png"
            alt="Furniture Example 1"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="bg-primary p-4 rounded-lg">
          <img
            src="/assets/prod--bed1.png"
            alt="Furniture Example 2"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="bg-primary p-4 rounded-lg">
          <img
            src="/assets/prod--table4.jpg"
            alt="Furniture Example 3"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      <p className="text-lg mt-8">
        Explore our collection and bring the elegance of Pakistani craftsmanship
        into your home. Our furniture is not just a piece; it's a statement of
        style, tradition, and warmth.
      </p>
    </div>
  );
}
