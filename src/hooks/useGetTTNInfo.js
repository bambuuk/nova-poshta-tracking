import { useEffect } from "react";
import { useGetOrderInfoMutation } from "../api/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentOrderInfo,
  addNumToHistoryList,
} from "../store/ordersHistorySlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const useGetTTNInfo = () => {
  const [getOrderInfo, { isLoading, isError, isSuccess }] =
    useGetOrderInfoMutation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.mutations);
  const currentOrderInfo = useSelector(
    (state) => state.ordersHistorySlice.currentOrderInfo
  );
  const ordersHistory = useSelector(
    (state) => state.ordersHistorySlice.ordersHistory
  );

  const ordersRequest = (ordNum) => {
    getOrderInfo(ordNum).unwrap();
  };

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
      if (currentOrderInfo.length === 0) {
        getOrderInfo(orderNumber).unwrap();
        resetForm();
      } else if (+currentOrderInfo[0].orderNumber !== orderNumber) {
        getOrderInfo(orderNumber).unwrap();
        resetForm();
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      if (
        Object.values(data)[Object.values(data).length - 1].status ===
        "fulfilled"
      ) {
        console.log(
          Object.values(data)[Object.values(data).length - 1].status,
          Object.values(data)[Object.values(data).length - 1].data,
          isSuccess
        );
        // console.log(Object.values(data))
        const {
          Number,
          Status,
          RecipientDateTime,
          ScheduledDeliveryDate,
          WarehouseSenderAddress,
          WarehouseRecipientAddress,
        } = Object.values(data)[Object.values(data).length - 1].data.data[0];

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
        if (!ordersHistory.includes(Number.toString())) {
          dispatch(addNumToHistoryList(Number));
          console.log(Number);
        }
      }
    }
  }, [isSuccess, data, dispatch, ordersHistory]);

  return {
    getOrderInfo,
    isLoading,
    isError,
    currentOrderInfo,
    orderNumberFormik,
    ordersHistory,
    ordersRequest,
  };
};

export default useGetTTNInfo;
