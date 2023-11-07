import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import OrdersHistoryItem from "../components/OrderHistoryItem";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("OrderHistoryItem test", () => {
  test("Show info", async () => {
    renderWithRedux(<OrdersHistoryItem item="20450745191462" />);

    expect(screen.getByText("20450745191462")).toBeInTheDocument();
  });
});
