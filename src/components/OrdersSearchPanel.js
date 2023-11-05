import useGetTTNInfo from "../hooks/useGetTTNInfo";
import SyncLoader from "react-spinners/SyncLoader";

// TTN (order) examples
// 20450745191462
// 20450761920712

const OrdersSearchPanel = () => {
  const { isLoading, orderNumberFormik } = useGetTTNInfo();

  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="300"
        className="mt-28 flex flex-col"
      >
        <h2 className="text-white text-[21px] font-medium leading-8">
          Знайти посилку
        </h2>
        <div className="mt-[38px]">
          <form
            className="flex flex-col sm:flex-row gap-[40px]"
            onSubmit={orderNumberFormik.handleSubmit}
            data-testid="form"
          >
            <div className="w-full relative">
              <input
                type="number"
                name="orderNumber"
                value={orderNumberFormik.values.orderNumber}
                onChange={orderNumberFormik.handleChange}
                placeholder="Введіть ваш ТТН"
                autoComplete="orderNumber"
                className="w-full bg-transparent border-b-2 border-solid border-white outline-none text-white focus:border-[#11e962] pb-[5px] pl-[0px] pt-[25px] transition-all placeholder:transition-transform focus:placeholder:transition-transform focus:placeholder:translate-y-[-25px] duration-300 focus:placeholder:text-[#11e962] "
              />
              {orderNumberFormik.errors.orderNumber ? (
                <div
                  className="text-red-500 absolute"
                  data-testid="ttn-number-error"
                >
                  {orderNumberFormik.errors.orderNumber}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-[#190E6F] hover:bg-[#454dc0] min-w-[150px] max-w-[200px] py-2 text-white font-base font-medium transition-all active:scale-[0.9]"
            >
              {isLoading ? <SyncLoader color="white" /> : "Статус ТТН"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrdersSearchPanel;
