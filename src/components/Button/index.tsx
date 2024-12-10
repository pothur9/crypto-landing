import React from "react";

const shapes = {
  round: "rounded-md",
} as const;
const variants = {
  fill: {
    white_A700_19: "bg-white-a700_19 text-color-text_color-text__4",
    orange_300_16: "bg-orange-300_16 text-color-text_color-text__4",
  },
  gradient: {
    deep_purple_A100_deep_purple_500: "bg-gradient text-color-text_color-text__4",
  },
} as const;
const sizes = {
  xl: "h-[44px] px-6 text-[16px]",
  "2xl": "h-[48px] px-6 text-[18px]",
  sm: "h-[32px] px-3 text-[15px]",
  md: "h-[32px] px-4 text-[12px]",
  lg: "h-[36px] px-5 text-[16px]",
  xs: "h-[24px] px-4 text-[12px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "xs",
  color = "orange_300_16",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-color-text_color-text__4 ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
