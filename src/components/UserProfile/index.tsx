import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userFollowerCount?: React.ReactNode;
  userStatus?: React.ReactNode;
}

export default function UserProfile({ userFollowerCount = "12k", userStatus = "Active users", ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-between items-center w-[30%] lg:w-full md:w-full gap-5 px-6 py-2.5 sm:px-4 border-blue-200 border border-solid bg-indigo-a200_66 rounded-[44px]`}
    >
      <div className="flex w-[42%] justify-center">
        <div className="flex flex-1 justify-center">
          <Img
            src="images/img_profilepic.png"
            alt="Main Profile Pic"
            className="h-[44px] rounded-[22px] object-cover"
          />
          <Img
            src="images/img_profilepic_44x44.png"
            alt="Secondary Profile Pic"
            className="relative ml-[-16px] h-[44px] rounded-[22px] object-cover"
          />
        </div>
        <Img
          src="images/img_profilepic_1.png"
          alt="Tertiary Profile Pic"
          className="relative ml-[-16px] h-[44px] rounded-[22px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Heading size="font_h4" as="h3" className="text-[28px] font-bold capitalize text-color-text_color-text__4">
          {userFollowerCount}
        </Heading>
        <Text size="font_base_body__16px" as="p" className="text-[16px] font-normal text-color-text_color-text__4">
          {userStatus}
        </Text>
      </div>
    </div>
  );
}
