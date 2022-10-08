import React, { useEffect } from "react";
import { getCheckoutData } from "services/checkoutApi/checkoutApi";

const OrderSuccess = (): JSX.Element => {
  useEffect(() => {
    const getCheckout = async (): Promise<void> => {
      await getCheckoutData();
    };
    void getCheckout();
  }, []);
  return <h1>SUCCESS</h1>;
};

export default OrderSuccess;
