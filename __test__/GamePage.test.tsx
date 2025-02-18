import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import GamePage from "../src/pages/GamePage";
import { renderWithProviders } from "./test-utils";

jest.mock("../src/components/Game", () => ({
  Game: jest.fn(() => <div>Mocked Game Component</div>),
}));

describe("GamePage component", () => {
  it("should display the overlay initially", () => {
    renderWithProviders(<GamePage />);
    expect(screen.getByText("Welcome to the Game Jam!")).toBeInTheDocument();
    expect(
      screen.getByText("Would you like to play the game?")
    ).toBeInTheDocument();
  });

  it("should display the game when Yes button is clicked", () => {
    renderWithProviders(<GamePage />);
    fireEvent.click(screen.getByText("Yes"));
    expect(screen.getByText("Mocked Game Component")).toBeInTheDocument();
  });

  it("should display other information when No button is clicked", () => {
    renderWithProviders(<GamePage />);
    fireEvent.click(screen.getByText("No"));
    expect(
      screen.getByText("Other information for the homepage")
    ).toBeInTheDocument();
  });
});
