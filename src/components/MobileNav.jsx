import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

function MobileNav({ NavLinks }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjusted by header height if needed
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <i className="fi fi-br-bars-sort text-2xl font-semibold"></i>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div>
                <ul className="flex flex-col pt-5 font-medium text-left">
                  {NavLinks.map((link, index) => (
                    <li key={index}>
                      {link.section ? (
                        <Link
                          onClick={() =>
                            scrollToSection(link.href.substring(1))
                          }
                          className="block py-2  text-base text-black font-semibold"
                          aria-current="page"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link
                          onClick={() =>
                            scrollToSection(link.href.substring(1))
                          }
                          className="block py-2 text-base text-black font-semibold"
                          aria-current="page"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  type="button"
                  className="text-black text-base font-semibold flex gap-1 items-center mt-1"
                >
                  <span className="h-4 flex">
                    <i className="fi fi-br-download text-sm"></i>
                  </span>
                  <p>Resume</p>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
