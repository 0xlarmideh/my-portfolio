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
        data-aos="fade-in"
        title="Frontend Developer"
        className="text-white mb-[20px] text-[15px] mb-[35px]  uppercase"
      />
      <Paragraph
        title="I am an experienced professional with a background in architecture and a passion for frontend development. I pride myself on my strong attention to detail and ability to create visually appealing and intuitive designs. "
        className="text-[18px] leading-[27px] max-md:leading-[22px]  w-[100%] max-md:w-[100%] mb-[10px] "
      />
      <Paragraph
        title="I am skilled in using various technologies for frontend development, always looking to improve and stay current with industry trends. I am excited to continue to push the boundaries of what is possible and create visually stunning and functional designs."
        className="text-[18px] leading-[27px] max-md:leading-[22px] w-[100%] max-md:w-[100%] max-md:mb-[20px] "
      />
    </div>
  );
};

export default Description;
