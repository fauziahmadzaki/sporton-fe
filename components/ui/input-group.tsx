import { HTMLInputTypeAttribute } from "react";
import { Label } from "./label";
import { TextArea } from "./textarea";
import { Input } from "./input";

interface InputGroupProps {
  type?: HTMLInputTypeAttribute | "textarea";
  id?: string;
  name?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}

export const InputGroup = ({
  type,
  id,
  name,
  onChange,
  value,
  placeholder,
  label,
  errorMessage,
}: InputGroupProps) => {
  return (
    <div className="mb-5">
      <Label htmlFor={id}>{label}</Label>
      {type === "textarea" ? (
        <TextArea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <Input
          onChange={onChange}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      )}
      {errorMessage && (
        <p className="text-red-500 text-xs mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
};
