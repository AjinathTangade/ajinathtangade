import React from 'react'
import FeaturedProjects from './Projects/FeaturedProjects';
export const feaProjects = [
    {
      id: 1,
      img: "project1.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
      id: 2,
      img: "project2.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
      id: 3,
      img: "project3.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
      id: 4,
      img: "project1.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
      id: 5,
      img: "project1.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
      id: 6,
      img: "project1.png",
      projectTitle: "JobIT - A Job Finding Application",
      technology: ["WordPress", "WooCommarces", "Elementor"],
    },
    {
        id: 7,
        img: "project1.png",
        projectTitle: "JobIT - A Job Finding Application",
        technology: ["WordPress", "WooCommarces", "Elementor"],
      },
  ];


function Featured() {
    const firstFourProjects = feaProjects.slice(0, 6);
  return (
    <div className="max-w-screen-xl mx-auto py-10 md:py-16 px-5">
      <div className="relative z-20 flex justify-center items-center">
        <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
          Featured Projects
        </h2>
        <div className="absolute top-[30px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
      </div>
      <FeaturedProjects feaProjects={firstFourProjects}/>
    </div>
  )
}

export default Featured;