import React from 'react';
import { screen } from '@testing-library/react';
import { SpeakerPage } from '../src/pages/SpeakerPage';
import { renderWithProviders } from './test-utils'; 

describe('SpeakerPage component', () => {
  it('renders the page title', () => {
    renderWithProviders(<SpeakerPage />);
    const titleElement = screen.getByText(/Talk Schedule/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders tables for Talk Room 1 and Talk Room 2', () => {
    renderWithProviders(<SpeakerPage />);
    const talkRoom1Heading = screen.getByText(/Talk Room 1/i);
    const talkRoom2Heading = screen.getByText(/Talk Room 2/i);
    expect(talkRoom1Heading).toBeInTheDocument();
    expect(talkRoom2Heading).toBeInTheDocument();
  });
});
