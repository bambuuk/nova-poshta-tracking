import { CgCloseR } from "react-icons/cg";
import useGetTTNInfo from "../hooks/useGetTTNInfo";

const OrdersInfo = () => {
  const { currentOrderInfo } = useGetTTNInfo();
  
  const content = currentOrderInfo.length > 0
    ? (
      <div className="flex flex-col sm:max-w-[500px]">
        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Номер ТТН:</span>
          <br />
          {currentOrderInfo[0].orderNumber}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Статус доставки:</span>
          <br />
          {currentOrderInfo[0].status}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Дата отримання:</span>
          <br />
          {currentOrderInfo[0].date}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Відправлення:</span>
          <br />
          {currentOrderInfo[0].sender}
        </p>

        <p className="text-white text-base mb-3">
          <span className="text-[#11e962] mb-[5px]">Отриманання:</span>
          <br />
          {currentOrderInfo[0].recipient}
        </p>
        <button className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto max-w-[250px] hover:bg-[#454dc0] active:scale-[0.9] transition-all">
          Очистити дані та історію
        </button>
      </div>
    )
    : "";

  return (
    <div className={currentOrderInfo.length === 1 ? "mt-[50px]" : 'hidden'}>
      <div className="w-full p-[20px] min-h-[250px] rounded-2xl flex flex-col sm:flex-row bg-[#373737]">
        <div className="flex-auto mr-2">
          {content}
        </div>
        <div className="w-[250px] h-[250px] bg-[#475569] self-start sm:self-end rounded-2xl py-3 px-2 mt-4 sm:mt-0 flex flex-col items-center">
          <h3 className="text-white text-xl">Історія пошуку</h3>
          <div className="flex flex-col items-center my-[9px] overflow-y-auto flex-auto">
            <div className="flex items-center">
              <span className="text-white cursor-pointer hover:text-[#11e962] transition-colors">
                20450745191462
              </span>
              <CgCloseR
                size={20}
                color={"red"}
                className="cursor-pointer mx-2"
              />
            </div>
          </div>
          <button className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto hover:bg-[#454dc0] active:scale-[0.9] transition-all">
            Очистити історію
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersInfo;
