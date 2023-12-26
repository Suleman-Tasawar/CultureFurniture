import React from "react";
import FaceBook from "/assets/facebook.svg";
import Instagram from "/assets/instagram.svg";
import LinkedIn from "/assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className=" pt-10 bg-primary w-[100%] h-fit flex justify-evenly align-middle lg:flex-row md:flex-col sm:flex-col ">
      <div className="sm:mx-auto">
        <img src="/assets/home.png" alt="Hero Image" />
      </div>

      <div>
        <div className="p-3 w-[300px]  border border-grey rounded-3xl text-grey text-center mx-auto">
          <h1 className="text-4xl">ETHNO</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil
            neque fuga totam quae quos distinctio quia deleniti, laborum, dicta
            blanditiis minima accusamus molestiae quidem voluptate deserunt!
            Porro, nemo delectus.
          </p>
        </div>

        <button className="hover:bg-neutral-yellow hover:transition mt-5 w-full h-[45px] bg-light-yellow text-background rounded-full">
          <Link to="/notify">Notify the Launch</Link>
        </button>
        <button className="hover:bg-light-yellow hover:transition-all mt-3 w-full h-[45px] bg-neutral-yellow text-background rounded-full">
          <Link to="/contact">Stay in touch</Link>
        </button>

        <div className="p-4 mt-7 bg-light-yellow w-[100%] h-[70px] rounded-lg">
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
