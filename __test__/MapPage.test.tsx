import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "./test-utils";
import MapPage from "../src/pages/MapPage";

describe("MapPage", () => {
  test("renders without crashing", () => {
    renderWithProviders(<MapPage />);
  });

  test("renders the heading", () => {
    renderWithProviders(<MapPage />);
    expect(screen.getByText("Map/Floor plan")).toBeInTheDocument();
  });

  test("renders the Map component", () => {
    renderWithProviders(<MapPage />);
    expect(screen.getByAltText("Map")).toBeInTheDocument();
  });
});
