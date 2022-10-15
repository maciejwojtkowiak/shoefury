import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCreation } from "services/checkoutApi/checkoutApi";
import { fetchCart } from "store/cart/thunks";
import { AppDispatch, RootState } from "store/store";
import { decodeBase64 } from "utils/decodeBase64";

import SquareButton from "components/ui/buttons/SquareButton";

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

  console.log(cart, "CART");

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
                  image={decodeBase64(product.product.imageData)}
                  title={product.product.title}
                  quantity={product.quantity}
                  price={product.product.price}
                />
              );
            })}
          </div>
          <SquareButton
            buttonText="Buy"
            disabled={!(cart?.items.length > 0)}
            width="w-64"
            height="h-16"
            margin="mr-8 mt-12 mb-4"
            textSize="4xl"
            onClickHandler={goToCheckout}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
