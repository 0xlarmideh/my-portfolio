import React from "react";
import { SubHeading, Paragraph, SmallHeading } from "../components/Typography";
import { Github } from "../components/Svgs";

const projectsData = [
  {
    key: 1,
    title: "FOLA Affairs",
    language: "React",
    description:
      "A website made for my marriage to Maryam Oyeniran. Features a timer, Vlog and appreciation post.",
    github: "https://github.com/0xlarmideh/fola-affairs-repo",
    hosted: "https://www.fola.live",
  },
  {
    key: 2,
    title: "Mini GitHub-Repo Website",
    language: "React",
    description:
      "A mini portfolio website that displays all my GitHub repositories",
    github: "https://github.com/0xlarmideh/github-repo-lists-ALtschool",
    hosted: "https://0xlarmideh-altschool-exam.vercel.app",
  },
  {
    key: 3,
    title: "Mini Calculator",
    language: "React",
    description:
      "A mini React calculator that does basic Arithmetic operation.",
    github: "https://github.com/0xlarmideh/React-Calculator---AltSchool",
    hosted: "https://react-calculator-urekka.vercel.app",
  },
  {
    key: 4,
    title: "Redactr",
    language: "JavaScript",
    description: "App helps to redact specified words in a text.",
    github: "https://github.com/0xlarmideh/super-circle-redactr",
    hosted: "https://super-circle-redactr.vercel.app/",
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
  {
    key: 6,
    title: "Travel Journal",
    language: "React",
    description: "Simple static app that shows different travel places.",
    github: "https://github.com/0xlarmideh/React-Travel-Journal",
    hosted: "https://larmideh-travel-journal.vercel.app/",
  },
];
const Projects = () => {
  const projectsMapped = projectsData.map(
    ({ key, title, language, description, github, hosted }) => {
      return (
        <div key={key} className="p-[40px] bg-dark ">
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
              className="in-link flex gap-[6px]  items-center "
            >
              <box-icon name="github" color="white" type="logo"></box-icon>{" "}
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
    <div id="projects">
      <div className="section-head">PROJECTS</div>
      <div className="projects flex flex-col gap-[20px] ">{projectsMapped}</div>
    </div>
  );
};

export default Projects;
