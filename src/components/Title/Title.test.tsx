import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Title from "./Title";
import "@testing-library/jest-dom";

test("increments the count on click", async () => {
  render(<Title />);
  expect(screen.getByText('Harmonise')).toBeInTheDocument();
});
