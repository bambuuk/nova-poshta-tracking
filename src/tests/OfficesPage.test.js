import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "./helpers/renderWithRedux";
import OfficesPage from "../pages/OfficesPage";

test("UI test of OfficesPage", () => {
  renderWithRedux(<OfficesPage />);

  expect(screen.getByTestId("offices-info")).toHaveClass("hidden");
  expect(screen.getByTestId("offices-search-panel")).toBeInTheDocument();
});
