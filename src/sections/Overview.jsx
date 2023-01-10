import React from 'react'
import Description from '../components/Description';
import Links from '../components/Links';
import Socials from '../components/Socials';

const Overview = () => {
  return (
    <div className="overview fixed flex flex-col justify-between py-[45px] px-[30px]">
      <Description/>
      <Links />
      <Socials />
    </div>
  );
}

export default Overview
