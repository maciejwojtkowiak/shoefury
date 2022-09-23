import React from "react";
import { render, screen } from "@testing-library/react";

import Products from "./Products";

describe("Test of products fetch", () => {
  test("render products", async () => {
    render(<Products />);
    const productsList = await screen.findAllByRole("div");
    expect(productsList).toHaveLength(1);
  });
});
