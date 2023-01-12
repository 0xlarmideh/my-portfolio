import React from 'react'
// import { NavLink } from 'react-router-dom';
import {Paragraph} from "../Components/Typography";


  const datas = [
    { id: 1, title: "PROJECTS" },
    { id: 2, title: "ARTICLES" },
    { id: 3, title: "TECHNOLOGIES" },
  ];

export default function Links() {
  const link = datas.map((item) => {
    return (
      <a
        key={item.id}
        href="#"
        className="flex gap-[20px] items-center tracking-widest "
      >
        <Paragraph title={`0${item.id}`} className="text-[11px] " />
        <div className="divider h-[1px] border-l-[24px] hover:border-l-[48px] hover:h-[2px] "></div>
        <Paragraph
          title={`${item.title}`}
          className="text-[11px] link-track "
        />
      </a>
    );
  })
  return <div>{link}</div>;
}

// const data = [
//   { id: 01, title: "PROJECTS" },
//   { id: 02, title: "ARTICLES" },
// ];
// const link = data.map((item) => {
//   return (
//     <div key={item.id}>
//       <div>{item.id} </div>
//       <span className="divider"></span>
//       <div>{item.title} </div>
//     </div>
//   );
// });