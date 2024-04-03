import React from "react";

function Banner() {
  return (
    <div className="bg-[#f3f8ff] w-full z-1">
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 mt-20 px-5">
        <div className="block md:flex">
          <div className="basis-6/12">
            <div>
              <h2 className="text-md md:text-2xl font-semibold tracking-wider text-blue-600">
                HI, I AM AJINATH
              </h2>
              <h2 className="mt-5 md:mt-10 text-5xl xl:text-7xl font-extrabold tracking-wider ">
                Professional
              </h2>
              <div className="relative z-20">
                <h2 className="mt-3 text-5xl xl:text-7xl font-black z-20 ">
                  Web Developer
                </h2>
                <div className="absolute top-[20px] -z-50 w-11/12 lg:w-4/6 xl:w-5/6  bg-amber-300 h-7 start-1 lg:top-[20px] xl:top-[51px]"></div>
              </div>
              <h2 className="mt-3 text-5xl xl:text-7xl font-black tracking-wider ">
                based in
              </h2>
              <h2 className="mt-3 text-5xl xl:text-7xl font-black tracking-wider ">
                India
              </h2>
              <p className="text-lg font-medium my-6 w-full md:w-10/12 text-gray-500">
                Transforming the web one line of code at a time: Crafting
                cutting-edge digital experiences with precision, passion and a
                profound commitment to excellence.
              </p>
            </div>
            <div className="flex gap-3 ">
              <button className="h-14 w-full max-w-40 rounded-full bg-blue-600 font-semibold text-lg text-white">
                My work
              </button>
              <span className="h-14 w-full max-w-72 bg-white rounded-full font-medium text-md text-gray-500 text-center flex justify-center items-center">
                glen.mccallum@live.co.uk
              </span>
            </div>
          </div>
          <div className="basis-1/12"></div>
          <div className="basis-5/12">
            <img
              src="./banner-1-1.png"
              alt=""
              className="w-full animate-fade-up animate-infinite animate-delay-[24ms] animate-ease-in animate-alternate-reverse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
