export const Label = ({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={`text-xs ${className}`} {...props}>
      {children}
    </label>
  );
};
