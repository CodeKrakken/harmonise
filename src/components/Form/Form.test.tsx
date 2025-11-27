import { render, screen } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";

export const form_test_placeholder = async () => {
    render(<Form />);
    expect(screen.getByPlaceholderText('Dawn of the Squid')).toBeInTheDocument();
};

test("Displays placeholder text 'Dawn of the Squid'", form_test_placeholder);
