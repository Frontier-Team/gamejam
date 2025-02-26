import React from 'react';
import { screen } from '@testing-library/react';
import { TalkAgendaPage } from '../src/pages/TalkAgendaPage';
import { renderWithProviders } from './test-utils'; 

describe('TalkAgendaPage component', () => {
  it('renders the page title', () => {
    renderWithProviders(<TalkAgendaPage />);
    const titleElement = screen.getByText(/Talk Agenda/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders tables for Robertson Learning Studio and Weston Learning Studio', () => {
    renderWithProviders(<TalkAgendaPage />);
    const talkRoom1Heading = screen.getByText(/Robertson Learning Studio/i);
    const talkRoom2Heading = screen.getByText(/Weston Learning Studio/i);
    expect(talkRoom1Heading).toBeInTheDocument();
    expect(talkRoom2Heading).toBeInTheDocument();
  });
});
