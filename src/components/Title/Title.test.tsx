import {render, screen} from "@testing-library/react";
import Title from "./Title";
import "@testing-library/jest-dom";

export const title_test_title: () => Promise<void> = async () => {
    render(<Title />);
    expect(screen.getByText('Harmonise')).toBeInTheDocument();
};

test("Displays the title 'Harmonise'", title_test_title);
