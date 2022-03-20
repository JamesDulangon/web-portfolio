import React from 'react';
import { BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/james-steven-dulangon-a53465168/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/JamesDulangon" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.youtube.com/channel/UCxRXtrc4cDv_6zMrDwDpbUg" target="_blank" rel="noreferrer">
        <BsYoutube />
      </a>
    </div>
  </div>
);
export default SocialMedia