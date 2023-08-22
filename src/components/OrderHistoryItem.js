import { useCallback } from "react";
import { CgCloseR } from "react-icons/cg";
import useGetTTNInfo from "../hooks/useGetTTNInfo";

const OrdersHistoryItem = ({ item }) => {
  const { ordersRequest } =
    useGetTTNInfo();

  const handleClick = useCallback(() => {
    ordersRequest(item);
  }, [ordersRequest, item]);

  return (
    <div className="flex items-center">
      <span
        onClick={handleClick}
        className="text-white cursor-pointer hover:text-[#11e962] transition-colors"
      >
        {item}
      </span>
      <CgCloseR size={20} color={"red"} className="cursor-pointer mx-2" />
    </div>
  );
};

export default OrdersHistoryItem;