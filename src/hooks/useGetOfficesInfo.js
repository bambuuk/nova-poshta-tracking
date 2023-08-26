import { useGetOfficesInfoMutation } from "../api/apiSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getOfficesList,
  deleteOfficesList,
  changeBranchType,
  deleteBranchType,
} from "../store/officesSlice";

const useGetOfficesInfo = () => {
  const [getOfficesInfo, { isLoading, isError, isSuccess }] =
    useGetOfficesInfoMutation();
  const [officeType, setOfficeType] = useState("");
  const data = useSelector((state) => state.api.mutations);
  const actualOfficesList = useSelector(
    (state) => state.officesList.officesItemList
  );
  const dispatch = useDispatch();

  const deleteOfficesInfo = () => {
    dispatch(deleteOfficesList());
    dispatch(deleteBranchType());
  };

  const officesFormik = useFormik({
    initialValues: {
      cityName: "",
      branchType: "",
    },
    validationSchema: Yup.object({
      cityName: Yup.string()
        .matches(
          /^[\u0400-\u04FF\s]+$/u,
          "Місто має включати лиш українські літери"
        )
        .required("Обов'язкове поле"),
      branchType: Yup.string().required("Обов'язкове поле"),
    }),
    onSubmit: ({ cityName, branchType }, { resetForm }) => {
      getOfficesInfo(cityName.trim()).unwrap();
      setOfficeType(branchType.trim());
      resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const lastData = Object.values(data)[Object.values(data).length - 1];
      if (lastData.status === "fulfilled") {
        const correctData = lastData.data.data
          .map(
            ({
              CityDescription,
              CategoryOfWarehouse,
              Description,
              DistrictCode,
              Schedule,
              PlaceMaxWeightAllowed,
              TotalMaxWeightAllowed,
            }) => ({
              cityName: CityDescription,
              type: CategoryOfWarehouse,
              officeNum: Description.match(/№\s?(\d+)/)[1],
              address: Description,
              schedule: Schedule,
              maxWeight:
                +PlaceMaxWeightAllowed > +TotalMaxWeightAllowed
                  ? PlaceMaxWeightAllowed
                  : TotalMaxWeightAllowed,
              districtCode: DistrictCode,
            })
          )
          .filter((item) =>
            +item.maxWeight === 10
              ? +item.maxWeight === 10
              : item.maxWeight === officeType
          );
        dispatch(getOfficesList(correctData));
        dispatch(changeBranchType(officeType));
      }
    }
  }, [data, isSuccess, dispatch, officeType]);

  return {
    isLoading,
    isError,
    isSuccess,
    actualOfficesList,
    deleteOfficesInfo,
    officesFormik,
  };
};

export default useGetOfficesInfo;
