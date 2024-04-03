import React from "react";
import { Link } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.css";
import MobileNav from "./MobileNav";
const NavLink = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Case Studies",
    href: "allprojects",
  },
  {
    id: 3,
    label: "Contact",
    href: "contact",
  },
];

function NavBar() {
  return (
    <div className="relative z-30">
      <nav className="bg-[#f3f8ff] fixed top-0 dark:bg-gray-900 w-full z-20 start-0 ">
        <div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 h-20 px-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="./logo-l.png" className="h-11" alt="Flowbite Logo" />
            </Link>
            <div
              className="hidden w-full md:flex md:w-auto items-center gap-9"
              id="navbar-sticky"
            >
              <div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  {NavLink.map((link, index) => (
                    <li key={index}>
                      <Link
                       to={link.href}
                        className="block py-2 px-3 text-base text-black font-semibold"
                        aria-current="page"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  type="button"
                  className="text-black text-base flex gap-1 items-center font-semibold"
                >
                  <span className="h-4 flex ">
                    <i className="fi fi-br-download text-sm"></i>
                  </span>
                  <p>Resume</p>
                </Link>
              </div>
              
            </div>
            <div className="block md:hidden">
                <MobileNav NavLinks={NavLink} />
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
