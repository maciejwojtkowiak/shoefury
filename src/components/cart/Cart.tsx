import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCreation } from "services/checkoutApi/checkoutApi";
import { fetchCart } from "store/cart/thunks";
import { AppDispatch, RootState } from "store/store";

import CartItem from "./CartItem";
import ColumnTitle from "./ColumnTitle";

const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const dispatch = useDispatch() as AppDispatch;
  useEffect(() => {
    void dispatch(fetchCart());
  }, []);

  const goToCheckout = (): void => {
    const createCheckout = async (): Promise<void> => {
      const data = await checkoutCreation(cart);
      window.location.href = data.url;
    };
    void createCheckout();
  };

  return (
    <Fragment>
      <div className="w-full grid justify-content-center ">
        <div className="w-[50%] min-h-min border-2 justify-self-center text-right mt-16 ">
          <div className="grid auto-rows-min">
            <div className="w-full grid grid-cols-3 place-items-center mt-8 ">
              <ColumnTitle title="Product name" />
              <ColumnTitle title="Quantity" />
              <ColumnTitle title="Price" />
            </div>
            {cart?.items.map((product) => {
              return (
                <CartItem
                  key={product.product._id}
                  id={product.product._id}
                  title={product.product.title}
                  quantity={product.quantity}
                  price={product.product.price}
                />
              );
            })}
          </div>
          <button
            className="border-2 justify-self-end px-16 py-2 bg-orange-300 mb-8 mr-8 mt-8 text-4xl font-bold text-white "
            onClick={goToCheckout}
          >
            Buy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
