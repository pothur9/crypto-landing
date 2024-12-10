// @ts-ignore
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, Input, TextArea } from "../../components";
import EthereumProfile from "../../components/EthereumProfile";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import MiningDashboard  from "../../components/MiningDashboard";
import HeroSection from "./HeroSection";

import React, { Suspense } from "react";

const ethereumOverviewList = [
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
  {
    ethereumTitle: "Ethereum",
    ethereumValue: "5,528.92",
    currency: "USD",
    detailsButtonText: "Details",
    valueManagedLabel: "Value Managed:",
    valueManagedAmount: "$43.74k",
    yearlyReturnLabel: "Yearly Return:",
    yearlyReturnPercentage: "67.21%",
    riskLabel: "Risk:",
    riskLevel: "3/5",
    p6789056: "$67 890.56",
  },
];



export default function TradingPage() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  

  return (
    <>
      <Helmet>
        <title>Automated Trading Marketplace - Unlock AI Potential</title>
        <meta
          name="description"
          content="Explore the Automated Trading Marketplace. Dive into AI-driven strategies with 160K total sales and 12k active users. Manage assets in real-time with top vaults and maximize returns with ITP Staking."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[26px] bg-gray-900_01">
        <div className="container-xs mt-3.5 lg:px-5 md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-[150px] self-stretch lg:gap-28 md:gap-28 sm:gap-[75px]">
          <div className="flex flex-col items-center">
            <div className="self-stretch">
              {/* hero section */}
              <HeroSection />
              <div className="relative mt-[-576px] flex h-[4030px] flex-col items-center bg-[url(/public/images/img_group_5.png)] bg-cover bg-no-repeat py-[22px] lg:h-auto md:h-auto sm:py-4">
                <div className="container-xs mt-[672px] lg:px-5 md:px-5">
                  <div className="flex flex-col items-center">
                    <div className="self-stretch">
                      <div className="relative h-[418px] content-center rounded-[32px] border border-solid border-gray-600_3f bg-deep_purple-a200_0c px-14 py-[50px] lg:h-auto md:h-auto md:p-5 sm:p-4">
                        <div className="m-auto flex flex-1 flex-col items-end">
                          <Img
                            src="images/img_x_png.png"
                            alt="Main Image"
                            className="relative z-[1] mr-[134px] h-[22px] object-cover md:mr-0"
                          />
                          <div className="relative mt-[-22px] flex flex-col self-stretch">
                            <Img
                              src="images/img_circle_01_png.png"
                              alt="Circle Image"
                              className="ml-[38px] h-[16px] object-cover md:ml-0"
                            />
                            <div className="relative mt-[-6px] flex flex-col items-center gap-[26px]">
                              <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
                                <div className="flex flex-col items-center gap-4">
                                  <Img
                                    src="images/img_image.png"
                                    alt="Secondary Image"
                                    className="h-[60px] w-[14%] object-contain"
                                  />
                                  <Heading
                                    size="heading3xl"
                                    as="h6"
                                    className="font-sora text-[40px] font-bold text-color-text_color-text__4 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                                  >
                                    Total Value Managed
                                  </Heading>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center self-stretch px-14 md:px-5 sm:px-4">
                                <Text
                                  size="text3xl"
                                  as="p"
                                  className="text-[17px] font-normal text-color-text_color-text__4 lg:text-[14px]"
                                >
                                  ITP Staking is live!
                                </Text>
                                <Heading
                                  size="text4xl"
                                  as="p"
                                  className="font-sora text-[30px] font-medium text-color-text_color-text__4 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                                >
                                  $166,593
                                </Heading>
                              </div>
                              <Button
                                size="2xl"
                                color="deep_purple_A100_deep_purple_500"
                                className="min-w-[138px] rounded-[24px] px-6 font-medium sm:px-4"
                              >
                                STAKE ITP
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[37%] left-0 right-0 mx-[38px] flex flex-1 items-start justify-between gap-5 lg:mx-0 md:mx-0">
                          <Img
                            src="images/img_dcoin_png.png"
                            alt="Dcoin Image"
                            className="ml-[94px] h-[32px] object-cover"
                          />
                          <Img
                            src="images/img_ethereum_02_png.png"
                            alt="Ethereum Image"
                            className="mt-3.5 h-[44px] self-end object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-32 flex flex-col items-center gap-10 self-stretch">
                      <Heading
                        size="heading2xl"
                        as="h1"
                        className="font-sora text-[36px] font-extrabold capitalize text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                      >
                        Top Vaults
                      </Heading>
                      <div className="flex gap-5 self-stretch md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {ethereumOverviewList.map((d, index) => (
                            <EthereumProfile
                              {...d}
                              key={"vaultsList" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                    <div className="mt-[92px] flex flex-col gap-[42px] self-stretch">
                      <div className="flex items-center justify-between gap-5 sm:flex-col">
                        <Heading
                          size="heading2xl"
                          as="h1"
                          className="font-sora text-[36px] font-extrabold capitalize lg:text-center text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                        >
                          Vaults
                        </Heading>
                       
                      </div>
                      <MiningDashboard/>
                      
                    </div>
                    <Heading
                      size="text5xl"
                      as="p"
                      className="mt-[134px] font-sora text-[36px] font-medium tracking-[0.15px] text-color-text_color-text__4 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                    >
                      Ecosystem
                    </Heading>
                    <div className="mt-[38px] flex gap-5 self-stretch md:flex-col">
                      <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[78px] lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_38x150.png"
                          alt="Image"
                          className="h-[38px] w-[36%] object-contain"
                        />
                      </div>
                      <div className="flex w-full items-start justify-center gap-4 rounded-[20px] bg-teal-900 px-14 py-16 lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_56x58.png"
                          alt="Image"
                          className="mb-2 h-[56px] w-[14%] object-contain"
                        />
                        <Img
                          src="images/img_image_22x152.png"
                          alt="Image"
                          className="mt-4 h-[22px] w-[38%] object-contain"
                        />
                      </div>
                      <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[70px] lg:py-8 md:p-5 sm:p-4">
                        <Img
                          src="images/img_image_54x194.png"
                          alt="Image Ten"
                          className="h-[54px] w-[46%] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="container-xs relative z-[3] mt-[-750px] lg:px-5 md:px-5">
              <div className="flex gap-5 md:flex-col">
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[76px] lg:py-8 md:p-5 sm:p-4">
                  <Img
                    src="images/img_velodrome_wordmark_svg.svg"
                    alt="Velodrome Logo"
                    className="h-[42px] w-[62%] object-contain"
                  />
                </div>
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[58px] md:p-5 sm:p-4">
                  <Img
                    src="images/img_image_76x284.png"
                    alt="Decorative Image"
                    className="h-[76px] w-[66%] object-contain"
                  />
                </div>
                <div className="flex w-full justify-center rounded-[20px] bg-teal-900 px-14 py-[82px] lg:py-8 md:p-5 sm:p-4">
                  <Img
                    src="images/img_dhedge_words_svg.svg"
                    alt="Dhedge Logo"
                    className="h-[30px] w-[38%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
