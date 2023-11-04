import { RiCloseFill } from "react-icons/ri";
import { nanoid } from "nanoid";

const ScheduleModalWindow = ({
  activeScheduleModWind,
  onCloseModWindow,
  schedule,
  address,
}) => {
  const scheduleInUkr = Object.entries(schedule).map((item) => {
    switch (item[0]) {
      case "Monday":
        return ["Понеділок", item[1]];
      case "Tuesday":
        return ["Вівторок", item[1]];
      case "Wednesday":
        return ["Середа", item[1]];
      case "Thursday":
        return ["Четвер", item[1]];
      case "Friday":
        return ["П'ятниця", item[1]];
      case "Saturday":
        return ["Субота", item[1]];
      case "Sunday":
        return ["Неділя", item[1]];
      default:
        return [];
    }
  });

  const scheduleContent = scheduleInUkr.map((item) => (
    <div key={nanoid()} className="flex flex-row justify-between gap-4">
      <div>{item[0]}</div>
      <div className="text-green-500" data-testid={`${item[0]} - time`}>
        {item[1]}
      </div>
    </div>
  ));

  return (
    <div
      className={
        activeScheduleModWind
          ? "fixed w-full h-full top-0 left-0 bg-black flex justify-center items-center opacity-100 visible transition-all"
          : "fixed w-full h-full top-0 left-0 bg-black flex justify-center items-center opacity-0 invisible transition-all"
      }
    >
      <div className="relative text-white p-[10px] sm:p-5 mx-[10px] border-2 border-white rounded-lg max-w-[500px]">
        <RiCloseFill
          onClick={onCloseModWindow}
          size={25}
          color={"white"}
          className="cursor-pointer absolute right-[5px] top-[5px] sm:right-[10px] sm:top-[10px]"
        />
        <div className="flex flex-col items-center text-center text-base font-medium mt-5">
          <p className="">{address}</p>
          <div className="mt-3">Графік роботи</div>
          <div className="flex flex-col mt-3">{scheduleContent}</div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModalWindow;
