import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders React CI/CD Project heading", () => {
render(<App />);
expect(
screen.getByText("React CI/CD Project")
).toBeInTheDocument();
});