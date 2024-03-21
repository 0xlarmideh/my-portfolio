import React from "react";
import pp from "../assets/pp.png";

const datas = [
  {
    id: 1,
    title: "LinkedIn",
    icon: <box-icon name="linkedin" color="white" type="logo"></box-icon>,
    url: "https://linkedin.com/in/larmideh",
  },
  {
    id: 3,
    title: "Resume",
    icon: <box-icon name="cloud-download" color="white"></box-icon>,
    url: "https://dub.sh/IDw51hp",
  },
  {
    id: 4,
    title: "GitHub",
    icon: <box-icon name="github" color="white" type="logo"></box-icon>,
    url: "https://github.com/0xlarmideh",
  },
];

export default function Socials() {
  const socialsLink = datas.map(({ id, title, icon, url }) => {
    return (
      <div className="flex gap-[10px] flex-row items-baseline " key={id}>
        <a
          href={url}
          target="_blank"
          className="flex items-center hover:text-white hover:underline pb-[4px] gap-[6px] "
        >
          <div className="max-md:text-[16px] ">{title} </div>
          {icon}
        </a>
      </div>
    );
  });
  return (
    <div className="flex gap-[14px] items-center  ">
      <img
        src={pp}
        alt="picture"
        className=" border-[2px] border-gray-400 rounded-full max-md:w-[45px] image "
      ></img>
      {socialsLink}
    </div>
  );
}
