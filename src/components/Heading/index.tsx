import React from "react";

const sizes = {
  font_h4: "capitalize text-[28px] font-bold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  textmd: "text-[12px] font-medium",
  textlg: "text-[14px] font-medium",
  text4xl: "text-[30px] font-medium lg:text-[25px] md:text-[28px] sm:text-[26px]",
  text5xl: "text-[36px] font-medium lg:text-[30px] md:text-[34px] sm:text-[32px]",
  headingxs: "text-[12px] font-bold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[15px] font-semibold",
  headinglg: "text-[20px] font-semibold lg:text-[17px]",
  headingxl: "text-[21px] font-bold lg:text-[17px]",
  heading2xl: "text-[36px] font-extrabold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  heading3xl: "text-[40px] font-bold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading4xl: "text-[56px] font-extrabold lg:text-[47px] md:text-[48px] sm:text-[42px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textlg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-color-text_color-text__4 font-inter ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
