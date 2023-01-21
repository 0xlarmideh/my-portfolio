import React from "react";
import { SubHeading, Paragraph, SmallHeading } from "../components/Typography";


const data = [
  {
    key: 1,
    title:
      "Building a simple website that displays my GitHub Repositories (React + GitHub API)",
    medium: "Hashnode",
    date: "Jan 6, 2023",
    description: "Article on how I built my AltSchool second semester exam",
    hosted: "https://larmideh.hashnode.dev/github-repositories-project",
  },
];
const Articles = () => {
  
  const ArticlesMapped = data.map(({ title, key, medium, date, hosted }) => {
    return (
      <div
        key={key}
        className="p-[40px] bg-dark "
        data-aos={key % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
        data-aos-easing="ease-in-sine"
      >
        <SmallHeading
          title={medium}
          className="text-white uppercase text-[12px] language "
        />
        <Paragraph title={date} className="mb-[24px]" />
        <SubHeading title={title} className="text-white pb-[24px] " />
        <div className="in-links flex gap-[48px] items-center ">
          <a href={hosted} className="in-link flex gap-[6px] items-center ">
            <span>Read More</span>
            <box-icon
              type="solid"
              color="white"
              name="right-top-arrow-circle"
            ></box-icon>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="py-[45px] " id="articles" data-aos="zoom-out">
      <div className="section-head">ARTICLES</div>
      <div>{ArticlesMapped} </div>
    </div>
  );
};

export default Articles;
