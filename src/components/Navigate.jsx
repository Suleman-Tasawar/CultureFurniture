import React from "react";
import { Link } from "react-router-dom";
import Arrow from "/assets/Arrow1.svg";

function Navigate() {
  return (
    <nav className=" mt-3 flex justify-between align-middle">
      <div>
        <Link
          to=".."
          className="flex w-[50px] h-[30px] rounded-full bg-button-background"
        >
          <img src={Arrow} />
        </Link>
      </div>
      <div>
        <button className="hover:bg-neutral-yellow hover:transition w-[150px] h-[35px] bg-light-yellow text-background rounded-full">
          <Link to="/notify">Notify the Launch</Link>
        </button>
        <button className="hover:bg-light-yellow hover:transition-all  w-[150px] h-[35px] bg-neutral-yellow text-background rounded-full">
          <Link to="/contact">Stay in touch</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navigate;
