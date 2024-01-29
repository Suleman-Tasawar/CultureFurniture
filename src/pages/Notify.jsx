import React, { useState } from "react";
import email from "/assets/email.svg";

function Notify() {
  const [emailList, setEmailList] = useState("");

  function handleNotifications(event) {
    setEmailList(event.target.value);
  }

  return (
    <section className=" bg-primary h-[100vh] flex flex-col justify-center items-center">
      <div className="lg:w-[50%] md:w-[60%] sm:w-[70%] text-center">
        <h1 className="text-neutral-yellow text-4xl font-bold">
          NOTIFY THE LAUNCH
        </h1>
        <p className="text-xl text-white mt-5">
          Subscribe to get the latest news about us
        </p>
        <form className="mt-3">
          <div className="mt-auto flex lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between  place-items-center align-middle bg-white rounded-lg  w-[90%] p-2">
            <div className="flex mt-2 w-full">
              <div>
                <img src={email} alt="Email" />
              </div>
              <div className="w-full">
                <input
                  className="border-none outline-none w-full bg-white"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={handleNotifications}
                />
              </div>
            </div>
            <div>
              <button className="w-[150px] h-[40px] lg:mt-0 md:mt-0 sm:mt-5 bg-neutral-yellow text-show-brown rounded-xl">
                Register
              </button>
            </div>
          </div>
        </form>

        <p className="mt-5 text-lg text-white">
          Subscribe to get information about the latest item in the stock and by
          subsribing to our newsletter you are allowing us to tell you about the
          latest item in out stock
        </p>
      </div>
    </section>
  );
}

export default Notify;
