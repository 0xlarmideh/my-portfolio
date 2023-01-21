import React from 'react'
// import { NavLink } from 'react-router-dom';
import {Paragraph} from "../Components/Typography";


  const datas = [
    { id: 1, title: "PROJECTS", secID: "#projects" },
    { id: 2, title: "ARTICLES", secID: "#articles" },
    { id: 3, title: "TECHNOLOGIES", secID: "#stack" },
  ];

export default function Links() {
  const link = datas.map(({id, secID, title}) => {
    return (
      <a
        key={id}
        
        href={secID}
        className="flex gap-[20px] items-center tracking-widest "
      >
        <Paragraph title={`0${id}`} className="text-[11px] " />
        
        <Paragraph
          title={`${title}`}
          className="text-[11px] link-track border-b-[2px] border-transparent hover:border-white hover:text-white "
        />
      </a>
    );
  })
  return <div className='links py-[30px] ' >{link}</div>;
}