import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../src/components/Search';

describe('Search component', () => {
  it('renders without errors', () => {
    render(<Search />);
    const searchInput = screen.getByTestId('search-movie');
    expect(searchInput).toBeInTheDocument();
  });

  it('triggers search function when form is submitted', () => {
    const mockSearchFunction = jest.fn();
    render(<Search onSearch={mockSearchFunction} />);
    const searchInput = screen.getByPlaceholderText('Search a Movie');
    const searchQuery = 'plane';
    fireEvent.change(searchInput, { target: { value: searchQuery } });
    fireEvent.submit(screen.getByTestId('search-form'));
    expect(mockSearchFunction).toHaveBeenCalledWith(searchQuery);
  });
});
