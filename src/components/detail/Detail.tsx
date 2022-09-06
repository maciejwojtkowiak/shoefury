import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (): JSX.Element => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {}, []);
  return <div>hej</div>;
};

export default Detail;
