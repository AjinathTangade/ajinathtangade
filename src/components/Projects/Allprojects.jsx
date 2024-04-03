import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import {feaProjects} from "../Featured";
function Allprojects() {
  return (
    <div className="w-full z-1">
      <div className="max-w-screen-xl mx-auto py-10 md:py-24 px-5 mt-12">
        <div className="relative z-20 flex justify-center items-center">
          <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
            Recent Case Studies
          </h2>
          <div className="absolute top-[30px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
        </div>

        <div className="mt-16">
          <FeaturedProjects feaProjects={feaProjects} />
        </div>
      </div>
    </div>
  );
}

export default Allprojects;
