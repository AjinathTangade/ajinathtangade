import React from "react";

function Experiences() {
  return (
    <div className="bg-[#f3f8ff] w-full z-1" id="experience">
      <div className="max-w-screen-xl mx-auto py-10 md:pb-16 px-5">
        <div className="relative z-20 flex ">
          <h2 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-black z-20 ">
            Experience
          </h2>
          <div className="absolute top-[30px] -z-50 w-5/12 md:w-3/12 lg:w-3/12 xl:w-3/12 bg-amber-300 h-7 xl:top-[51px] "></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="mt-9 col-span-2">
            <h3 className="text-2xl font-bold">Jr. Web developer </h3>
            <p className="text-base  text-gray-500 pt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="mt-6 relative z-20" >
              <h3 className="text-4xl font-bold">Education</h3>
          <div className="absolute top-[30px] -z-50 w-4/12 md:w-2/12 lg:w-3/12 xl:w-2/12 bg-amber-300 h-2"></div>

              <p className="text-base  text-gray-500 pt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-6 mt-4">
          <div className="">
            <div className="">
              <h3 className="text-xl font-bold">Master</h3>
              <p className="text-base  text-gray-500 pt-2">
                It is a long established fact that a reader will be distracted
                by
              </p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Degree</h3>
              <p className="text-base  text-gray-500 pt-2">
                It is a long established fact that a reader will be distracted
                by
              </p>
            </div>
          </div>

          <div>
            <div className="">
              <h3 className="text-xl font-bold">Degree</h3>
              <p className="text-base  text-gray-500 pt-2">
                It is a long established fact that a reader will be distracted
                by
              </p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Degree</h3>
              <p className="text-base  text-gray-500 pt-2">
                It is a long established fact that a reader will be distracted
                by
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
