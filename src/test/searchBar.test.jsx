import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
// import {SearchBar} from '../components/SearchBar'

describe('searchBar', async () => {
  it('should render the placeholder', () => {
    render(<SearchBar setSearchTerm={() => {}} />);
    expect(screen.getByPlaceholderText(/Search Artist/i));
  });
  it('should update on input', async () => {
    render(<SearchBar setSearchTerm={() => {}} />);
    const input = screen.getByPlaceholderText(/Search Artist/i);
    userEvent.type(input, 'drake');
    // not using await was causing failed tests
    await (() => expect(input.value).toBe('drake'));
  });
});
