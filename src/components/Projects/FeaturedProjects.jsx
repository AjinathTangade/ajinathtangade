import React from "react";
import { Link } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.css";

function FeaturedProjects({feaProjects}) {
  return (
    
      <div className="mt-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {feaProjects.map((project, index) => (
              <div
                key={index}
                className="shadow-lg shadow-gray p-5 rounded-[10px] bg-blue-50 hover:shadow-blue-300 transform transition duration-500 
              hover:scale-80"
              >
                <img src={project.img} alt={project.projectTitle} />
                <div className="mt-5">
                  <h3 className="text-xl font-semibold">
                    {project.projectTitle}
                  </h3>
                  <ul className="flex gap-3 mt-3 flex-wrap w-full ">
                    {project.technology.map((tech) => (
                      <li
                        key={tech}
                        className="h-8 text-xs px-3 rounded-full font-medium bg-blue-600 text-white flex justify-center items-center hover:text-blue-600  hover:bg-white hover:border hover:border-blue-600  duration-500 
                      hover:scale-100"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/" className="flex gap-4 items-center h-14 hover:text-blue-600 font-semiblod">
                  See Detail Project{" "}
                  <span className="">
                    <i className="fi fi-rr-arrow-right text-blue-600 flex items-center justify-center text-2xl font-semibold"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}

export default FeaturedProjects;
