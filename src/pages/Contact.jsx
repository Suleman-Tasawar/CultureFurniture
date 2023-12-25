import React from "react";
import Phone from "/assets/phone.svg";
import Mail from "/assets/mail.svg";

function Contact() {
  return (
    <section className="bg-green-neutral h-[100vh] flex justify-center">
      <div className="mt-10  flex lg:flex-row md:flex-col sm:flex-col justify-between align-middle bg-white w-[70%] lg:h-[450px] md:h-fit sm:h-fit  rounded-2xl">
        <div className="p-3 lg:w-[50%] md:w-[60%] sm:w-[70%] ">
          <h1 className="text-4xl font-bold">
            Get in <span className="text-light-yellow ">Touch</span>
          </h1>

          <p className="font-bold mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <form action="#">
            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px] "
                type="tel"
                name="num"
                id="num"
                placeholder="Phone Number"
              />
            </div>

            <div className="  mt-3 w-full h-[40px] border-border-grey border-[1px] bg-white">
              <select
                name="find us"
                className="border-none outline-none w-full h-[40px]"
              >
                <option value="1">How did you find us</option>
                <option value="2">Through Social Media</option>
                <option value="3">Through Friends</option>
                <option value="4">Through Ads</option>
              </select>
            </div>

            <div className="mt-4">
              <button className="w-full h-[40px] bg-light-yellow text-white">
                Send
              </button>
            </div>
          </form>
          <div className="flex justify-between md:flex-col sm:flex-col align-middle mt-4">
            <div className="flex">
              <div>
                <img className="w-full h-full" src={Phone} alt="Call" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p>123443463663</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img className="w-full h-full" src={Mail} alt="Mail" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p>support@ethnic.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]  bg-primary"></div>
      </div>
    </section>
  );
}

export default Contact;
