import { Heading, Paragraph, SmallHeading } from "../Components/Typography";
import React from "react";

const Description = () => {
  return (
    <div>
      <Heading
        title="Abdulhameed Busari"
        className="text-white max-laptop:text-[53px]  text-[66px] max-laptop:leading-[45px] leading-[56px]"
      />
      <Paragraph
        title="Frontend Developer"
        className="text-white mb-[20px] text-[15px] mb-[45px]  uppercase"
      />
      <Paragraph
        title="An architect and programmer in love with tech. Delivering top-notch user-centric designs with great meticulousness. "
        className="text-[21px] leading-[27px] max-md:leading-[22px]  w-[90%] max-md:w-[100%] max-md:text-[16px] mb-[10px] "
      />
      <Paragraph
        title="I have developed some beautiful projects. I am open to Frontend Developer Intern and Junior roles. "
        className="text-[21px] leading-[27px] max-md:leading-[22px] w-[90%] max-md:w-[100%] max-md:mb-[20px] max-md:text-[16px] "
      />
    </div>
  );
};

export default Description;
