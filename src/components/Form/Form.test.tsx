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
<<<<<<< HEAD

test("Accepts user input", async () => {
  render(<Form />);

  const artistNameField = screen.getByLabelText("Artist Name");

  await userEvent.type(artistNameField, "Music Research Unit");

  expect(artistNameField).toHaveValue("Music Research Unit");
});

// test("Submits user input", async () => {

//   render(<Form />);
//   const artistNameField = screen.getByLabelText("Artist Name");
//   const button = screen.getByRole("button", { name: /submit/i });

//   await userEvent.type(artistNameField, "Music Research Unit");
//   await userEvent.click(button);

//   expect(handleSubmit).toHaveBeenCalledWith({
//     artistName: "Music Research Unit"
//   });
// });
=======
>>>>>>> 0a6a86fda6e67db07b437b1a1cb2fd83de07d599
