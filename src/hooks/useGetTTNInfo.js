import { useState, useEffect } from "react";
import { useGetOrderInfoMutation } from "../api/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentOrderInfo,
  addNumToHistoryList,
} from "../store/ordersHistorySlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const useGetTTNInfo = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [getOrderInfo, { isLoading, isError, isSuccess }] =
    useGetOrderInfoMutation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.mutations);
  const currentOrderInfo = useSelector(
    (state) => state.ordersHistorySlice.currentOrderInfo
  );

  const orderNumberRegExp = /^(\d{14})$/;

  const orderNumberFormik = useFormik({
    initialValues: {
      orderNumber: "",
    },
    validationSchema: Yup.object({
      orderNumber: Yup.string()
        .matches(orderNumberRegExp, "Має складатись з 14 цифр")
        .required("Обов'язкове поле"),
    }),
    onSubmit: ({ orderNumber }, { resetForm }) => {
      if (+currentOrderInfo[0].orderNumber !== orderNumber) {
        getOrderInfo(orderNumber).unwrap();
      } 
      resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess && Object.values(data)[0].data.success) {

      const {
        Number,
        Status,
        RecipientDateTime,
        ScheduledDeliveryDate,
        WarehouseSenderAddress,
        WarehouseRecipientAddress,
      } = Object.values(data)[0].data.data[0];

      const orderInfo = [
        {
          orderNumber: Number,
          status: Status,
          date:
            RecipientDateTime === ""
              ? ScheduledDeliveryDate
              : RecipientDateTime,
          sender: WarehouseSenderAddress,
          recipient: WarehouseRecipientAddress,
        },
      ];
      dispatch(getCurrentOrderInfo(orderInfo));
      dispatch(addNumToHistoryList(Number));
      setOrderNumber("");
    }
  }, [isSuccess, data, dispatch]);

  return {
    setOrderNumber,
    getOrderInfo,
    isLoading,
    isError,
    currentOrderInfo,
    orderNumberFormik,
  };
};

export default useGetTTNInfo;
