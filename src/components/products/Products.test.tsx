import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import mockedAxios from "axios";
import { IProduct } from "types/product";

import ReduxProvider from "components/wrappers/ReduxProvider";

import Products from "./Products";

describe("Test of products fetch", () => {
  test("render products", async () => {
    (mockedAxios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        products: [
          {
            title: "foo",
            price: "12",
            description: "desc",
            _id: "123",
            imageData: "das82e2ej",
          },
        ] as IProduct[],
      },
    });

    render(
      <ReduxProvider>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </ReduxProvider>,
    );
    const productsList = await screen.findAllByRole("link");
    expect(productsList.length).toBeGreaterThan(0);
    expect(productsList.length).toBeLessThan(10);
  });
});
