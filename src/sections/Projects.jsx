import React from "react";
import { SubHeading, Paragraph, SmallHeading } from "../components/Typography";


const projectsData = [
  {
    key: 1,
    title: "Urekka Web App",
    language: "React",
    description: "Web App for an Educational Consulting Firm",
    github: "https://github.com/Urekka/urekka",
    hosted: "https://urekka.vercel.app/",
  },
  {
    key: 2,
    title: "Redactr",
    language: "JavaScript",
    description: "App helps to redact specified words in a text.",
    github: "https://github.com/0xlarmideh/super-circle-redactr",
    hosted: "https://super-circle-redactr.vercel.app/",
  },
  {
    key: 3,
    title: "FOLA Affairs",
    language: "React",
    description:
      "A website made for my marriage to Maryam Oyeniran. Features a timer, Vlog and appreciation post.",
    github: "https://github.com/0xlarmideh/fola-affairs-repo",
    hosted: "https://www.fola.live",
  },
  {
    key: 4,
    title: "Mini Calculator",
    language: "React",
    description:
      "A mini React calculator that does basic Arithmetic operation.",
    github: "https://github.com/0xlarmideh/React-Calculator---AltSchool",
    hosted: "https://react-calculator-urekka.vercel.app",
  },
  {
    key: 5,
    title: "Phone Number Checker",
    language: "JavaScript",
    description:
      "App helps to verify service operator of a (Nigerian) number irrespective of the format with validation.",
    github: "https://github.com/0xlarmideh/superCircle-phoenie",
    hosted: "https://super-circle-phoenie-ten.vercel.app/",
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
            <a
              href={github}
              target="_blank"
              className="in-link flex gap-[6px]  items-center  "
            >
              <box-icon name="github" color="white" type="logo"></box-icon>
              <span>Github</span>
            </a>
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
