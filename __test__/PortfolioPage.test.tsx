import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PortfolioPage } from '../src/pages/PortfolioPage';
import { renderWithProviders } from "./test-utils";
import data from '../src/db.json';

describe('PortfolioPage', () => {
  test('renders the heading', () => {
    renderWithProviders(<PortfolioPage />);
    const headingElement = screen.getByText(/List of Profiles/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the table with correct headers', () => {
    renderWithProviders(<PortfolioPage />);
    const headers = ['Name', 'Occupation', 'Details', 'Get in touch'];
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders the table with correct data', () => {
    renderWithProviders(<PortfolioPage />);
    data.portfolio.forEach((portfolioItem) => {
      expect(screen.getByText(portfolioItem.name)).toBeInTheDocument();
      expect(screen.getByText(portfolioItem.details)).toBeInTheDocument();
      expect(screen.getByText(portfolioItem.contact)).toBeInTheDocument();
    });
  });
});
