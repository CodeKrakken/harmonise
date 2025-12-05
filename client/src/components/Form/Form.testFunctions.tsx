import { render, screen } from "@testing-library/react";
import Form from "./Form";

export const form_test_placeholder: () => Promise<void> = async () => {
  render(<Form />);
  expect(screen.getByPlaceholderText("Dawn of the Squid")).toBeInTheDocument();
};
