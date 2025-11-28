import { render, screen } from "@testing-library/react";
import Title from "./Title";

export const title_test_title: () => Promise<void> = async () => {
    
    render(<Title />);
    const text = screen.getByText('Harmonise')
      
    expect(text).toBeInTheDocument();
    
};