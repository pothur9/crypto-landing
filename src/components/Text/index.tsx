import React from "react";

const sizes = {
  font_base_body__16px: "text-[16px] font-normal lg:text-[13px]",
  textxs: "text-[10px] font-normal",
  texts: "text-[11px] font-normal",
  textxl: "text-[15px] font-normal",
  text2xl: "text-[16px] font-normal lg:text-[13px]",
  text3xl: "text-[17px] font-normal lg:text-[14px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "text2xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-color-text_color-text__4 font-sora ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
