import { Text, Heading, Img, Button } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="relative z-[2]">
        <div className="flex h-[596px] items-center justify-center bg-[url(/public/images/img_hero.png)] bg-cover bg-no-repeat py-[76px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
          <div className="container-xs mt-[18px] flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full items-center md:flex-col">
              <div className="flex w-[48%] flex-col items-start gap-[30px] md:w-full">
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="w-full font-sora text-[56px] font-extrabold capitalize leading-[110%] text-color-text_color-text__4 lg:text-[47px] md:text-[36px] sm:text-[30px]"
                >
                  The Marketplace for Automated Trading Strategies
                </Heading>
                <Text
                  as="p"
                  className="font-sora text-[16px] font-normal tracking-[0.15px] text-color-text_color-text__4 lg:text-[13px]"
                >
                  Unlock the full potential of AI and automated trading.
                </Text>
                <div className="flex items-center self-stretch sm:flex-col">
                  <Heading
                    size="headinglg"
                    as="h2"
                    className="font-sora text-[20px] font-semibold text-color-purple_color-purple__2 lg:text-[17px]"
                  >
                    REAL WORLD
                  </Heading>
                  <div className="ml-[30px] h-[32px] w-px bg-deep_purple-a100_99 sm:ml-0 sm:h-px sm:w-[32px]" />
                  <Heading
                    size="headinglg"
                    as="h3"
                    className="ml-7 font-sora text-[20px] font-semibold text-color-purple_color-purple__2 lg:text-[17px] sm:ml-0"
                  >
                    REAL ASSETS
                  </Heading>
                  <div className="ml-[30px] h-[32px] w-px bg-deep_purple-a100_99 sm:ml-0 sm:h-px sm:w-[32px]" />
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="ml-7 font-sora text-[20px] font-semibold text-color-purple_color-purple__2 lg:text-[17px] sm:ml-0"
                  >
                    REAL TIME
                  </Heading>
                </div>
                <Button
                  size="xl"
                  color="deep_purple_A100_deep_purple_500"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      alt="Arrow Right"
                      className="h-[24px] w-[24px] object-contain"
                    />
                  }
                  className="min-w-[164px] gap-2.5 rounded-[22px] px-6 sm:px-4"
                >
                  Read More
                </Button>
              </div>
              <div className="relative ml-[-106px] flex flex-1 flex-col items-start gap-[174px] lg:gap-[130px] md:ml-0 md:gap-[130px] md:self-stretch sm:gap-[87px]">
                <div className="mr-[70px] flex w-[18%] flex-col items-center gap-1 self-end rounded-[14px] border border-solid border-blue-200 bg-indigo-a200_66 p-[18px] lg:w-full md:mr-0 md:w-full">
                  <Img src="images/img_total_sales_icon.svg" alt="Sales Icon" className="h-[48px]" />
                  <Heading
                    size="font_h4"
                    as="h5"
                    className="text-[28px] font-bold capitalize text-color-text_color-text__4 lg:text-[23px] md:text-[22px]"
                  >
                    160K
                  </Heading>
                  <Text
                    size="font_base_body__16px"
                    as="p"
                    className="text-[16px] font-normal text-color-text_color-text__4 lg:text-[13px]"
                  >
                    Total sales
                  </Text>
                </div>
                <UserProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
