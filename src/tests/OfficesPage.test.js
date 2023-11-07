import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../store/store";
import OfficesPage from "../pages/OfficesPage";

test("UI test of OfficesPage", () => {
  render(
    <Provider store={store}>
      <OfficesPage />
    </Provider>
  );

  expect(screen.getByTestId("offices-info")).toHaveClass("hidden");
  expect(screen.getByTestId("offices-search-panel")).toBeInTheDocument();
});
