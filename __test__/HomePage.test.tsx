import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { HomePage } from "../src/pages/HomePage";
import { renderWithProviders } from "./test-utils";

describe("HomePage", () => {
  test("renders without crashing", () => {
    renderWithProviders(<HomePage />);
  });
});
