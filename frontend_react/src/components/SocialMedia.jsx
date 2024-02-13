import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/rajarshi-vinayak-95b50a229/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a
        href="https://github.com/raj-iitr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>

    <div>
      <a
        href="https://www.instagram.com/raj_iitr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
