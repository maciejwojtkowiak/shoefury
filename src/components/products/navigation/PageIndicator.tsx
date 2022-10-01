import React from "react";

interface PageIndicatorProps {
  actual?: boolean;
  moveToPage: (pageNum: number) => void;
  page: number;
}

const PageIndicator = ({
  actual,
  moveToPage,
  page,
}: PageIndicatorProps): JSX.Element => {
  const actualStyle = {
    style: {
      color: "white",
      fontWeight: "900",
    },
  };

  return (
    <div className="w-8 h-12 bg-gradient-to-r from-orange-300 to-orange-400 grid place-items-center rounded full mr-2 text-lg">
      <p
        {...(actual && actualStyle)}
        onClick={() => moveToPage(page)}
        className="cursor-pointer"
      >
        {page}
      </p>
    </div>
  );
};

export default PageIndicator;
