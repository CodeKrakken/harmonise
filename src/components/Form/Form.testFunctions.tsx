import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";
import { handleSubmit } from "../../functions/handleSubmit";

jest.mock("../../functions/handleSubmit", () => ({

  handleSubmit: jest.fn()

}));


export const form_test_placeholder: () => Promise<void> = async () => {
  
  render(<Form />);
  const text = screen.getByPlaceholderText('Dawn of the Squid')
  
  expect(text).toBeInTheDocument();

};

export const form_test_artist_label = () => {
  
  render(<Form />);
  const text = screen.getByLabelText('Artist Name')

  expect(text).toBeInTheDocument();
  
};

export const form_test_input: () => Promise<void> = async () => {
  
  render(<Form />);
  const artistNameField = screen.getByLabelText("Artist Name");
  
  await userEvent.type(artistNameField, "Music Research Unit");
  
  expect(artistNameField).toHaveValue("Music Research Unit");

};

export const form_test_submit: () => Promise<void> = async () => {
  
  render(<Form />);
  const artistNameField = screen.getByLabelText("Artist Name");
  const button = screen.getByRole("button", { name: /submit/i });

  await userEvent.type(artistNameField, 'Music Research Unit')
  await userEvent.click(button);

  expect(handleSubmit).toHaveBeenCalledWith({ artistName: 'Music Research Unit'});
};