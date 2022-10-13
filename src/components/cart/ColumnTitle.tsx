import React from "react";
interface ColumnTitleProps {
  title: string;
}

const ColumnTitle = ({ title }: ColumnTitleProps): JSX.Element => {
  return (
    <h2 className="bg-orange-300 px-6 py-2 font-bold text-2xl w-[220px] text-center text-white rounded-md ">
      {title}
    </h2>
  );
};

export default ColumnTitle;
