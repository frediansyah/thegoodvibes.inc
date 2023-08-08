import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h3: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h5: "sm:text-[32px] md:text-[34px] text-[36px]",
  h6: "sm:text-[28px] md:text-[30px] text-[32px]",
  body1: "sm:text-[20px] md:text-[22px] text-[24px]",
  body2: "font-bold sm:text-[18px] md:text-[20px] text-[22px]",
  body3: "font-bold text-[20px]",
  body4: "text-[18px]",
  body5: "text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
