/* eslint-disable testing-library/no-container */
import React from "react";
import { render } from "@testing-library/react";
import FileList from "./index";

describe("FileList", () => {

  test("renders a list of files", () => {
    const sortBy = "name";

    const {container} = render(<FileList sortBy={sortBy} />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelectorAll(".file")).toHaveLength(13);
  });
});
