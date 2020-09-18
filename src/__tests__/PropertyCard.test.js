import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PropertyCard from "../components/PropertyCard";

describe("renders PropertyCard component", () => {
  afterEach(cleanup);

  xit("renders placeholder text", () => {
    const { getByText } = render(<PropertyCard />);

    expect(getByText(/placeholder/i).textContent).toBe(
      "this is a placeholder the property card component"
    );
  });

  it("renders PropertyCard component with accurate data when passed props", () => {
    const mockPropertyListing = {
      id: "mockId",
      title: "Mock listing",
      type: "flat",
      bedrooms: 3,
      batrhooms: 2,
      price: 100000,
      city: "Manchester",
      email: "mock.m@email.com",
    };

    const { getByText, asFragment, getByTestId } = render(
      <PropertyCard listing={mockPropertyListing} />
    );

    expect(getByText("Mock listing")).toBeInTheDocument();
    expect(getByTestId("listing-title-test")).toHaveTextContent(/Mock listing/);
    expect(getByTestId("listing-type-test")).toHaveTextContent(/flat/i);
    expect(getByTestId("listing-bedrooms-test")).toBeInTheDocument();
    expect(getByTestId("listing-bathrooms-test")).toBeInTheDocument();
    expect(getByTestId("listing-price-test")).toHaveTextContent("100,000");
    expect(getByTestId("listing-city-test")).toHaveTextContent("Manchester");

    expect(asFragment()).toMatchSnapshot();
  });
});
