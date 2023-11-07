import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import OrdersInfo from "../components/OrdersInfo";
import { renderWithRedux } from "./helpers/renderWithRedux";

test("OrdersInfo UI testing", () => {
  renderWithRedux(<OrdersInfo />);

  expect(screen.getByText("Історія пошуку")).toBeInTheDocument();
  expect(screen.getByText("Очистити історію")).toBeInTheDocument();
});
