const OfficesInfo = () => {
  return (
    <div className="mt-[50px]">
      <div className="relative w-full p-[20px] rounded-2xl flex flex-col sm:flex-row bg-[#373737] mx-auto h-[340px] overflow-hidden">
        <div className="max-w-[640px] mx-auto overflow-y-auto">
          <div className="flex flex-col items-center w-full pb-10">
            <div className="grid grid-cols-3 text-start w-full">
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

            <div className="mt-5 flex flex-col gap-1">
              <div className="grid grid-cols-3 text-start w-full items-center">
                <div className="text-white text-base">
                  <div className="flex px-2 bg-green-700 max-w-[150px] justify-center rounded-sm text-black font-semibold cursor-pointer hover:bg-green-500 active:scale-[0.9] transition-all select-none">
                    Часи роботи
                  </div>
                </div>
                <div className="text-white text-base">Кропивницький</div>
                <div className="text-white text-base">Відділення № 4</div>
              </div>

              <div className="grid grid-cols-3 text-start w-full items-center">
                <div className="flex px-2 bg-green-700 max-w-[150px] justify-center rounded-sm text-black font-semibold cursor-pointer hover:bg-green-500 active:scale-[0.9] transition-all select-none">
                  Часи роботи
                </div>
                <div className="text-white text-base">
                  Кропивницький іііі іііі
                </div>
                <div className="text-white text-base">
                  Відділення № 10082іііііі іііі
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="absolute bottom-[20px] right-[20px] bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto h-auto hover:bg-[#454dc0] active:scale-[0.9] transition-all">
          Очистити
        </button>
      </div>
    </div>
  );
};

export default OfficesInfo;
