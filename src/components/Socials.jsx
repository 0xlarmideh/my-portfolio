import React from 'react'
import pp from '../assets/pp.png'


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
    url: "",
  },
  {
    id: 4,
    title: "GitHub",
    icon: <box-icon name="github" color="white" type="logo"></box-icon>,
    url: "https://github.com/0xlarmideh",
  },
];
      
      
export default function Socials() {
  const socialsLink = datas.map(({id, title, icon, url}) => {
    return (
      <div className="flex gap-[10px] flex-row items-baseline " key={id}>
        <a
          href={url}
          className="flex items-center border-b-[2px] border-transparent hover:border-white pb-[4px] gap-[6px] "
        >
          <div className="max-md:text-[12px] ">{title} </div>
          {icon}
        </a>
      </div>
    );
  })
  return (
    <div className="flex gap-[14px] items-center ">
      <img src={pp} className="w-[54px] border-[2px] border-gray-400 rounded-full max-md:w-[45px] "></img> {socialsLink}
    </div>
  );
}
