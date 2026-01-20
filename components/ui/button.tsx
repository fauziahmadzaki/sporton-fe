import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md";
  className?: string;
  asChild?: boolean;
}

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  asChild = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "inline-flex justify-center items-center gap-2 transition-transform";

  const interactiveStyle = "cursor-pointer hover:scale-105";

  const disabledStyle = "cursor-not-allowed opacity-50 hover:scale-100";

  const variants = {
    primary: "bg-primary text-white",
    ghost: "bg-transparent text-black",
    dark: "bg-dark text-white",
  };

  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-9 py-4 text-base",
  };

  const classes = `
    ${baseStyle}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledStyle : interactiveStyle}
    ${className}
  `;

  if (
    asChild &&
    React.isValidElement<{ className?: string; "aria-disabled"?: boolean }>(
      children,
    )
  ) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className ?? ""}`,
      "aria-disabled": disabled,
    });
  }

  return (
    <button {...props} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
