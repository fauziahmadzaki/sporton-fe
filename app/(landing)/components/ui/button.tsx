interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  className,
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

  return (
    <button
      {...props}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
