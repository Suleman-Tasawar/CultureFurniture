import React from "react";
import Like from "/assets/like.svg";
import CartIcon from "/assets/shopping-cart.svg";

function ProdShow({ ProdImg, ProdTitle, ProdPrice }) {
  return (
    <div className="relative bg-[url('/assets/prod--bed3.png')] w-[300px] h-[400px] rounded-t-3xl">
      <div className="absolute bottom-0 w-full rounded-t-2xl  bg-white bg-opacity-75">
        <div className="flex justify-evenly  ">
          <h3 className="text-show-brown">{ProdTitle}</h3>
          <button className="border-none">
            <img src={Like} />
          </button>
        </div>
        <div className="flex justify-evenly ">
          <h2 className="text-show-brown">{ProdPrice}</h2>
          <button className="border-none bg-border-grey rounded-lg w-[60px] h-[25px]">
            <img className="mx-auto" src={CartIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdShow;
