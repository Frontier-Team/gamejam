import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { Overlay } from "../src/components/Overlay";
import { renderWithProviders } from "./test-utils"; // Import the custom render function

describe("Overlay component", () => {
  it("should display the overlay with the correct text", () => {
    renderWithProviders(
      <Overlay onPlayGame={jest.fn()} onSkipGame={jest.fn()} />
    );
    expect(screen.getByText("Welcome to the Game Jam!")).toBeInTheDocument();
    expect(
      screen.getByText("Would you like to play the game?")
    ).toBeInTheDocument();
  });

  it("should call onPlayGame when Yes button is clicked", () => {
    const onPlayGame = jest.fn();
    renderWithProviders(
      <Overlay onPlayGame={onPlayGame} onSkipGame={jest.fn()} />
    );
    fireEvent.click(screen.getByText("Yes"));
    expect(onPlayGame).toHaveBeenCalled();
  });

  it("should call onSkipGame when No button is clicked", () => {
    const onSkipGame = jest.fn();
    renderWithProviders(
      <Overlay onPlayGame={jest.fn()} onSkipGame={onSkipGame} />
    );
    fireEvent.click(screen.getByText("No"));
    expect(onSkipGame).toHaveBeenCalled();
  });
});
