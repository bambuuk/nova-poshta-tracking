import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorPage from "../pages/ErrorPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("ErrorPage testing", () => {
  test("UI availability test", () => {
    const router = createMemoryRouter(
      [{ path: "/some-link", element: <ErrorPage /> }],
      { initialEntries: ["/", "/some-link"], initialIndex: 1 }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Уупс!")).toBeInTheDocument();
    expect(screen.getByText("Вибачте, щось пішло не так")).toBeInTheDocument();
    expect(screen.getByText("Not Found Info")).toBeInTheDocument();
    expect(
      screen.getByText("Повернутись на головну сторінку")
    ).toBeInTheDocument();
  });

  test("NavLink working test", async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(
      [{ path: "/some-link", element: <ErrorPage /> }],
      { initialEntries: ["/", "/some-link"], initialIndex: 1 }
    );

    render(<RouterProvider router={router} />);

    const link = screen.getByRole("link", {
      name: "Повернутись на головну сторінку",
    });

    await user.click(link);
    expect(window.location.pathname).toBe("/");
  });
});
