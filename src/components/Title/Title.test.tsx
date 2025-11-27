import { render, screen } from "@testing-library/react";
import Title from "./Title";
import "@testing-library/jest-dom";

export const title_test_title: () => Promise<void> = async () => {
    render(<Title />);
    expect(screen.getByText('Harmonise')).toBeInTheDocument();
};

export const title_test_title_name = "Displays the title 'Harmonise'";

// eslint-disable-next-line jest/valid-title
test(title_test_title_name, title_test_title);
