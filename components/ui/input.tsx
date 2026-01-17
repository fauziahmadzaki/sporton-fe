import { HTMLInputTypeAttribute } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  placeholder,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={`block w-full px-3.75 py-2.25 bg-[#F0F0F0] placeholder:text-[A0A0A0] text-sm ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};
