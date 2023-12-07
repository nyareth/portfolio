import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a
              target="_blank"
              href="http://github.com/kidd-creator"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              target="_blank"
              href="tel:+256764360443"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaWhatsapp />
              <span className="text-[15px] ml-[6px]">+256 764360 443</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              target="_blank"
              href="https://instagram.com/yn2fly"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/iamnyareth/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                target="_blank"
                href="linktr.ee/iamsleak"
                className="text-[15px] ml-[6px]"
              >
                My link tree
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                <a target="_blank" href="mailto:nyarethmarko.3@gmail.com">
                  nyarethmarko.3@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Nyareth Marko 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
