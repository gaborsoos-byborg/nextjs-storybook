import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterButton } from "@/features/counter-button";

describe("CounterButton", () => {
  it("should start counter at 0", () => {
    render(<CounterButton />);

    expect(screen.getByRole('button').innerHTML).toEqual("Counter: 0");
  });
});
