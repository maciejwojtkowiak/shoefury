import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import axios from "axios";

// import { IProduct } from "types/product";
import ReduxProvider from "components/wrappers/ReduxProvider";

import Products from "./Products";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test of products fetch", () => {
  test("render products", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        title: "product",
        description: "description",
        _id: "123",
        imageData: "",
        price: "15",
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
