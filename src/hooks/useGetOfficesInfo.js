import { useGetOfficesInfoMutation } from "../api/apiSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOfficesList,
  deleteOfficesList,
  changeBranchType,
  deleteBranchType,
} from "../store/officesSlice";

const useGetOfficesInfo = () => {
  const [getOfficesInfo, { isLoading, isError, isSuccess }] =
    useGetOfficesInfoMutation();
  const [city, setCity] = useState("");
  const [officeType, setOfficeType] = useState("");
  const data = useSelector((state) => state.api.mutations);
  const dispatch = useDispatch();

  const officesRequest = (cityName, branchType) => {
    getOfficesInfo(cityName, branchType).unwrap();
  };

  const onChangeOfficeType = (e) => {
    setOfficeType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    officesRequest(city);
    console.log(city, officeType);
  };

  useEffect(() => {
    if (isSuccess) {
      const lastData = Object.values(data)[Object.values(data).length - 1];
      if (lastData.status === "fulfilled") {
        dispatch(getOfficesList(lastData.data.data));
        dispatch(changeBranchType(officeType));
        console.log(lastData.data.data);
      }
    }
  }, [data, isSuccess, dispatch]);

  return {
    officesRequest,
    isLoading,
    isError,
    isSuccess,
    setCity,
    city,
    onSubmit,
    onChangeOfficeType,
    officeType,
  };
};

export default useGetOfficesInfo;
