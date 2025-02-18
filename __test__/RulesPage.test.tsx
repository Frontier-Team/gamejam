import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { RulesPage } from "../src/pages/RulesPage";
import { renderWithProviders } from "./test-utils";

describe("RulesPage", () => {
  test("renders without crashing", () => {
    renderWithProviders(<RulesPage />);
  });

  test("renders Code of Conduct section", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("Code of Conduct")).toBeInTheDocument();
  });

  test("renders Accessibility - Supporting Information section", () => {
    renderWithProviders(<RulesPage />);
    expect(
      screen.getByText("Accessibility - Supporting Information")
    ).toBeInTheDocument();
  });

  test("renders Inclusive paragraph", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("Inclusive -")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Be inclusive in your actions and language. Help us make the event something for everyone to benefit from."
      )
    ).toBeInTheDocument();
  });

  test("renders Sustainable paragraph", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("Sustainable -")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Don't throw away reusable giveaway items - if you don't need or want it, don't accept it."
      )
    ).toBeInTheDocument();
  });

  test("renders Trust paragraph", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("Trust -")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Assume people are working in our best interests and trust them in their endeavours."
      )
    ).toBeInTheDocument();
  });

  test("renders Bold paragraph", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("Bold -")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Be prepared to meet new people, learn new things and experiment with technology."
      )
    ).toBeInTheDocument();
  });

  test("renders People first paragraph", () => {
    renderWithProviders(<RulesPage />);
    expect(screen.getByText("People first -")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Treat each other with respect and go the extra mile to support each other."
      )
    ).toBeInTheDocument();
  });

  test("renders link to Inclusive Briefing Pack", () => {
    renderWithProviders(<RulesPage />);
    const link = screen.getByText("Inclusive Briefing Pack");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#briefing-pack");
  });

  test("renders Dundee Game Jam Inclusive Briefing Pack section", () => {
    renderWithProviders(<RulesPage />);
    expect(
      screen.getByText("Dundee Game Jam Inclusive Briefing Pack")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We have prepared a Dundee Game Jam Inclusive Briefing Pack which describes what you will experience at the event and includes accessibility information. A copy is stored on the Dundee Game Jam event SharePoint site and some printed copies are available at the event reception."
      )
    ).toBeInTheDocument();
  });
});
