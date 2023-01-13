import { Heading, Paragraph, SmallHeading } from "../Components/Typography";
import React from "react";

const Description = () => {
  return (
    <div>
      <Heading
        title="Abdulhameed Busari"
        className="text-white max-laptop:text-[46px] mb-[15px] text-[66px] leading-[56px] head-text"
      />
      <SmallHeading
        title="Front-End Developer"
        className="text-white mb-[20px] text-[27px] mb-[45px] w-[70%] font-bold tracking-wide "
      />
      <Paragraph
        title="An architect and programmer in love with tech. Delivering top-notch user-centric designs with great meticulousness. "
        className="text=[16px] leading-[27px] max-md:leading-[22px]  w-[80%] max-md:w-[100%] max-md:text-[14px] "
      />
      <Paragraph
        title="I have developed some beautiful projects. I am open to FrontEnd Developer Intern and Junior roles. "
        className="text=[16px] leading-[27px] max-md:leading-[22px] w-[80%] max-md:w-[100%] max-md:mb-[20px] max-md:text-[14px] "
      />
    </div>
  );
};

export default Description;
