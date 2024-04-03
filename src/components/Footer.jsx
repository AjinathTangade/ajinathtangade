import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from "react-router-dom";
const social = [
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
  }
];
function Footer() {
  return (
    <div className="bg-blue-50 w-full z-1">
      <div className="max-w-screen-2xl mx-auto py-10 md:py-16  px-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-md font-semibold text-gray-500 hover:text-blue-600">
              © 2024 Ajinath Tangade. All rights reserved.
            </h3>
          </div>
          <div className="flex gap-4 flex-wrap ">
            {social.map((socialLink, index) => (
              <div key={index} className="group relative">
                <h3 className="group-hover:block hidden text-sm	lg:text-lg font-semibold text-center absolute -top-10 w-[8 0px]">
                  {socialLink.socialName}
                </h3>
                <div
                  className="w-14 h-14 flex justify-center items-center bg-sky-50 rounded-full  group-hover:bg-white group-hover:shadow-lg cursor-pointer 
                                transform transition duration-500 
                                group-hover:scale-110"
                >
                    <Link to="/"> <img src={socialLink.socialIcon} alt={socialLink.socialName} className="grayscale w-[30px] object-contain group-hover:grayscale-0" /></Link>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
