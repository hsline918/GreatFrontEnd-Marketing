import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PricingSingle from "./PricingSingle";

describe("PricingSingle", () => {
  beforeEach(() => {
    render(<PricingSingle />);
  });

  it("renders main headings correctly", () => {
    expect(screen.getByText("One time purchase")).toBeInTheDocument();
    expect(screen.getByText("Pay as you need")).toBeInTheDocument();
    expect(
      screen.getByText(/We offer one-time purchases with credits/)
    ).toBeInTheDocument();
  });

  it("displays the secondary heading", () => {
    expect(
      screen.getByText("Unlock creativity once, enjoy forever")
    ).toBeInTheDocument();
  });

  it("renders all feature list items", () => {
    const features = [
      "128 available credits for all images",
      "Up to 3 users",
      "24 hour response time",
      "Advanced analytics",
    ];
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it("displays pricing information correctly", () => {
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("$699")).toBeInTheDocument();
    expect(screen.getByText("Prices in USD")).toBeInTheDocument();
  });

  it("shows the correct call-to-action text", () => {
    expect(screen.getByText(/Pay once, use it forever/)).toBeInTheDocument();
    expect(screen.getByText("Buy now")).toBeInTheDocument();
  });

  it("renders the check icon for each feature", () => {
    const checkIcons = screen.getAllByAltText("check-fill");
    expect(checkIcons).toHaveLength(4);
  });
});

// TODO:若要測試是否有正確的 Tailwind 類名:
// import { render, screen } from "@testing-library/react";
// import YourComponent from "./YourComponent";

// test("component has correct Tailwind classes", () => {
//   render(<YourComponent />);
//   const element = screen.getByTestId("your-element");
//   expect(element).toHaveClass("bg-blue-500 text-white p-4");
// });
