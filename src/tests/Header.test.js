import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";

test("Route navigating", async () => {
  const user = userEvent.setup();
  window.history.pushState({}, "Test page", "/");
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("offices-link")).toBeInTheDocument();
  expect(screen.getByTestId("ttn-link")).toBeInTheDocument();

  await user.click(screen.getByTestId("offices-link"));
  expect(window.location.pathname).toBe("/offices");

  await user.click(screen.getByTestId("ttn-link"));
  expect(window.location.pathname).toBe("/");
});
