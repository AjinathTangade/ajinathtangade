import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
const service = [
  {
    id: 1,
    tech: "Front-End Development",
    img: <i className="fi fi-rs-book-open-cover"></i>,
    text: "Front-end development centres on crafting visually appealing, responsive, and user-friendly web interfaces.",
  },
  {
    id: 2,
    tech: "E-commerce Development",
    img: <i className="fi fi-rr-chat-arrow-grow"></i>,
    text: "We are a team of experienced website designers who understand the requirements of the eCommerce industry & develop websites to accelerate your business growth.",
  },
  {
    id: 3,
    tech: "UI/UX Design",
    img: <i className="fi fi-ss-pen-swirl"></i>,
    text: "UI/UX design prioritises user experience and interface aesthetics, ensuring intuitive navigation, visual appeal, and optimal user engagement.",
  },
  {
    id: 4,
    tech: "React Development",
    img: <i className="fi fi-tr-react"></i>,
    text: "Working with React involves creating reusable components, managing state, and crafting interactive user interfaces for seamless web experiences.",
  },
  
  
];
function Services() {
  return (
    <div className="bg-[#f3f8ff] w-full z-1">
      <div className="max-w-screen-xl mx-auto py-10 md:py-16  px-5">
        <div className="relative z-20 flex justify-center items-center">
          <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
            What service do I provide?
          </h2>
          <div className="absolute top-[30px] lg:top-[35px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
        </div>

        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {service.map((serice, index) => (
              <div key={index} className="shadow-lg shadow-gray rounded-[10px] p-5 group hover:bg-blue-600 transform transition duration-500 
              group-hover:scale-110">
                <div className="">
                <div className="h-16 w-16 bg-blue-700 flex justify-center items-center rounded-lg group-hover:bg-white">
                  <span className="text-3xl font-semibold text-white group-hover:text-blue-600 ">{serice.img} </span>
                </div>

                <h3 className="text-2xl font-bold my-4 group-hover:text-white">{serice.tech}</h3>
                <p className="text-gray-500 group-hover:text-white ">{serice.text}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
