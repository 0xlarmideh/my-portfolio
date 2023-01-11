import React from 'react'
import { Github, Resume, Twitter, LinkedIn } from "../components/Svgs";


const datas = [
  { id: 1, title: "Twitter", icon: <Twitter height={24} />, url: "" },
  // { id: 2, title: "LinkedIn", icon: <LinkedIn height={12} />, url: "" },
  { id: 3, title: "Resume", icon: <Resume height={24} />, url: "" },
  { id: 4, title: "GitHub", icon: <Github height={24} />, url: "" },
];
export default function Socials() {
  const socialsLink = datas.map(({id, title, icon, url}) => {
    return (
      <div className="flex gap-[10px] flex-row items-baseline " key={id}>
        <a href={url} className="flex items-center hover:border-b-[2px] pb-[4px] " >
          <div>{title} </div>
          {icon}
        </a>
      </div>
    );
  })
  return <div className="flex gap-[40px] items-center ">{socialsLink} </div>;
}
