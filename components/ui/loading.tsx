import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <AiOutlineLoading3Quarters
        className="text-primary animate-spin font-bold"
        size={48}
      />
    </div>
  );
};
