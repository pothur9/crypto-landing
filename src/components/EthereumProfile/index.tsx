import { Button, Heading, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  ethereumTitle?: React.ReactNode;
  ethereumValue?: React.ReactNode;
  currency?: React.ReactNode;
  detailsButtonText?: string;
  valueManagedLabel?: React.ReactNode;
  valueManagedAmount?: React.ReactNode;
  yearlyReturnLabel?: React.ReactNode;
  yearlyReturnPercentage?: React.ReactNode;
  riskLabel?: React.ReactNode;
  riskLevel?: React.ReactNode;
  p6789056?: string;
}

export default function EthereumProfile({
  ethereumTitle = "Ethereum",
  ethereumValue = "5,528.92",
  currency = "USD",
  detailsButtonText = "Details",
  valueManagedLabel = "Value Managed:",
  valueManagedAmount = "$43.74k",
  yearlyReturnLabel = "Yearly Return:",
  yearlyReturnPercentage = "67.21%",
  riskLabel = "Risk:",
  riskLevel = "3/5",
  p6789056 = "$67 890.56",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[24%] md:w-full gap-5 border-white-a700_0c border border-solid bg-white-a700_0c rounded-[12px]`}
    >
      <div className="mt-2.5 flex flex-col gap-5 self-stretch">
        <div className="flex items-center justify-center gap-2 px-5">
          <Img src="images/img_play.svg" alt="Play Image" className="h-[36px] w-[10%] rounded-[50%]" />
          <div className="flex-1">
            <div className="flex items-center">
              <div className="flex">
                <Text
                  size="textxl"
                  as="p"
                  className="font-sora text-[15.13px] font-normal text-color-text_color-text__4"
                >
                  {ethereumTitle}
                </Text>
              </div>
              <Img src="images/img_television.svg" alt="Television Image" className="h-[18px]" />
            </div>
            <div className="flex flex-wrap items-center">
              <Heading as="p" className="font-sora text-[14.88px] font-normal text-color-text_color-text__4">
                {ethereumValue}
              </Heading>
              <Text
                size="texts"
                as="p"
                className="self-end font-sora text-[11px] font-normal uppercase tracking-[0.40px] text-color-text_color-text__4"
              >
                {currency}
              </Text>
            </div>
          </div>
          <Button
            size="lg"
            color="deep_purple_A100_deep_purple_500"
            className="min-w-[96px] rounded-[18px] px-5 font-sora"
          >
            {detailsButtonText}
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="h-[0.5px] bg-white-a700_33" />
            <div className="mx-5 flex flex-wrap justify-between gap-5">
              <Heading
                as="p"
                className="font-sora text-[14px] font-normal tracking-[0.15px] text-color-text_color-text__4"
              >
                {valueManagedLabel}
              </Heading>
              <Heading
                size="headings"
                as="p"
                className="font-sora text-[14px] font-semibold tracking-[0.15px] text-color-text_color-text__4"
              >
                {valueManagedAmount}
              </Heading>
            </div>
            <div className="h-[0.5px] bg-white-a700_33" />
          </div>
          <div className="mx-5 flex flex-wrap justify-between gap-5">
            <Heading
              as="p"
              className="font-sora text-[14px] font-normal tracking-[0.15px] text-color-text_color-text__4"
            >
              {yearlyReturnLabel}
            </Heading>
            <Heading
              size="headings"
              as="p"
              className="font-sora text-[14px] font-semibold tracking-[0.15px] text-green-a700"
            >
              {yearlyReturnPercentage}
            </Heading>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[0.5px] bg-white-a700_33" />
            <div className="mx-5 flex flex-wrap justify-between gap-5">
              <Heading
                as="p"
                className="font-sora text-[14px] font-normal tracking-[0.15px] text-color-text_color-text__4"
              >
                {riskLabel}
              </Heading>
              <Heading
                size="headings"
                as="p"
                className="font-sora text-[14px] font-semibold tracking-[0.15px] text-color-text_color-text__4"
              >
                {riskLevel}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end self-stretch">
        <Button
          variant="fill"
          shape="round"
          className="mr-[122px] min-w-[96px] rounded-md border-[0.5px] border-solid border-orange-100_33 px-[15.5px] font-circularstd font-medium"
        >
          {p6789056}
        </Button>
        <div className="flex h-[106px] items-start justify-end self-stretch bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat pl-14 pr-[166px] md:px-5">
          <div className="mb-[92px] h-[10px] w-[10px] rounded-[5px] border-[1.5px] border-solid border-color-text_color-text__4 bg-gradient" />
        </div>
      </div>
    </div>
  );
}
