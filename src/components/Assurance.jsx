import React from "react";
import ImgQuality from "/assets/quality.svg";
import ImgShipping from "/assets/shipping.svg";
import ImgSupport from "/assets/support.svg";
import ImgWarrenty from "/assets/warrenty.svg";

export default function Assurance() {
  return (
    <div className="bg-primary flex lg:flex-row md:flex-col sm:flex-col justify-evenly align-middle text-white lg:mt-0 md:mt-5 sm:mt-5 lg:mx-0 md:mx-auto sm:mx-auto">
      <div>
        <img src={ImgQuality} alt="ImgQuality" />
        <h1> High Quality</h1>
      </div>
      <div>
        <img src={ImgWarrenty} alt="ImgWarrenty" />
        <h1>Warrenty Protection</h1>
      </div>
      <div>
        <img src={ImgShipping} alt="ImgShipping" />
        <h1>Free Shipping</h1>
      </div>
      <div>
        <img src={ImgSupport} alt="ImgSupport" />
        <h1>24/7 Support</h1>
      </div>
    </div>
  );
}
