import React from "react";
import FaceBook from "/assets/facebook.svg";
import Instagram from "/assets/instagram.svg";
import LinkedIn from "/assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative pt-10 bg-primary w-[100%] h-fit flex justify-evenly align-middle lg:flex-row md:flex-col sm:flex-col ">
      <div className="sm:mx-auto">
        <img src="/assets/home.png" alt="Hero Image" />
      </div>

      <div className="lg:w-[45%] md:w-[50%] sm:-w">
        <div className="p-3  text-grey text-center mx-auto">
          <h1 className="text-5xl font-serif text-light-yellow">
            ETHNO Woodwares
          </h1>

          <p className="mt-3">
            Explore the rich tapestry of Pakistani culture through our curated
            collection of traditional furniture. Our ecommerce platform
            showcases exquisite pieces that blend heritage with modern
            aesthetics, offering a unique fusion for your home. Dive into a
            world where craftsmanship meets cultural elegance. Welcome to a
            journey through Pakistani Cultural Furniture.
          </p>
        </div>

        <div className="mb-24">
          <button className="hover:bg-neutral-yellow hover:transition mt-5 w-full h-[45px] bg-light-yellow text-background rounded-full">
            <Link to="/notify">Notify the Launch</Link>
          </button>
          <button className="hover:bg-light-yellow hover:transition-all mt-3 w-full h-[45px] bg-neutral-yellow text-background rounded-full">
            <Link to="/contact">Stay in touch</Link>
          </button>
        </div>

        <div className="absolute flex justify-center bottom-6 left-0 p-4  bg-light-yellow w-[100%] h-[70px] rounded-lg">
          <ul className="flex mx-auto">
            <li className="ml-8 cursor-pointer ">
              {" "}
              <img src={FaceBook} alt="Social Media Icons" />
            </li>
            <li className="ml-11 cursor-pointer ">
              {" "}
              <img src={Instagram} alt="Social Media Icons" />
            </li>
            <li className="ml-14 cursor-pointer ">
              {" "}
              <img src={LinkedIn} alt="Social Media Icons" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
