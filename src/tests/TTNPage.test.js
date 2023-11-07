import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TTNPage from "../pages/TTNPage";
import { Provider } from "react-redux";
import store from "../store/store";

test("UI test of TTNPage", () => {
  render(
    <Provider store={store}>
      <TTNPage />
    </Provider>
  );

  expect(screen.getByTestId("orders-info")).toHaveClass("hidden");
  expect(screen.getByTestId("orders-search-panel")).toBeInTheDocument();
});
