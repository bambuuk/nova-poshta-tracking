import useGetTTNInfo from "../hooks/useGetTTNInfo";

const OrdersSearchPanel = () => {
  const { orderNumber, setOrderNumber, onSubmit } = useGetTTNInfo();

  return (
    <div>
      <div className="mt-28 flex flex-col">
        <h2 className="text-white text-[21px] font-medium leading-8">
          Знайти посилку
        </h2>
        <div className="mt-[38px]">
          <form
            className="flex flex-col sm:flex-row gap-[40px]"
            onSubmit={onSubmit}
          >
            <div className="w-full relative">
              <input
                type="number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                required
                placeholder="Введіть ваш ТТН"
                className="w-full bg-transparent border-b-2 border-solid border-white outline-none text-white focus:border-[#11e962] pb-[5px] pl-[0px] pt-[25px] transition-all placeholder:transition-transform focus:placeholder:transition-transform focus:placeholder:translate-y-[-25px] duration-300 focus:placeholder:text-[#11e962] "
              />
            </div>
            <button className="bg-[#190E6F] hover:bg-[#454dc0] min-w-[150px] max-w-[200px] py-2 text-white font-base font-medium transition-all active:scale-[0.9]">
              Статус ТТН
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrdersSearchPanel;
