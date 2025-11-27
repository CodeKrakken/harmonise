import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("Displays the title 'Harmonise'", async () => {
    render(<App />);
    expect(screen.getByText('Harmonise')).toBeInTheDocument();
});

test("Displays placeholder text 'Dawn of the Squid'", async () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Dawn of the Squid')).toBeInTheDocument();
});
