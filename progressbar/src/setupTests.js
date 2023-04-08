// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ProgressBar from './App.js';

afterEach(cleanup);

describe('App component tests', () => {
  test("renders a ProgressBar component", () => {
    const { getByTestId } = render(<ProgressBar />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toBeInTheDocument();
  });
  
  test("renders with a height of 20px", () => {
    const { getByTestId } = render(<ProgressBar />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toHaveStyle("height: 20px");
  });
  
  test("renders with a border radius of 5px", () => {
    const { getByTestId } = render(<ProgressBar />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toHaveStyle("border-radius: 5px");
  });
  
  test("renders the remaining part of the bar with lightgrey background color", () => {
    const { getByTestId } = render(<ProgressBar />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toHaveStyle("background-color: lightgrey");
  });
  
  test("renders the filled part of the bar with green background color", () => {
    const { getByTestId } = render(<ProgressBar />);
    const progress = getByTestId("progress");
    expect(progress).toHaveStyle("background-color: green");
  });
  
  test("renders the filled part of the bar with a border radius of 5px", () => {
    const { getByTestId } = render(<ProgressBar />);
    const progress = getByTestId("progress");
    expect(progress).toHaveStyle("border-radius: 5px");
  });
  
  test("renders the filled part of the bar with the correct width", () => {
    const { getByTestId } = render(<ProgressBar percent={50} />);
    const progress = getByTestId("progress");
    expect(progress).toHaveStyle("width: 50%");
  });
  
  test("renders the filled part of the bar with the correct width when percent is greater than 100", () => {
    const { getByTestId } = render(<ProgressBar percent={150} />);
    const progress = getByTestId("progress");
    expect(progress).toHaveStyle("width: 100%");
  });
});
