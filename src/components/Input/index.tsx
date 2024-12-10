import React from "react";

const shapes = {
  round: "rounded-[20px]",
  square: "rounded-[0px]",
} as const;

const variants = {
  fill: {
    deep_purple_300_19: "bg-deep_purple-300_19",
  },
  outline: {
    blue_gray_900: "border-blue_gray-900 border-t border-b border-solid text-color-text_color-text__4",
  },
} as const;

const sizes = {
  xs: "h-[40px] px-2.5 text-[16px]",
  sm: "h-[46px] px-3 text-[12px]",
  md: "h-[80px] px-3 text-[14px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "md",
      color = "blue_gray_900",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-color-text_color-text__4 border-solid  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
