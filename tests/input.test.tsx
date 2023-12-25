import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../src/components/input";
import { theme } from "ccmtypes";

describe("Input", () => {
  it("should render an input", () => {
    const inputLabel: string = "inputLabel";

    render(
      <Input label={inputLabel} placeholder="placeholder" theme={theme} />
    );

    expect(screen.getByText(inputLabel)).toBeInTheDocument();
  });
});
