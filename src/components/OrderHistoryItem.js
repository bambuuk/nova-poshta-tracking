import { useCallback } from "react";
import { CgCloseR } from "react-icons/cg";
import useGetTTNInfo from "../hooks/useGetTTNInfo";
import { delItemFromHistList } from "../store/ordersHistorySlice";
import { useDispatch } from "react-redux";

const OrdersHistoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const { ordersRequest } = useGetTTNInfo();

  const handleClick = useCallback(() => {
    ordersRequest(item);
  }, [ordersRequest, item]);

  const deleteItem = useCallback(
    (num) => {
      dispatch(delItemFromHistList(num));
    },
    [dispatch]
  );

  return (
    <div className="flex items-center">
      <span
        onClick={handleClick}
        className="text-white cursor-pointer hover:text-[#11e962] transition-colors"
      >
        {item}
      </span>
      <CgCloseR
        onClick={() => deleteItem(item)}
        size={20}
        color={"red"}
        className="cursor-pointer mx-2"
      />
    </div>
  );
};

export default OrdersHistoryItem;
