import { RiCloseFill } from "react-icons/ri";

const ScheduleModalWindow = ({ activeScheduleModWind, onCloseModWindow }) => {
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
          <p className="">
            Відділення №3 (до 30 кг на одне місце): вул. Калачівська, 13 (Стара
            Дарниця)
          </p>
          <div className="mt-3">Графік роботи</div>
          <div className="flex flex-col mt-3">
            <div className="flex flex-row justify-between gap-4">
              <div>Понеділок</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Вівторок</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Середа</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Четвер</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>П'ятниця</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Субота</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Неділя</div>
              <div className="text-green-500">08:00-21:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModalWindow;
