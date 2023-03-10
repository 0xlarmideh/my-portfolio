import { Heading, Paragraph, SmallHeading } from "../Components/Typography";
import React from "react";


const Description = () => {

  return (
    <div>
      <div>
        <Heading
          title="Abdulhameed Busari"
          className="text-white max-laptop:text-[48px]  text-[52px] max-laptop:leading-[45px] leading-[56px] mb-[30px] "
        />
        <Paragraph
          title="Frontend Developer"
          className="text-white text-[15px] leading-[0px]  uppercase"
        />
        <a href="mailto:Welcome@to.ua" className="hover:text-white " >
          <Paragraph
            title="EMAIL: BUSARIOYEWOLE@GMAIL.COM"
            className="mb-[20px] text-[15px] mb-[35px]  uppercase"
          />
        </a>

        {/* <Paragraph
          title="I am an experienced professional with a background in architecture and a passion for frontend development. I pride myself on my strong attention to detail and ability to create visually appealing and intuitive designs. "
          className="text-[20px] leading-[27px] max-md:leading-[24px]  w-[100%] mb-[10px] max-md:mb-[20px] "
        /> */}
        <Paragraph
          title="I am skilled in using various technologies for frontend development, always looking to improve and stay current with industry trends. I am excited to continue to push the boundaries of what is possible and create visually stunning and functional designs."
          className="text-[20px] leading-[27px] max-md:leading-[24px] w-[100%] max-md:mb-[50px] "
        />
      </div>
    </div>
  );
};

export default Description;
