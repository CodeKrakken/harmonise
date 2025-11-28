import { render, screen } from "@testing-library/react";
import Title from "./Title";
import "@testing-library/jest-dom";

test("Displays the title 'Harmonise'", () => {

  render(<Title />);
  const text = screen.getByText('Harmonise')
  
  expect(text).toBeInTheDocument();

});
