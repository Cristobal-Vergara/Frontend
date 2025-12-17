import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("Componente App", () => {
  it("debería renderizar sin errores", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
