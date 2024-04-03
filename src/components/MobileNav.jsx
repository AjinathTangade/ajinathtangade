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
                      <Link
                        href={link.href}
                        className="block py-2 text-base text-black font-semibold"
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
