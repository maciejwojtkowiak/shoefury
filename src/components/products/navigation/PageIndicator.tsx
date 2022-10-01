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
      fontWeight: "900",
    },
  };

  return (
    <div
      className={`w-8 h-12 bg-gradient-to-r ${
        actual
          ? "from-orange-300 to-orange-400"
          : "from-orange-200 to-orange-300"
      } text-white grid place-items-center rounded full mr-2 text-lg`}
    >
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
