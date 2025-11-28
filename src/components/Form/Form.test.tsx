import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import "@testing-library/jest-dom";
import { handleSubmit } from "../../functions/handleSubmit";

jest.mock("../../functions/handleSubmit", () => ({

  handleSubmit: jest.fn()

}));

test("Displays field with placeholder text 'Dawn of the Squid'", () => {

  render(<Form />);
  const text = screen.getByPlaceholderText('Dawn of the Squid')
  
  expect(text).toBeInTheDocument();

});

test("Displays 'Artist Name' field label", () => {

  render(<Form />);
  const text = screen.getByLabelText('Artist Name')

  expect(text).toBeInTheDocument();

});

test("Accepts user input", async () => {

  render(<Form />);
  const artistNameField = screen.getByLabelText("Artist Name");

  await userEvent.type(artistNameField, "Music Research Unit");

  expect(artistNameField).toHaveValue("Music Research Unit");

});

test("Calls handleSubmit with input data", async () => {

  render(<Form />);
  const artistNameField = screen.getByLabelText("Artist Name");
  const button = screen.getByRole("button", { name: /submit/i });

  await userEvent.type(artistNameField, 'Music Research Unit')
  await userEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledWith({ artistName: 'Music Research Unit'});
  
});
