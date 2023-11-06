import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import OrdersInfo from "../components/OrdersInfo";
import { Provider } from "react-redux";
import store from "../store/store";

test("UI testing", () => {
  render(
    <Provider store={store}>
      <OrdersInfo />
    </Provider>
  );

  expect(screen.getByText("Історія пошуку")).toBeInTheDocument();

  expect(screen.getByText("Очистити історію")).toBeInTheDocument();
});
