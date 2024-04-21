// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import ContactForm from "./ContactForm";

test("Renderizando inputs y botón de enviar", () => {
  const { getByLabelText, getByRole } = render(<ContactForm />);

  expect(getByLabelText("Nombre")).to.exist;
  expect(getByLabelText("Correo electrónico")).to.exist;
  expect(getByLabelText("Mensaje")).to.exist;
  expect(getByRole("button", { name: "Enviar" })).to.exist;

  fireEvent.change(getByLabelText("Nombre"), {
    target: { value: "Juanje" },
  });
  fireEvent.change(getByLabelText("Correo electrónico"), {
    target: { value: "juanjetest.com" },
  });
  fireEvent.change(getByLabelText("Mensaje"), {
    target: { value: "Codigo Facilito" },
  });
});

// Prueba: ContactForm envía datos correctamente
test("Datos metidos correctamente", () => {
  const { getByLabelText } = render(<ContactForm />);

  fireEvent.change(getByLabelText("Nombre"), {
    target: { value: "Juanje" },
  });
  fireEvent.change(getByLabelText("Correo electrónico"), {
    target: { value: "juanjetest.com" },
  });
  fireEvent.change(getByLabelText("Mensaje"), {
    target: { value: "Codigo Facilito" },
  });
});
