import React from 'react'
import Description from '../components/Description';
import Links from '../components/Links';
import Socials from '../components/Socials';

const Overview = () => {
  return (
    <div className="max-laptop:p-[40px] md:h-[100vh]  flex flex-col justify-between py-[100px] px-[120px]">
      <Description />
      <Links />
      <Socials />
    </div>
  );
}

export default Overview
