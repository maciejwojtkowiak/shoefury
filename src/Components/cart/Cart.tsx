import config from "../../config.json";
import { Fragment, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import ColumnTitle from "./ColumnTitle";

import { CartProduct } from "types/cart";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  useEffect(() => {
    const getCartProducts = async () => {
      try {
        const response = await fetch(`${config.backendDomain}/cart/get-cart`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setProducts(data.products.cart.items);
      } catch (e) {
        console.log(e);
      }
    };
    getCartProducts();
  }, []);

  const onClickHandler = async () => {
    const response = await fetch(`${config.backendDomain}/checkout/create-checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: products }),
    });
    const data = await response.json();
    window.location.href = data.url;
  };
  console.log("PRODS", products);

  return (
    <Fragment>
      <div className="h-screen w-full grid grid-rows-[200px_minmax(900px,_1fr)_100px]  ">
        <div className="w-full ">
          <Navbar />
        </div>
        <div className="w-[50%] h-full border-2 justify-self-center grid grid-rows-[90%,1fr] text-right ">
          <div className="h-[90%] w-full">
            <div className="w-full grid grid-cols-3 place-items-center mt-8 ">
              <ColumnTitle title="Product name" />
              <ColumnTitle title="Quantity" />
              <ColumnTitle title="Price" />
            </div>

            {products.map((product: CartProduct) => {
              return (
                <CartItem
                  key={product._id}
                  title={product.product.title}
                  quantity={product.quantity}
                  price={product.product.price}
                />
              );
            })}
          </div>
          <button
            className="border-2 justify-self-end px-16 py-2 bg-orange-300 mb-8 mr-8 text-4xl font-bold text-white "
            onClick={onClickHandler}
          >
            Buy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
