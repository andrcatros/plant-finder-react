import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Alert from "../components/Alert";

describe("renders Alert component", () => {
  afterEach(cleanup);

  xit("renders error Alert component", () => {
    const { getByText, asFragment } = render(<Alert message="Error" />);
    expect(getByText(/Error/i).textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });

  xit("renders success Alert component", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success" success />
    );
    expect(getByText(/Success/i).textContent).toBe("Success!");
    expect(asFragment()).toMatchSnapshot();
  });
  it("does not render the Alert component when there is no message", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
