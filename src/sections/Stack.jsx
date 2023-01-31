import React from "react";

const Stack = () => {
  return (
    <div id="stack" data-aos="zoom-out">
      <div className="section-head">STACK</div>
      <div className="grid grid-cols-[1fr,1fr,1fr] gap-y-[15px] ">
        <div className="flex flex-col justify-center items-center">
          <span>HTML5</span>
          <i class="bx bxl-html5"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>CSS3</span>
          <i class="bx bxl-css3"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>SASS</span>
          <i class="bx bxl-sass"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>TAILWIND</span>
          <i class="bx bxl-tailwind-css"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>JAVASCRIPT</span>
          <i class="bx bxl-javascript"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>REACT</span>
          <i class="bx bxl-react"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>VUE</span>
          <i class="bx bxl-vuejs"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GIT</span>
          <i class="bx bxl-git"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GITHUB</span>
          <i class="bx bxl-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Stack;
