import React from "react";
import email from "/assets/email.svg";

function Notify() {
  return (
    <section className="mx-auto bg-primary h-[100vh] flex flex-col justify-center align-middle">
      <h1 className="text-neutral-yellow text-4xl font-bold">
        NOTIFY THE LAUNCH
      </h1>

      <p className="text-xl text-white mt-5">
        Subscribe to get the latest news about us
      </p>

      <form action="post">
        <div className="mt-5 flex justify-between align-middle bg-white rounded-lg  w-[70%] p-2">
          <div className="flex mt-2">
            <div>
              <img src={email} alt="Email" />
            </div>
            <div>
              <input
                className="border-none outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div>
            <button className="w-[150px] h-[40px] bg-neutral-yellow text-show-brown rounded-xl">
              Register
            </button>
          </div>
        </div>
      </form>

      <div className="mt-5 w-[50%] text-white text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          repellat asperiores, distinctio laudantium consequatur rerum saepe,
          dolorem, fugit facilis ratione tempore aperiam quisquam harum hic
          magni voluptate error voluptatibus assumenda?
        </p>
      </div>
    </section>
  );
}

export default Notify;
