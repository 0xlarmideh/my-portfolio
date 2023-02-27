import React from "react";
import { SiMaterialui } from "react-icons/si";

const Stack = () => {
  return (
    <div id="stack" data-aos="zoom-out">
      <div className="section-head">STACK</div>
      <div className="grid grid-cols-[1fr,1fr,1fr] gap-y-[15px] items-center ">
        <div className="flex flex-col justify-center items-center">
          <span>HTML5</span>
          <i className="bx bxl-html5"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>CSS3</span>
          <i className="bx bxl-css3"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>SASS</span>
          <i className="bx bxl-sass"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>TAILWIND</span>
          <i className="bx bxl-tailwind-css"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>JAVASCRIPT</span>
          <i className="bx bxl-javascript"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>REACT</span>
          <i className="bx bxl-react"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>VUE</span>
          <i className="bx bxl-vuejs"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>TYPESCRIPT</span>
          <i className="bx bxl-typescript"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>MUI</span>
          <SiMaterialui size={66} color='white' />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>WORDPRESS</span>
          <i className="bx bxl-wordpress"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GIT</span>
          <i className="bx bxl-git"></i>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GITHUB</span>
          <i className="bx bxl-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Stack;
