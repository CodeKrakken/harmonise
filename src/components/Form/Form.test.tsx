import "@testing-library/jest-dom";
import { 
  form_test_placeholder, 
  form_test_artist_label, 
  form_test_input, 
  form_test_submit 
} from "./Form.testFunctions";

test("Displays field with placeholder text 'Dawn of the Squid'", form_test_placeholder);
test("Displays 'Artist Name' field label", form_test_artist_label);
test("Accepts user input", form_test_input);
test("Calls handleSubmit with input data", form_test_submit);
