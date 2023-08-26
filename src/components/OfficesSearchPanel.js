import useGetOfficesInfo from "../hooks/useGetOfficesInfo";
import SyncLoader from "react-spinners/SyncLoader";

// Кропивницький

const OfficesSearchPanel = () => {
  const { setCity, city, onSubmit, onChangeOfficeType, officeType, isLoading } =
    useGetOfficesInfo();

  return (
    <div>
      <div className="mt-[60px] flex flex-col">
        <h2 className="text-white text-[21px] font-medium leading-8">
          Відділення
        </h2>
        <div className="mt-[38px]">
          <form
            className="flex flex-col sm:flex-row gap-[40px]"
            onSubmit={onSubmit}
          >
            <div className="w-full relative">
              <input
                type="text"
                required
                placeholder="Місто"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent border-b-2 border-solid border-white outline-none text-white focus:border-[#11e962] pb-[5px] pl-[0px] pt-[25px] transition-all placeholder:transition-transform focus:placeholder:transition-transform focus:placeholder:translate-y-[-25px] duration-300 focus:placeholder:text-[#11e962] "
              />
            </div>
            <select
              name="OfficeType"
              required
              className="text-white bg-transparent font-base font-medium outline-none cursor-pointer"
              value={officeType}
              onChange={onChangeOfficeType}
            >
              <option className="bg-[#202124]">Виберіть відділення</option>
              <option className="bg-[#202124]" value="30">
                Поштове відділення
              </option>
              <option className="bg-[#202124]" value="1100">
                Вантажне відділення
              </option>
            </select>
            <button className="bg-[#020c2f] hover:bg-[#454dc0] min-w-[150px] max-w-[200px] py-2 text-white font-base font-medium transition-all active:scale-[0.9]">
              {isLoading ? <SyncLoader color="white" /> : "Пошук"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfficesSearchPanel;
