import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

it('increments count on click', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  await userEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});