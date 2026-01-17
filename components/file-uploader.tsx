"use client";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

interface FileUploaderProps {
  name: string;
  id: string;
  placeholder: string;
  handleChange?: (file: File | null) => void;
}

export const FileUploader = ({
  name,
  id,
  placeholder,
  handleChange,
}: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;

    setFile(selectedFile);
    handleChange?.(selectedFile);
  };

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="py-10 w-full bg-orange-500/10 border border-dashed border-amber-500 flex flex-col items-center justify-center gap-2.5 cursor-pointer"
      >
        <FiUploadCloud size={24} className="text-orange-500" />
        <p className="text-xs">{placeholder}</p>

        <input type="file" hidden id={id} name={name} onChange={onChange} />
      </label>

      {file && <p className="text-xs mt-2 text-gray-600">{file.name}</p>}
    </div>
  );
};
