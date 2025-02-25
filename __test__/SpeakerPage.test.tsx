import React from 'react';
import { screen } from '@testing-library/react';
import { SpeakerPage } from '../src/pages/SpeakerPage';
import { renderWithProviders } from './test-utils'; 

describe('SpeakerPage component', () => {
  it('renders the page title', () => {
    renderWithProviders(<SpeakerPage />);
    const titleElement = screen.getByText(/Talk Agenda/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders tables for Robertson Learning Studio and Weston Learning Studio', () => {
    renderWithProviders(<SpeakerPage />);
    const talkRoom1Heading = screen.getByText(/Robertson Learning Studio/i);
    const talkRoom2Heading = screen.getByText(/Weston Learning Studio/i);
    expect(talkRoom1Heading).toBeInTheDocument();
    expect(talkRoom2Heading).toBeInTheDocument();
  });
});
