import { useState, useEffect } from "react";
import { useGetOrderInfoMutation } from "../api/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentOrderInfo } from "../store/ordersHistorySlice";

const useGetTTNInfo = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [getOrderInfo, { isLoading, isError, isSuccess }] =
    useGetOrderInfoMutation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.mutations);

  const onSubmit = (e) => {
    e.preventDefault();
    getOrderInfo(orderNumber).unwrap();
  };

  useEffect(() => {
    if (isSuccess) {
      const {
        Number,
        Status,
        RecipientDateTime,
        WarehouseSenderAddress,
        WarehouseRecipientAddress,
      } = Object.values(data)[0].data.data[0];
      
      const orderInfo = {
        orderNumber: Number,
        status: Status,
        date: RecipientDateTime,
        sender: WarehouseSenderAddress,
        recipient: WarehouseRecipientAddress,
      };
      dispatch(getCurrentOrderInfo(orderInfo));
      setOrderNumber("");
    }
  }, [isSuccess, data, dispatch]);

  return {
    orderNumber,
    setOrderNumber,
    onSubmit,
    isLoading,
    isError,
  };
};

export default useGetTTNInfo;
