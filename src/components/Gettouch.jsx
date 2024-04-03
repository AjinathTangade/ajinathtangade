import React from "react";

function Gettouch() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-14 md:py-20 md:pb-16 px-5">
        <div className="md:h-64 bg-amber-300 rounded-[20px] flex justify-center items-center p-5 md:p-10">
          <div className="grid lg:gap-7 md:gap-0 md:grid-cols-2 justify-center ">
            <div>
              <h3 className="text-2xl text-center md:text-4xl md:text-start lg:text-5xl font-semibold">
                Have a project in mind that requires technical expertise?
              </h3>
            </div>
            <div className="flex justify-center md:justify-end md:items-center mt-5 md:mt-0">
              <button className="px-6 h-12 md:p-6 text-white bg-blue-600 md:h-14 xl:w-6/12 rounded-full text-lg flex justify-center items-center gap-5"><span>Get in touch with me</span>
                <span><i className="fi fi-rr-arrow-right text-white flex items-center justify-center text-2xl font-semibold"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gettouch;
