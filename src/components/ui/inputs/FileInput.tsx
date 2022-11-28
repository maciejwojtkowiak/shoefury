import React from "react";

interface FileInputProps {
  label: string;
  name: string;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({
  label,
  name,
  onFileUpload,
}: FileInputProps): JSX.Element => {
  return (
    <div>
      <label
        className=" block text-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="file_input"
      >
        {label}
      </label>
      <input
        className="border-2 border-orange-200 cursor-pointer file:cursor-pointer file:bg-orange-300 file:px-6 file:py-2 file:mr-4 file:border-none p-2 file:font-bold file:text-white"
        placeholder="Product name"
        onChange={onFileUpload}
        name={name}
        id="file_input"
        type="file"
      />
    </div>
  );
};

export default FileInput;
