import React from "react";
import pp from "../assets/pp.png";

const datas = [
  {
    id: 1,
    title: "Twitter",
    icon: (
      <box-icon
        name="twitter"
        color="white"
        type="logo"
        className="text-white twitter-logo"
      ></box-icon>
    ),
    url: "https://twitter.com/0x_larmideh",
  },
  // { id: 2, title: "LinkedIn", icon: <LinkedIn height={12} />, url: "" },
  {
    id: 3,
    title: "Resume",
    icon: <box-icon name="cloud-download" color="white"></box-icon>,
    url: "https://drive.google.com/file/d/1DSxj2tkfbT-tJAFLbHT3U6q03Av6g0dl/view?usp=share_link",
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
