import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OrdersSearchPanel from "../components/OrdersSearchPanel";
import { Provider } from "react-redux";
import store from "../store/store";

// jest.mock("../hooks/useGetTTNInfo.js", () => {
//   return () => {
//     const fakeOrderNumberFormik = {
//       values: {
//         orderNumber: "",
//       },
//       handleChange: jest.fn((e) => {
//         fakeOrderNumberFormik.values.orderNumber = e.target.value; // Оновлюємо значення у мок-об'єкті
//       }),
//       handleSubmit: jest.fn(),
//       errors: {
//         orderNumber: "",
//       },
//     };

//     return {
//       isLoading: false,
//       orderNumberFormik: fakeOrderNumberFormik,
//     };
//   };
// });

describe("OrdersSearchPanel displays correct content and handles form submission", () => {
  test("Showing header test", () => {
    render(
      <Provider store={store}>
        <OrdersSearchPanel />
      </Provider>
    );

    expect(screen.getByText("Знайти посилку")).toBeInTheDocument();
  });

  test("Input work test", () => {
    render(
      <Provider store={store}>
        <OrdersSearchPanel />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Введіть ваш ТТН");
    fireEvent.change(input, { target: { value: "123456" } });
    expect(input.value).toBe("123456");
  });
});
