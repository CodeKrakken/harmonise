import "@testing-library/jest-dom";
import { form_test_placeholder } from "./components/Form/Form.testFunctions";
import { title_test_title } from "./components/Title/Title.testFunctions";

test("Displays the title 'Harmonise'", title_test_title);

test("Displays placeholder text 'Dawn of the Squid'", form_test_placeholder);
