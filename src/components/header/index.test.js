/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Document Viewer")).toBeInTheDocument();
  });
});
