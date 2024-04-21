// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import { test } from "vitest";
import Posts from "./Posts";

test("Renderiza correctamente el componente Posts", async (context) => {
  const { getByText } = render(<Posts />);

  context.expect(getByText("posts page"));
});
