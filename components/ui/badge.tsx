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

export const SmallBadge = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`absolute -top-1.5 -right-1.5 size-4 text-[10px] text-white bg-primary flex items-center justify-center rounded-full ${className}`}
    >
      {children}
    </div>
  );
};
