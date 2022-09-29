import React from "react";

interface PageIndicatorProps {
  moveToPage: (pageNum: number) => void;
  page: number;
}

const PageIndicator = ({
  moveToPage,
  page,
}: PageIndicatorProps): JSX.Element => {
  return <button onClick={() => moveToPage(page)}>{page}</button>;
};

export default PageIndicator;
