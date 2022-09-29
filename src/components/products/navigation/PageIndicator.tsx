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
      color: "red",
    },
  };

  return (
    <p {...(actual && actualStyle)} onClick={() => moveToPage(page)}>
      {page}
    </p>
  );
};

export default PageIndicator;
