// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

describe('App component tests', () => {
  test('Renders increment and decrement buttons', () => {
    const { getByTestId } = render(<App />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
  
    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton.textContent).toBe('Increment')
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton.textContent).toBe('Decrement')
  
  });
  
  test('Increments count when increment button is clicked', () => {
    const { getByTestId } = render(<App />);
    const incrementButton = getByTestId('increment');
    const countElement = getByTestId('count');
  
    fireEvent.click(incrementButton);
  
    expect(countElement).toHaveTextContent('1');
  });
  
  test('Decrements count when decrement button is clicked', () => {
    const { getByTestId } = render(<App />);
    const decrementButton = getByTestId('decrement');
    const countElement = getByTestId('count');
  
    fireEvent.click(decrementButton);
  
    expect(countElement).toHaveTextContent('-1');
  });

  test('Updates the count difference when increment and decrement buttons are clicked', () => {
    const { getByTestId } = render(<App />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    const countElement = getByTestId('count');
  
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
  
    expect(countElement).toHaveTextContent('1');
  });

  test('Resets the count to zero', () => {
    const { getByTestId } = render(<App />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    const countElement = getByTestId('count');
    const resetButton = getByTestId('reset');
  
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(resetButton);
  
    expect(countElement).toHaveTextContent('0');
  });
})