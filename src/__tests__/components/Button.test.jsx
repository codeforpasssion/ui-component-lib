import { fireEvent, render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import Button from "../../components/Button";

describe("Render the button and trigger the onclick event", () => {
  const onClick = vi.fn();

  test("Render the button  ", async () => {
    render(<Button onClick={onClick}>GMM</Button>);
    const buttonEl = screen.getByRole("button", {
      name: /GMM/i,
    });
    expect(buttonEl).toBeInTheDocument();
  });
  test("trigger the onclick event", async () => {
    render(<Button onClick={onClick}>GMM</Button>);
    const buttonEl = screen.getByRole("button", {
      name: /GMM/i,
    });
    fireEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalled();
  });
});
