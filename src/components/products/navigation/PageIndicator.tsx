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
      color: "#fb923c",
      fontWeight: "900",
    },
  };

  return (
    <p
      {...(actual && actualStyle)}
      onClick={() => moveToPage(page)}
      className="cursor-pointer"
    >
      {page}
    </p>
  );
};

export default PageIndicator;
