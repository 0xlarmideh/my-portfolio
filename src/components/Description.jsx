import { Heading, Paragraph, SmallHeading } from "../Components/Typography";
import React from "react";

const Description = () => {
  return (
    <div>
      <Heading
        title="Abdulhameed Busari"
        className="text-white max-md:text-[45px] text-[60px] mb-6 "
      />
      <SmallHeading
        title="Front-End Developer"
        className="text-white text-[27px] mb-[45px] font-semibold tracking-wide "
      />
      <Paragraph
        title="An architect in love with tech, delivering top-notch user-centric designs with great meticulousness. "
        className="w-[65%] text=[14px] leading-[30px] "
      />
      <Paragraph
        title="I have developed some beautiful projects. I am open to FrontEnd Developer Intern and Junior roles. "
        className="w-[65%] text=[14px] leading-[28px] "
      />
    </div>
  );
};

export default Description;
