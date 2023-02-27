import React from "react";

const Stack = () => {
  return (
    <div id="stack" data-aos="zoom-out" >
      <div className="section-head">STACK</div>
      <div className="grid grid-cols-[1fr,1fr,1fr] gap-y-[15px] ">
        <div className="flex flex-col justify-center items-center">
          <span>HTML5</span>
          <box-icon
            name="html5"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>CSS3</span>
          <box-icon
            name="css3"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>SASS</span>
          <box-icon
            name="sass"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>TAILWIND</span>
          <box-icon
            name="tailwind-css"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>JAVASCRIPT</span>
          <box-icon
            name="javascript"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>REACT</span>
          <box-icon
            name="react"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>VUE</span>
          <box-icon
            name="vuejs"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GIT</span>
          <box-icon name="git" color="white" size="60px" type="logo"></box-icon>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>GITHUB</span>
          <box-icon
            name="github"
            color="white"
            size="60px"
            type="logo"
          ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Stack;
