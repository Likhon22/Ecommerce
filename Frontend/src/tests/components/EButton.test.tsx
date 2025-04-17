import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import EButton from "@/components/ui/EButton";

describe("EButton", () => {
  it("should render button with text ", () => {
    render(<EButton text="Click Me" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });
  it("should render button with children", () => {
    render(<EButton>Click Me</EButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });
  it("should have a custom class", () => {
    render(<EButton className="custom-class">Click Me</EButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
  it("should have a default type", () => {
    render(<EButton>Click Me</EButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });
  it("should have a custom type", () => {
    render(<EButton type="submit">Click Me</EButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
