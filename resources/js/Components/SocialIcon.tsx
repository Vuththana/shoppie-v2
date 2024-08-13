import { Icons } from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

const SocialIcons = () => {
  return (
    <div>
      <span className='block mb-2'>Our Socials</span>
      {Icons.map((icon, index) => (
          <a href={icon.link} key={index} >
              <FontAwesomeIcon icon={icon.icon} size="2x" className='hover:text-blue-400 sm:mx-[2px] mx-[3px]' />
          </a>
      ))}
    </div>
  );
};

export default SocialIcons;