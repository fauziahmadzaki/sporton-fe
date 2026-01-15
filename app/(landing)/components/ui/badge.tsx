interface BadgeProps {
  variant?: "primary";
  children?: React.ReactNode;

  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  className,
}: BadgeProps) => {
  const baseStyle = "px-5 py-2 rounded-full  text-sm w-fit";
  const variants = {
    primary: "text-primary bg-primary-light",
  };

  return (
    <p className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};
