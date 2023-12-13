import React from "react";
import { SubHeading, Paragraph, SmallHeading } from "../components/Typography";


const projectsData = [
  {
    key: 1,
    title: "Fleri Client Application",
    language: "NextJs, TypeScript",
    description:
      "This app is an health-tech app to help Africans in diaspora cater for loved ones at home",
    hosted: "https://joinfleri.com",
  },
  {
    key: 2,
    title: "DcFoods",
    language: "NextJs",
    description:
      "An ecommerce application involved in selling foodstuff items",
    hosted: "https://dcfoodbank.com",
  },
  {
    key: 3,
    title: "Invoicing App (V1.5",
    language: "React",
    description:
      "This app generates invoice from supplied information at a tap",
    github: "https://github.com/0xlarmideh/invoice-generator",
    hosted: "https://invoice-generator-0xlarmideh.vercel.app",
  },
  {
    key: 4,
    title: "Urekka Web App",
    language: "React",
    description: "Web App for an Educational Consulting Firm",
    github: "https://github.com/Urekka/urekka",
    hosted: "https://urekka.vercel.app/",
  },
];
const Projects = () => {

  const projectsMapped = projectsData.map(
    ({ key, title, language, description, github, hosted }) => {
      return (
        <div
          key={key}
          className="p-[40px] bg-dark "
          data-aos={key % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
          data-aos-easing="ease-in-sine"
        >
          <SmallHeading
            title={language}
            className="text-white uppercase  text-[12px] language "
          />
          <SubHeading title={title} className="text-white" />
          <Paragraph title={description} className="text-[19px]  mb-[24px] " />
          <div className="in-links flex gap-[48px] items-center ">
            {github && <a
              href={github}
              target="_blank"
              className="in-link flex gap-[6px]  items-center  "
            >
              <box-icon name="github" color="white" type="logo"></box-icon>
              <span>Github</span>
            </a>}
            <a
              href={hosted}
              target="_blank"
              className="paragraph in-link flex gap-[6px] "
            >
              <span>Demo</span>
              <box-icon
                type="solid"
                color="white"
                name="right-top-arrow-circle"
              ></box-icon>
            </a>
          </div>
        </div>
      );
    }
  );
  return (
    <div id="projects" data-aos="zoom-out" >
      <div className="section-head">PROJECTS</div>
      <div className="projects flex flex-col gap-[20px]">{projectsMapped}</div>
    </div>
  );
};

export default Projects;
