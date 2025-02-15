import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { GridItem } from '../src/components/GridItem';
import { renderWithProviders } from './test-utils';

const mockItemDetails = {
  id: '1',
  name: 'Mock Item',
  role: 'This is a mock role',
  bio: 'This is the biography of Mock Item',
};

describe('GridItem component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display the name and role', () => {
    renderWithProviders(<GridItem
      {...mockItemDetails}
      isSelected={false}
      setSelectedItem={() => {}}
    />);
    expect(screen.getByText('Mock Item')).toBeInTheDocument();
    expect(screen.getByText('This is a mock role')).toBeInTheDocument();
  });

  it('should not display the bio initially', () => {
    renderWithProviders(<GridItem
      {...mockItemDetails}
      isSelected={false}
      setSelectedItem={() => {}}
    />);
    expect(screen.queryByText('This is the biography of Mock Item')).not.toBeInTheDocument();
  });

  it('should display the bio when clicked', () => {
    renderWithProviders(<GridItem
      {...mockItemDetails}
      isSelected={true}
      setSelectedItem={() => {}}
    />);
    fireEvent.click(screen.getByTestId('collapsed-card-heading'));
    expect(screen.getByText('This is the biography of Mock Item')).toBeInTheDocument();
  });

  it('should hide the bio when clicked again', async () => {
    const mockCallback = jest.fn();
    renderWithProviders(<GridItem
      {...mockItemDetails}
      isSelected={true}
      setSelectedItem={mockCallback}
    />);
    fireEvent.click(screen.getByTestId('collapsed-card-heading'));
    fireEvent.click(screen.getByTestId('expanded-card-heading'));
    expect(mockCallback).toHaveBeenCalledWith(null);
  });
});
