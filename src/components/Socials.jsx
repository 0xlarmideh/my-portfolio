import React from 'react'

const datas = [
  { id: 1, title: "Twitter", icon: "", url: "" },
  { id: 2, title: "LinkedIn", icon: "", url: "" },
  { id: 3, title: "Resume", icon: "", url: "" },
  { id: 4, title: "GitHub", icon: "", url: "" },
];
export default function Socials() {
  const socialsLink = datas.map(({id, title, icon, url}) => {
    return (
      <div className="flex gap-[10px] flex-row " key={id}>
        <a href={url}></a>
        <div>{title} </div>
        <img src={icon}></img>
      </div>
    );
  })
  return (
    <div className='flex gap-[40px] '>{socialsLink} </div>
  )
}
