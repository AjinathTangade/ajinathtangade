import React from "react";

const skills = [
  {
    id: 1,
    tech: "Git",
    img: "css.svg",
  },
  {
    id: 2,
    tech: "React",
    img: "react.svg",
  },
  {
    id: 3,
    tech: "HTML",
    img: "html.svg",
  },
  {
    id: 4,
    tech: "GitHub",
    img: "github-b.svg",
  },
  {
    id: 5,
    tech: "TailwindCSS",
    img: "tai.svg",
  },
  {
    id: 6,
    tech: "WordPress",
    img: "wordpress.svg",
  },
  {
    id: 7,
    tech: "Elementor",
    img: "Elementor-r.svg",
  },
  {
    id: 8,
    tech: "WpBakery",
    img: "wpbakery-logo.webp",
  },
  {
    id: 9,
    tech: "WooCommerce",
    img: "woocommerce-logo.svg",
  },
  {
    id: 10,
    tech: "shadcn/ui",
    img: "bars-sort.svg",
  },
];
function MySkills() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 md:py-16 px-5">
      <div className="relative z-20 flex justify-center items-center">
        <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
          My Skills
        </h2>
        <div className="absolute top-[30px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
      </div>
      <div className="flex gap-10 lg:gap-14 flex-wrap mx-auto justify-center mt-20">
        {skills.map((tech, index) => (
          <div className="group relative">
            <h3 className="group-hover:block hidden text-sm	lg:text-xl font-semibold text-center absolute -top-10 w-[80px] lg:w-[110px]">
              {tech.tech}
            </h3>
            <div
              className="h-20 w-20 md:w-20 md:h-20 lg:h-24 bg-sky-50 rounded-full lg:w-24 flex justify-center group-hover:bg-white group-hover:shadow-lg cursor-pointer py-6
                                transform transition duration-500 
                                group-hover:scale-110"
            >
              <img
                src={tech.img}
                alt={tech.tech}
                className="grayscale w-14 object-contain group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
