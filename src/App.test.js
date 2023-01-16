import { render, screen } from '@testing-library/react';
import CheckList from './CheckList';

test('renders learn react link', () => {
  render(<CheckList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
