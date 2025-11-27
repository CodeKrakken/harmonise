import { form_test_placeholder } from "./components/Form/Form.test";
import { title_test_title } from "./components/Title/Title.test";
import "@testing-library/jest-dom";

test("Displays the title 'Harmonise'", title_test_title);

test("Displays placeholder text 'Dawn of the Squid'", form_test_placeholder);
