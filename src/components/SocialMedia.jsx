import React from 'react';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsYoutube />
    </div>
  </div>
);
export default SocialMedia