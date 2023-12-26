import React, { useState } from "react";
import Phone from "/assets/phone.svg";
import Mail from "/assets/mail.svg";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phoneNo: "",
    email: "",
    reason: "",
  });

  function handleForm(event) {
    setForm((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  console.log(form);
  return (
    <section className="bg-green-neutral h-[100vh] flex justify-center">
      <div className="mt-10  flex lg:flex-row md:flex-col sm:flex-col justify-between align-middle bg-white w-[70%] h-fit  rounded-2xl">
        <div className="p-3 lg:w-[50%] md:w-[60%] sm:w-[70%] ">
          <h1 className="text-4xl font-bold">
            Get in <span className="text-light-yellow ">Touch</span>
          </h1>

          <p className="font-bold mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <form>
            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleForm}
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px]"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleForm}
              />
            </div>

            <div className="mt-3 border-border-grey border-[1px] bg-white">
              <input
                className="border-none outline-none w-full h-[40px] "
                type="tel"
                name="phoneNo"
                placeholder="Phone Number"
                onChange={handleForm}
              />
            </div>

            <div className="  mt-3 w-full h-[40px] border-border-grey border-[1px] bg-white">
              <select
                name="reason"
                className="border-none outline-none w-full h-[40px]"
                onChange={handleForm}
              >
                <option value="How did you find us">How did you find us</option>
                <option value="Through Social Media">
                  Through Social Media
                </option>
                <option value="Through Friends">Through Friends</option>
                <option value="Through Ads">Through Ads</option>
              </select>
            </div>

            <div className="mt-4">
              <button className="w-full h-[40px] bg-light-yellow text-white">
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
        <div className="w-[30%]  bg-primary"></div>
      </div>
    </section>
  );
}

export default Contact;
