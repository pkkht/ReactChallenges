// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckboxList from './App';

describe('App component tests', () => {
  test('renders checkboxes with labels', () => {
    const { getByText } = render(<CheckboxList />);
    expect(getByText('Dogs')).toBeInTheDocument();
    expect(getByText('Cats')).toBeInTheDocument();
    expect(getByText('Cows')).toBeInTheDocument();
    expect(getByText('Deers')).toBeInTheDocument();
  });

  test('checkboxes can be checked', () => {
    const { getByTestId } = render(<CheckboxList />);
    const dogCheckbox = getByTestId('checkbox-1');
    const catCheckbox = getByTestId('checkbox-2');

    expect(dogCheckbox.checked).toBe(false);
    expect(catCheckbox.checked).toBe(false);

    fireEvent.click(dogCheckbox);
    expect(dogCheckbox.checked).toBe(true);
    expect(catCheckbox.checked).toBe(false);

    fireEvent.click(catCheckbox);
    expect(dogCheckbox.checked).toBe(true);
    expect(catCheckbox.checked).toBe(true);
  });

  test('select all button selects all checkboxes', () => {
    const { getByTestId } = render(<CheckboxList />);
    const selectAllButton = getByTestId('button');
    const dogCheckbox = getByTestId('checkbox-1');
    const catCheckbox = getByTestId('checkbox-2');
    const cowCheckbox = getByTestId('checkbox-3');
    const deerCheckbox = getByTestId('checkbox-4');

    expect(dogCheckbox.checked).toBe(false);
    expect(catCheckbox.checked).toBe(false);
    expect(cowCheckbox.checked).toBe(false);
    expect(deerCheckbox.checked).toBe(false);

    fireEvent.click(selectAllButton);
    expect(dogCheckbox.checked).toBe(true);
    expect(catCheckbox.checked).toBe(true);
    expect(cowCheckbox.checked).toBe(true);
    expect(deerCheckbox.checked).toBe(true);
  });
});
