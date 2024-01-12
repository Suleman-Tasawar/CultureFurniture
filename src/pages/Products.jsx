import React from "react";
import { Link } from "react-router-dom";

import ProdImg from "/assets/prod--img.png";
import ProdBed from "/assets/prod--bed.svg";
import ProdCloset from "/assets/prod--closet.svg";
import ProdSofa from "/assets/prod--sofa.svg";
import ProdTable from "/assets/prod--table.svg";
import ProdRack from "/assets/prod--rack.svg";

export default function Products() {
  return (
    <section className="pt-12 flex lg:flex-row md:flex-col sm:flex-col justify-center align-middle bg-primary lg:h-[567px] md:h-full sm:h-full">
      <div className=" lg:w-[40%] md:w-[50%] sm:w-[60%] sm:mx-auto">
        <img src={ProdImg} alt="Product Page" />
      </div>
      <div className="flex lg:flex-row-reverse md:flex-col sm:flex-col justify-center align-middle">
        <div className="ml-12 w-[10%] text-center">
          <h1 className="font-serif mt-22 text-6xl text-show-brown lg:rotate-90">
            Categories
          </h1>
        </div>

        <div className="text-center lg:mt-0 md:mt-5 sm:mt-5">
          <div className="grid place-items-center lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4  lg:gap-7 md:gap-3 sm:gap-0 text-center align-middle">
            <Link to="/products/products-page/:sofas">
              <div className=" w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
                <img className="mx-4" src={ProdSofa} />
                <h1 className="text-show-brown text-2xl">Sofa</h1>
              </div>
            </Link>

            <Link to="/products/products-page/:beds">
              <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
                <img className="mx-4" src={ProdBed} />
                <h1 className="text-show-brown text-2xl">Bed</h1>
              </div>
            </Link>

            <Link to="/products/products-page/:closets">
              <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
                <img className="mx-4" src={ProdCloset} />
                <h1 className="text-show-brown text-2xl">Closet</h1>
              </div>
            </Link>

            <Link to="/products/products-page/:tables">
              <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
                <img className="mx-4" src={ProdTable} />
                <h1 className="text-show-brown text-2xl">Table</h1>
              </div>
            </Link>

            <Link to="/products/products-page/:racks">
              <div className="lg:w-[100px] md:w-[100px] sm:w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer mt-4">
                <img src={ProdRack} />
                <h1 className="text-show-brown text-2xl">Rack</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
