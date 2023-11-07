import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../store/store";
import OfficesInfo from "../components/OfficesInfo";

describe("OfficesInfo test", () => {
  test("UI test", () => {
    render(
      <Provider store={store}>
        <OfficesInfo />
      </Provider>
    );

    expect(screen.getByText("Додатково")).toBeInTheDocument();
    expect(screen.getByText("Місто")).toBeInTheDocument();
    expect(screen.getByText("Відділення")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Очистити" })
    ).toBeInTheDocument();
  });
});
