import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ScheduleModalWindow from "../components/ScheduleModalWindow";

test("ScheduleModalWindow displays correct content", () => {
  const schedule = {
    Monday: "08:00-20:00",
    Tuesday: "08:00-20:00",
    Wednesday: "08:00-20:00",
    Thursday: "08:00-20:00",
    Friday: "08:00-20:00",
    Saturday: "09:00-19:00",
    Sunday: "09:00-19:00",
  };
  const address = "Відділення №1: вул. Олега Паршутіна (ран. Аерофлотська), 28";
  const onCloseModWindow = jest.fn();

  render(
    <ScheduleModalWindow
      activeScheduleModWind={true}
      onCloseModWindow={onCloseModWindow}
      schedule={schedule}
      address={address}
    />
  );

  /* Address tesing */
  expect(screen.getByText(address)).toBeInTheDocument();
  expect(screen.getByText("Графік роботи")).toBeInTheDocument();

  /* Schedule testing */
  expect(screen.getByText("Понеділок")).toBeInTheDocument();
  expect(screen.getByTestId("Понеділок - time")).toBeInTheDocument();

  expect(screen.getByText("Вівторок")).toBeInTheDocument();
  expect(screen.getByTestId("Вівторок - time")).toBeInTheDocument();

  expect(screen.getByText("Середа")).toBeInTheDocument();
  expect(screen.getByTestId("Середа - time")).toBeInTheDocument();

  expect(screen.getByText("Четвер")).toBeInTheDocument();
  expect(screen.getByTestId("Четвер - time")).toBeInTheDocument();

  expect(screen.getByText("П'ятниця")).toBeInTheDocument();
  expect(screen.getByTestId("П'ятниця - time")).toBeInTheDocument();

  expect(screen.getByText("Субота")).toBeInTheDocument();
  expect(screen.getByTestId("Субота - time")).toBeInTheDocument();

  expect(screen.getByText("Неділя")).toBeInTheDocument();
  expect(screen.getByTestId("Неділя - time")).toBeInTheDocument();
});
