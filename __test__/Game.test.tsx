/* eslint-disable @typescript-eslint/no-require-imports */
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Game } from "../src/components/Game";

jest.mock("react-unity-webgl", () => ({
  Unity: jest.fn(),
  useUnityContext: jest.fn(),
}));

describe("Game component", () => {
  it("should display loading spinner while game is loading", () => {
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: false,
      initialisationError: null,
    }));

    render(<Game />);
    expect(screen.getByTestId("pacman-loader")).toBeInTheDocument();
  });

  it("should show game content when loaded", async () => {
    require("react-unity-webgl").Unity.mockImplementationOnce(() => (
      <div>Mocked Unity component</div>
    ));
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: true,
      initialisationError: null,
    }));

    render(<Game />);
    await waitFor(() => {
      expect(screen.getByText("Mocked Unity component")).toBeInTheDocument();
    });
  });

  it("should display error message if initialisation fails", () => {
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: false,
      initialisationError: true,
    }));

    render(<Game />);
    expect(screen.getByText("Error loading the game!")).toBeInTheDocument();
  });
});
