import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col gap-[30px] bg-teal-900_01`}>
      <div className="mt-[78px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[30px] lg:px-5 md:px-5">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-5">
              <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[72px] w-[108px] object-contain" />
              <div className="flex w-[14%] justify-between gap-5">
                <Img src="images/img_info.svg" alt="Info Icon" className="h-[42px]" />
                <Img src="images/img_trash.svg" alt="Trash Icon" className="h-[42px]" />
                <Img src="images/img_link.svg" alt="Link Icon" className="h-[42px]" />
                <Img src="images/img_warning.svg" alt="Warning Icon" className="h-[42px]" />
              </div>
            </div>
            <div className="h-[0.5px] bg-blue_gray-100_33" />
          </div>
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <div className="flex w-[28%] justify-center p-2.5 md:w-full">
              <Text
                as="p"
                className="w-full font-sora text-[16px] font-light leading-6 text-color-text_color-text__4 lg:text-[13px]"
              >
                Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus facilisi ultrices sed faucibus proin
                cum ut.
              </Text>
            </div>
            <div className="mr-[252px] flex w-[42%] items-center justify-between gap-5 self-center md:mr-0 md:w-full md:flex-col">
              <div className="flex w-[88%] flex-col items-start gap-2 md:w-full">
                <Heading
                  size="headingxl"
                  as="h5"
                  className="font-sora text-[21px] font-bold capitalize text-deep_purple-a200 lg:text-[17px]"
                >
                  Explore
                </Heading>
                <ul className="flex flex-col items-start gap-2">
                  <li>
                    <a href="Home" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        Home
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        My Deposit
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Toekn" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        Toekn
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Services" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        Services
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="headingxl"
                  as="h5"
                  className="font-sora text-[21px] font-bold capitalize text-deep_purple-a200 lg:text-[17px]"
                >
                  Links
                </Heading>
                <ul className="flex flex-col items-start gap-2">
                  <li>
                    <a href="Docs" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        Docs
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Contact" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        Contact
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="FAQ’s" target="_blank" rel="noreferrer">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        FAQ’s
                      </Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="p" className="font-sora text-[14px] font-normal text-color-text_color-text__4">
                        About us
                      </Heading>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center self-stretch bg-gray-900 py-3">
        <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
          <Text size="textxl" as="p" className="font-sora text-[15px] font-normal text-color-text_color-text__4">
            Trading Copyright © 2024
          </Text>
        </div>
      </div>
    </footer>
  );
}
