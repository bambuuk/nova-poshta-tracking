import { useState } from "react"
import { useGetOrderInfoMutation } from "../api/apiSlice";

const useGetTTNInfo = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [getOrderInfo, {isLoading, isError, isSuccess}] = useGetOrderInfoMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    getOrderInfo(orderNumber).unwrap();
    setOrderNumber('');
  }

  return {
    orderNumber,
    setOrderNumber,
    onSubmit
  }
}

export default useGetTTNInfo;