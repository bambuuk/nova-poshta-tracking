import useGetOfficesInfo from "../hooks/useGetOfficesInfo";
import useControlModalWindows from "../hooks/useControlModalWindows";
import { nanoid } from "nanoid";
import ScheduleModalWindow from "./ScheduleModalWindow";

const OfficesInfo = () => {
  const { actualOfficesList, deleteOfficesInfo } = useGetOfficesInfo();
  const { activeScheduleModWind, onActiveModWindow, onCloseModWindow } =
    useControlModalWindows();

  const officesContent =
    actualOfficesList.length > 0
      ? actualOfficesList.map(({ cityName, officeNum }) => {
          return (
            <div
              key={nanoid()}
              className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 text-center sm:text-start w-full items-center"
            >
              <div className="text-white text-base order-3 sm:order-none">
                <div onClick={onActiveModWindow} className="flex px-2 bg-green-700 max-w-[150px] justify-center rounded-sm text-black font-semibold cursor-pointer hover:bg-green-500 active:scale-[0.9] transition-all select-none mx-auto sm:mx-0">
                  Часи роботи
                </div>
              </div>
              <div className="text-white text-base order-1 sm:order-none">
                {cityName}
              </div>
              <div className="text-white text-base order-2 sm:order-none">
                Відділення №{officeNum}
              </div>
            </div>
          );
        })
      : "";

  return (
    <div className={actualOfficesList.length > 0 ? "mt-[50px]" : "hidden"}>
      <div className="relative w-full p-[20px] rounded-2xl flex flex-col bg-[#373737] mx-auto h-[340px] overflow-hidden">
        <div className="hidden sm:grid grid-cols-3 text-start max-w-[640px] w-full mx-auto">
          <div className="text-white font-semibold text-xl min-w-[130px]">
            Додатково
          </div>
          <div className="text-white font-semibold text-xl min-w-[130px]">
            Місто
          </div>
          <div className="text-white font-semibold text-xl min-w-[130px]">
            Відділення
          </div>
        </div>

        <div className="flex-auto container1 max-w-[640px] w-full mx-auto overflow-hidden flex flex-col items-center">
          <div className="container2 mt-5 flex flex-col gap-4 w-full overflow-y-auto">
            {officesContent}
          </div>
        </div>

        <div className="mt-[20px] self-end">
          <button
            onClick={deleteOfficesInfo}
            className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto max-h-[35px] hover:bg-[#454dc0] active:scale-[0.9] transition-all"
          >
            Очистити
          </button>
        </div>
      </div>
      <ScheduleModalWindow
        onCloseModWindow={onCloseModWindow}
        activeScheduleModWind={activeScheduleModWind}
      />
    </div>
  );
};

export default OfficesInfo;
