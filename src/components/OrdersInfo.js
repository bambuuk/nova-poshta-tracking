import { nanoid } from "nanoid";
import useGetTTNInfo from "../hooks/useGetTTNInfo";
import MoonLoader from "react-spinners/MoonLoader";
import OrdersHistoryItem from "./OrderHistoryItem";

const OrdersInfo = () => {
  const {
    currentOrderInfo,
    ordersHistory,
    isLoading,
    onDeleteHistoryList,
    onDelOrderInfoAndOrdersHistory,
  } = useGetTTNInfo();

  const content =
    currentOrderInfo.length > 0 ? (
      <div className="flex flex-col sm:max-w-[500px]">
        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Номер ТТН:</span>
          <br />
          {currentOrderInfo[0].orderNumber !== ""
            ? currentOrderInfo[0].orderNumber
            : "Інформація відсутня"}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Статус доставки:</span>
          <br />
          {currentOrderInfo[0].status !== ""
            ? currentOrderInfo[0].status
            : "Інформація відсутня"}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Орієнтовна дата:</span>
          <br />
          {currentOrderInfo[0].date !== ""
            ? currentOrderInfo[0].date
            : "Інформація відсутня"}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Відправлення:</span>
          <br />
          {currentOrderInfo[0].sender !== ""
            ? currentOrderInfo[0].sender
            : "Інформація відсутня"}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Отриманання:</span>
          <br />
          {currentOrderInfo[0].recipient !== ""
            ? currentOrderInfo[0].recipient
            : "Інформація відсутня"}
        </p>
        <button
          onClick={onDelOrderInfoAndOrdersHistory}
          className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto max-w-[250px] hover:bg-[#454dc0] active:scale-[0.9] transition-all"
        >
          Очистити дані та історію
        </button>
      </div>
    ) : (
      ""
    );

  const ordersHistoryContent = ordersHistory.map((item) => (
    <OrdersHistoryItem key={nanoid()} item={item} />
  ));

  return (
    <div className={currentOrderInfo.length === 1 ? "mt-[50px]" : "hidden"}>
      <div className="w-full p-[20px] min-h-[250px] rounded-2xl flex flex-col sm:flex-row bg-[#373737]">
        <div className="flex-auto mr-2">{content}</div>
        <div className="w-[250px] h-[250px] bg-[#475569] self-start sm:self-end rounded-2xl py-3 px-4 mt-4 sm:mt-0 flex flex-col items-start">
          <h3 className="text-white text-xl flex">
            Історія пошуку{" "}
            {isLoading ? (
              <MoonLoader color="#11e962" size={22} className="ml-3" />
            ) : (
              ""
            )}
          </h3>
          <div className="flex flex-col items-start my-[9px] overflow-y-auto flex-auto">
            {ordersHistoryContent}
          </div>
          <button
            onClick={onDeleteHistoryList}
            className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto hover:bg-[#454dc0] active:scale-[0.9] transition-all"
          >
            Очистити історію
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersInfo;
