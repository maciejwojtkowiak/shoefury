import React, { Fragment, useEffect, useState } from "react";
import config from "config/config.json";
import { ICart } from "types/cart";

import CartItem from "./CartItem";
import ColumnTitle from "./ColumnTitle";

const Cart = (): JSX.Element => {
  const [cart, setCart] = useState<ICart>();
  useEffect(() => {
    const getCartProducts = async (): Promise<void> => {
      try {
        const response = await fetch(`${config.backendDomain}/cart/get-cart`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
          },
        });
        const data = await response.json();
        console.log("DATA", data.cart.cart);
        setCart(data.cart.cart);
      } catch (e) {
        console.log(e);
      }
    };
    void getCartProducts();
  }, []);
  console.log("CART PRODS", cart);
  const goToCheckout = (): void => {
    const createCheckout = async (): Promise<void> => {
      const response = await fetch(
        `${config.backendDomain}/checkout/create-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cart }),
        },
      );
      const data = await response.json();
      window.location.href = data.url;
    };
    void createCheckout();
  };
  console.log("PRODUCTs", cart);
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
                  key={product.product.title}
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
