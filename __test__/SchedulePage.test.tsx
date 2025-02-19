import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import { SchedulePage } from '../src/pages/SchedulePage';
import data from '../src/db.json';

describe('SchedulePage component', () => {
  it('renders correct headings on page', () => {
    renderWithProviders(<SchedulePage />);
    expect(screen.getByText('Schedule of the Day')).toBeInTheDocument();
    expect(screen.getByText('March 3 2025 - Hackathon for participating teams')).toBeInTheDocument();
    expect(screen.getByText('Find below the running order for March 4, 2025.')).toBeInTheDocument();
  });

  it('renders all event times correctly', () => {
    renderWithProviders(<SchedulePage />);
    const times = data.schedule.map((event) => event.time);
    times.forEach((time) => expect(screen.getByText(time)).toBeInTheDocument());
  });

  it('renders all descriptions correctly', () => {
    renderWithProviders(<SchedulePage />);
    const descriptions = data.schedule.map((event) => event.description);
    descriptions.forEach((description) => expect(screen.getByText(description)).toBeInTheDocument());
  });
});
