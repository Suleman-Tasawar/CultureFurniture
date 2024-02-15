import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Phone from "/assets/phone.svg";
import Mail from "/assets/mail.svg";

function Contact() {
  const formD = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bt2vgoj", "template_2qoinnd", formD.current, {
        publicKey: "Kul8DNTM4QoPR2fhL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="bg-green-neutral h-[100vh] flex justify-center">
      <div className="mt-10  flex lg:flex-row md:flex-col sm:flex-col justify-between align-middle bg-white w-[90%] h-fit  rounded-2xl">
        <div className="p-3 lg:w-[50%] md:w-[60%] sm:w-[90%] ">
          <h1 className="text-4xl font-bold">
            Get in <span className="text-light-yellow ">Touch</span>
          </h1>

          <p className="font-bold mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <form ref={formD} onSubmit={sendEmail}>
            <div className="mt-3 border-border-grey border-[1px] bg-white rounded-full">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="text"
                name="customer name"
                placeholder="Name"
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white rounded-full">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white rounded-full">
              <input
                className="border-none outline-none w-full h-[40px] "
                type="tel"
                name="user_phoneNo"
                placeholder="Phone Number"
              />
            </div>

            <div className="  mt-3 w-full h-[40px] border-border-grey border-[1px] bg-white rounded-full">
              <select
                name="user_reason"
                className="border-none outline-none w-full h-[40px]"
              >
                <option value="How did you find us">How did you find us</option>
                <option value="Through Social Media">
                  Through Social Media
                </option>
                <option value="Through Friends">Through Friends</option>
                <option value="Through Ads">Through Ads</option>
              </select>
            </div>

            <div className=" mt-3 w-full border-border-grey border-[1px] bg-white rounded-full">
              <textarea name="message" placeholder="Type your message here" />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full h-[40px] bg-light-yellow hover:bg-neutral-yellow text-white"
              >
                Send
              </button>
            </div>
          </form>
          <div className="flex justify-between lg:flex-row md:flex-col sm:flex-col align-middle mt-4">
            <div className="flex">
              <div>
                <img className="w-full h-full" src={Phone} alt="Call" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <a href="tel:+123443463663">123443463663</a>
              </div>
            </div>
            <div className="flex ">
              <div>
                <img className="w-full h-full" src={Mail} alt="Mail" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <a href="mailto:support@ethnic.com">support@ethnic.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] md:w-0 sm:w-0  bg-primary"></div>
      </div>
    </section>
  );
}

export default Contact;
