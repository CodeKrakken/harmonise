import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import "@testing-library/jest-dom";
import { handleSubmit } from "../../functions/handleSubmit";

jest.mock("../../functions/handleSubmit", () => ({
  handleSubmit: jest.fn()
}));


test("Displays placeholder text 'Dawn of the Squid'", () => {
  render(<Form />);
  expect(screen.getByPlaceholderText('Dawn of the Squid')).toBeInTheDocument();
});

test("Displays 'Artist Name' form field label", () => {
  render(<Form />);
  expect(screen.getByLabelText('Artist Name')).toBeInTheDocument();
});

test("Accepts user input", async () => {
  render(<Form />);

  const artistNameField = screen.getByLabelText("Artist Name");

  await userEvent.type(artistNameField, "Music Research Unit");

  expect(artistNameField).toHaveValue("Music Research Unit");
});

test ('Has a Submit button', () => {
  render (<Form />);

  const button = screen.getByRole('button', { name: 'Submit' });

  expect(button).toBeInTheDocument();
})

test("Runs handleSubmit when Submit button pressed", async () => {

  render(<Form />);
  const artistNameField = screen.getByLabelText("Artist Name");
  const button = screen.getByRole("button", { name: /submit/i });

  await userEvent.click(button);

  expect(handleSubmit).toHaveBeenCalled();
});
