/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Sort from "./index";

describe("Sort component", () => {
    const setSortBy = jest.fn();

  it("renders with no default selected", () => {
    const { getByLabelText } = render(<Sort setSortBy={setSortBy} />);

    expect(getByLabelText("Name")).not.toBeChecked();   
    expect(getByLabelText("Date")).not.toBeChecked();   
    expect(getByLabelText("Size")).not.toBeChecked();   
  });

  it("updates correctly when an item is selected", () => {
    const { getByLabelText, getByTestId } = render(<Sort setSortBy={setSortBy} />);

    fireEvent.click(getByTestId("sort-by-size"));
    expect(getByLabelText("Size")).toBeChecked();   
  });
});
