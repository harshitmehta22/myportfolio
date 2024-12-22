import { render, screen } from '@testing-library/react';
import App from './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/First react Test case/i);
  const text2 = screen.getByText(/Second react Test case/i);
  expect(linkElement).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

test('Testing input box', () => {
  render(<App />)
  let checkInput = screen.getByRole("textbox");
  let checkPlaceholdertext = screen.getByPlaceholderText("Enter your name")
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholdertext).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "name");
  expect(checkInput).toHaveAttribute("id", "username");
  // expect(checkInput).toHaveAttribute("value", "Harshit")
});

describe("UI test case group", () => {

  test('test case 1', () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "name");
  });

}); 
