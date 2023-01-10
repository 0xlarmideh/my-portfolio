import React from 'react'
import Description from '../components/Description';
import Links from '../components/Links';
import Socials from '../components/Socials';

const Overview = () => {
  return (
    <div className="overview fixed flex flex-col justify-between py-[100px] px-[120px]">
      <Description/>
      <Links />
      <Socials />
    </div>
  );
}

export default Overview
