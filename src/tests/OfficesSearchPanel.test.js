import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import OfficesSearchPanel from "../components/OfficesSearchPanel";
import { renderWithRedux } from "./helpers/renderWithRedux";

describe("OfficesSearchPanel test", () => {
  test("Check UI availability", () => {
    renderWithRedux(<OfficesSearchPanel />);

    expect(screen.getByText("Відділення")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Місто")).toBeInTheDocument();
    expect(screen.getByTestId("branch-type-selector")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Пошук" })).toBeInTheDocument();
  });

  test("Input working test", () => {
    renderWithRedux(<OfficesSearchPanel />);

    const cityInput = screen.getByPlaceholderText("Місто");
    fireEvent.change(cityInput, { target: { value: "Київ" } });
    expect(cityInput).toHaveValue("Київ");
  });

  test("Select working test", () => {
    renderWithRedux(<OfficesSearchPanel />);

    const selectElement = screen.getByTestId("branch-type-selector");
    fireEvent.change(selectElement, { target: { value: "30" } });
    expect(screen.getByText("Поштове відділення")).toBeInTheDocument();
    fireEvent.change(selectElement, { target: { value: "1100" } });
    expect(screen.getByText("Вантажне відділення")).toBeInTheDocument();
  });
});
