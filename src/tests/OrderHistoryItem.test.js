import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import OrdersHistoryItem from "../components/OrderHistoryItem";
import { Provider } from "react-redux";
import store from "../store/store";

describe("OrderHistoryItem test", () => {
  test("Show info", async () => {
    render(
      <Provider store={store}>
        <OrdersHistoryItem item="20450745191462" />
      </Provider>
    );

    expect(screen.getByText("20450745191462")).toBeInTheDocument();
  });
});
