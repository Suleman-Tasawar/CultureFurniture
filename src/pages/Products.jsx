import React from "react";
import ProdImg from "/assets/prod--img.png";
import ProdBed from "/assets/prod--bed.svg";
import ProdCloset from "/assets/prod--closet.svg";
import ProdSofa from "/assets/prod--sofa.svg";
import ProdTable from "/assets/prod--table.svg";
import ProdRack from "/assets/prod--rack.svg";

export default function Products() {
  return (
    <section className="pt-5 flex lg:flex-row md:flex-col sm:flex-col justify-evenly align-middle bg-primary h-fit">
      <div className="lg:w-[40%] md:w-[50%] sm:w-[60%] sm:mx-auto">
        <img src={ProdImg} alt="Product Page" />
      </div>
      <div className="text-center lg:mt-0 md:mt-5 sm:mt-5">
        <div className="grid grid-cols-2 grid-rows-2 lg:gap-7 md:gap-3 sm:gap-3 text-center align-middle">
          <div className=" w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
            <img className="mx-4" src={ProdSofa} />
            <h1 className="text-show-brown text-2xl">Sofa</h1>
          </div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
            <img className="mx-4" src={ProdBed} />
            <h1 className="text-show-brown text-2xl">Bed</h1>
          </div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
            <img className="mx-4" src={ProdCloset} />
            <h1 className="text-show-brown text-2xl">Closet</h1>
          </div>
          <div className="w-[100px] h-[100px] bg-white rounded-lg  cursor-pointer">
            <img className="mx-4" src={ProdTable} />
            <h1 className="text-show-brown text-2xl">Table</h1>
          </div>
        </div>
        <div className="w-full h-[100px] bg-white rounded-lg  cursor-pointer mt-4">
          <img className="mx-24" src={ProdRack} />
          <h1 className="text-show-brown text-2xl">Rack</h1>
        </div>
      </div>
    </section>
  );
}
