import React from "react";
import { Link } from "react-router-dom";
import Arrow from "/assets/Arrow1.svg";

function Navigate() {
  return (
    <nav className="bg-primary pt-3 flex justify-between align-middle">
      <div>
        <Link
          to="."
          className="flex w-[50px] h-[30px] rounded-xl bg-button-background hover:bg-green-neutral hover:transition-all"
        >
          <img className="ml-2 w-8 h-8" src={Arrow} />
        </Link>
      </div>
      <div className="font-serif">
        <button className="hover:bg-show-brown hover:text-white hover:transition w-[150px] h-[30px] bg-light-yellow text-background rounded-xl mr-3">
          <Link to="/notify">Notify the Launch</Link>
        </button>
        <button className="hover:bg-dark-brown hover:text-white hover:transition-all  w-[110px] h-[30px] bg-neutral-yellow text-background rounded-xl mr-3">
          <Link to="/contact">Stay in touch</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navigate;
