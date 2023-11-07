import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TTNPage from "../pages/TTNPage";
import { renderWithRedux } from "./helpers/renderWithRedux";

test("UI test of TTNPage", () => {
  renderWithRedux(<TTNPage />);

  expect(screen.getByTestId("orders-info")).toHaveClass("hidden");
  expect(screen.getByTestId("orders-search-panel")).toBeInTheDocument();
});
