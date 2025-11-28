import "@testing-library/jest-dom";
import { title_test_title } from "./components/Title/Title.testFunctions";
import { 
    form_test_placeholder, 
    form_test_artist_label, 
    form_test_input, 
    form_test_submit 
} from "./components/Form/Form.testFunctions";

test("Displays the title 'Harmonise'", title_test_title);
test("Displays field with placeholder text 'Dawn of the Squid'", form_test_placeholder);
test("Displays 'Artist Name' field label", form_test_artist_label);
test("Accepts user input", form_test_input);
test("Calls handleSubmit with input data", form_test_submit);