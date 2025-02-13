import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { GridItem } from '../src/components/GridItem';
import { renderWithProviders } from './test-utils';

const mockItemDetails = {
  id: 1,
  name: 'Mock Item',
  role: 'This is a mock role',
  bio: 'This is the biography of Mock Item',
};

describe('GridItem component', () => {
  it('should display the name and role', () => {
    renderWithProviders(<GridItem {...mockItemDetails} />);
    expect(screen.getByText('Mock Item')).toBeInTheDocument();
    expect(screen.getByText('This is a mock role')).toBeInTheDocument();
  });

  it('should not display the bio initially', () => {
    renderWithProviders(<GridItem {...mockItemDetails} />);
    expect(screen.queryByText('This is the biography of Mock Item')).not.toBeInTheDocument();
  });

  it('should display the bio when clicked', () => {
    renderWithProviders(<GridItem {...mockItemDetails} />);
    fireEvent.click(screen.getByText('Mock Item'));
    expect(screen.getByText('This is the biography of Mock Item')).toBeInTheDocument();
  });

  it('should hide the bio when clicked again', () => {
    renderWithProviders(<GridItem {...mockItemDetails} />);
    fireEvent.click(screen.getByText('Mock Item'));
    fireEvent.click(screen.getByText('Mock Item'));
    expect(screen.queryByText('This is the biography of Mock Item')).not.toBeInTheDocument();
  });
});
