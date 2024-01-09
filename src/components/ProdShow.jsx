import React from "react";
import Like from "/assets/like.svg";
import CartIcon from "/assets/shopping-cart.svg";

function ProdShow({ ProdImg, ProdTitle, ProdPrice }) {
  return (
    <div
      className={`relative  w-[300px] h-[400px] rounded-t-3xl lg:mt-0 md:mt-5 sm:mt-5 cursor-pointer`}
    >
      <img
        className="w-full h-full rounded-t-3xl"
        src={ProdImg}
        alt="Images of Products"
      />
      <div className="absolute bottom-0 w-full rounded-t-2xl  bg-white bg-opacity-75">
        <div className="flex justify-evenly  ">
          <h3 className="text-show-brown font-bold">{ProdTitle}</h3>
          <button className="border-none">
            <img src={Like} />
          </button>
        </div>
        <div className="flex justify-evenly mt-2">
          <h2 className="text-show-brown font-bold">{`Rs:${ProdPrice}`}</h2>
          <button className="ml-5 border-none bg-border-grey rounded-lg w-[60px] h-[25px]">
            <img className="mx-auto" src={CartIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdShow;
