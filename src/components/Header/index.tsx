import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center gap-5`}>
      <Img src="images/img_header_logo.png" alt="Header Logo" className="h-[72px] w-[108px] object-contain" />
      <ul className="!mr-[582px] flex flex-wrap gap-12 md:mr-0">
        <li>
          <a
            href="https://www.figma.com/design/LwlGoCQAhdsI76pUfhJhmG?node-id=2205-12388"
            target="_blank"
            rel="noreferrer"
            className="lg:text-[13px]"
          >
            <Text as="p" className="font-sora text-[16px] font-normal tracking-[0.15px] text-color-text_color-text__4">
              Home
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[13px]">
            <Text as="p" className="font-sora text-[16px] font-normal tracking-[0.15px] text-color-text_color-text__4">
              My Deposits
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[13px]">
            <Text as="p" className="font-sora text-[16px] font-normal text-color-text_color-text__4">
              Token
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[13px]">
            <Text as="p" className="font-sora text-[16px] font-normal text-color-text_color-text__4">
              Services
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="lg:text-[13px]">
            <Text as="p" className="font-sora text-[16px] font-normal text-color-text_color-text__4">
              Docs
            </Text>
          </a>
        </li>
      </ul>
    </header>
  );
}
