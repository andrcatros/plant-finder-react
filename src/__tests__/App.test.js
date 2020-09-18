import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../components/App";

xtest("renders hello world text", () => {
  const { getByText } = render(<App />);
  const hello = getByText(/hello world/i);
  expect(hello).toBeInTheDocument();
});
