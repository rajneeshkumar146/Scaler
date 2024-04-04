// VDOM -> react-tesing-library
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  // Rendering our component.
  render(<App />);

  // Screen -> will be the output.
  const linkElement = screen.getByText(/learn react/i);

  // Assertion: You will try to match your expectation.
  expect(linkElement).toBeInTheDocument();
});
