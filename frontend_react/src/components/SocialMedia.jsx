import React from "react";

import { BsInstagram, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="mailto:michal1986maciorowski@gmail.com">
        <SiGmail />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/dzikieszosy/" target="_blank">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/dzikieszosy" target="_blank">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
