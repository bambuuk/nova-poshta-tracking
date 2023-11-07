import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OrdersSearchPanel from "../components/OrdersSearchPanel";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("OrdersSearchPanel displays correct content and handles form submission", () => {
  test("Showing header test", () => {
    renderWithRedux(<OrdersSearchPanel />);

    expect(screen.getByText("Знайти посилку")).toBeInTheDocument();
  });

  test("Input work test", () => {
    renderWithRedux(<OrdersSearchPanel />);

    const input = screen.getByPlaceholderText("Введіть ваш ТТН");
    fireEvent.change(input, { target: { value: "123456" } });
    expect(input.value).toBe("123456");
  });
});
