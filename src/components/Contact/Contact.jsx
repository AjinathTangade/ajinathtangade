import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  const mySocial = [
    {
      id: 1,
      socialName: "Instagram",
      socialIcon: "instagram.png",
    },
    {
      id: 2,
      socialName: "linkedin",
      socialIcon: "linkedin.png",
    },
    {
      id: 3,
      socialName: "GitHub",
      socialIcon: "github-b.svg",
    },
  ];
  return (
    <div className="bg-[#f3f8ff] w-full z-1" id="contact">
      <div className="max-w-screen-xl mx-auto py-10 md:pb-16 px-5">
        <div className="relative z-20 flex mb-10 lg:mb-14">
          <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
            Contact Us
          </h2>
          <div className="absolute top-[30px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
        </div>
        <div className="">
          <section className="">
            <div className="mx-auto max-w-screen-xl lg:py-14">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 ">
                  <div className="flex flex-col gap-6 lg:gap-12">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold">
                        My Socials
                      </h2>
                      <div className="flex gap-8 flex-wrap flex-base mt-4 lg:mt-6">
                        {mySocial.map((socialLink, index) => (
                          <div key={index} className="group relative">
                            <h3 className="group-hover:block hidden text-sm -left-2 lg:text-medium font-semibold absolute -top-7 w-[80px]">
                              {socialLink.socialName}
                            </h3>
                            <div className="w-8 h-8 bg-sky-50 cursor-pointer">
                              <Link to="/">
                                {" "}
                                <img
                                  src={socialLink.socialIcon}
                                  alt={socialLink.socialName}
                                  className="grayscale w-[30px] object-contain group-hover:grayscale-0"
                                />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-4">
                      <h2 className="text-xl md:text-2xl font-semibold">
                        Phone Number
                      </h2>
                      <div className="flex gap-3 ">
                        <p className="flex items-center">
                          <i className="fi fi-sr-phone-call text-xl font-semibold text-gray-500 flex"></i>
                        </p>
                        <h3 className="text-xl font-semibold text-gray-500">
                          {" "}
                          +91 7507424640
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-xl md:text-2xl font-semibold">
                        Email Address
                      </h2>
                      <div className="flex gap-3 ">
                        <p className="flex items-center ">
                          <i className="fi fi-sr-envelope text-xl font-semibold text-gray-500 flex"></i>
                        </p>

                        <h3 className="text-xl font-semibold text-gray-500">
                          {" "}
                          ajinathtangade123@gmail.com
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[10px] bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
                  <form action="#" className="space-y-4">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="w-full rounded-[6px] border border-gray-200 p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="w-full rounded-[6px] border border-gray-200 p-3 text-sm border-1"
                          placeholder="Email address"
                          type="email"
                          id="email"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className="w-full rounded-[6px] border border-gray-200 p-3 text-sm"
                          placeholder="Phone Number"
                          type="tel"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>

                      <textarea
                        className="w-full rounded-[6px] border-gray-200 p-3 text-sm border"
                        placeholder="Message"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-[5px] bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
