export const TextArea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={`px-3.75 py-2.25 w-full  bg-[#F0F0F0] placeholder:text-[A0A0A0] text-sm h-[150px] ${className}`}
      {...props}
    ></textarea>
  );
};
