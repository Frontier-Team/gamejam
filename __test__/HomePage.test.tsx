import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { HomePage } from "../src/pages/HomePage";
import { renderWithProviders } from "./test-utils"; 

jest.mock("../src/components/Game", () => ({
  Game: jest.fn(() => <div>Mocked Game Component</div>),
}));

describe("HomePage component", () => {
  it("should display the overlay initially", () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText("Welcome to the Game Jam!")).toBeInTheDocument();
    expect(
      screen.getByText("Would you like to play the game?")
    ).toBeInTheDocument();
  });

  it("should display the game when Yes button is clicked", () => {
    renderWithProviders(<HomePage />);
    fireEvent.click(screen.getByText("Yes"));
    expect(screen.getByText("Mocked Game Component")).toBeInTheDocument();
  });

  it("should display other information when No button is clicked", () => {
    renderWithProviders(<HomePage />);
    fireEvent.click(screen.getByText("No"));
    expect(
      screen.getByText("Other information for the homepage")
    ).toBeInTheDocument();
  });
});
