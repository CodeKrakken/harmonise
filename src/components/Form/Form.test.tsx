import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import "@testing-library/jest-dom";

test("Displays placeholder text 'Dawn of the Squid'", async () => {
  render(<Form />);
  expect(screen.getByPlaceholderText('Dawn of the Squid')).toBeInTheDocument();
});

test("Displays 'Artist Name' form field label", async() => {
  render(<Form />);
  expect(screen.getByLabelText('Artist Name')).toBeInTheDocument();
});
