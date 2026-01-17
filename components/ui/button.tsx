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
  className,
  asChild = false,

  ...props
}: ButtonProps) => {
  const baseStyle =
    "inline-flex justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-transform";
  const variants = {
    primary: "bg-primary text-white",
    ghost: "bg-transparant text-black",
    dark: "bg-dark text-white",
  };

  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-9 py-4 text-base",
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className}`,
    });
  }
  return (
    <button
      {...props}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
