import { render, screen } from "@testing-library/react";

describe("Sample test suite", () => {
  it("should return true", () => {
    const isValidate = true;
    expect(isValidate).toBeTruthy();
  });

  it("should be able to render message", () => {
    render(<p>Hello world</p>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("should be able to mock the API automatically", async () => {
    const response = await fetch("https://api.test.com/todo");
    const data = await response.json();
    expect(data.tasks).toStrictEqual(["Clean the house", "Walk the dog"]);
  });
});
