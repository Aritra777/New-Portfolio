import Link from 'next/link'
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const [loader, setLoader] = useState(false)
    const [inputFields, setInputFields] = useState({
      name: "",
      email: "",
      message: ""
    });
  
    const handleChange = (e) => {
      e.preventDefault();
      setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, form.current, process.env.EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div>
      <section id="contact" className="bg-mainBg-800 text-fadeText body-font h-[100vh] w-full grid md:grid-cols-2 grid-cols-1">
        <div className="grid place-items-center">
            <div className="space-y-8">
          <p className="sub_heading" data-aos="fade-right">Contact</p>
          <p className="main_heading" data-aos="fade-right">Want to go online?</p>
          <p className="text-base text-fadeText mt-4" data-aos="fade-right">Send me a messege or you can email me at <br/> <Link href="mailto:aritrabiswas123.kulti@gmail.com" ><a> aritrabiswas123.kulti@gmail.com</a></Link> </p>
            </div>
        </div>
        <div className="flex justify-center md:pr-10 flex-col gap-4">
        {/* <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"> */}
            <h2 className="text-fadeText text-3xl mb-1 font-medium title-font">
              Contact
            </h2>
            <form ref={form} onSubmit={sendEmail} >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-fadeText">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputFields.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-mainBg-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-fadeText">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputFields.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-mainBg-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-fadeText">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={inputFields.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button type='submit' className="text-white bg-mainBg-300  py-2 px-6 focus:outline-none hover:bg-mainBg-500 rounded text-lg">
              Submit
            </button>
            </form>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Contact;
