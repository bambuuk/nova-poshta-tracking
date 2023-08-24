import { useGetOfficesInfoMutation } from "../api/apiSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGetOfficesInfo = () => {
  const [getOfficesInfo, { isLoading, isError, isSuccess }] =
    useGetOfficesInfoMutation();
  const [city, setCity] = useState("");
  const [officeType, setOfficeType] = useState("");
  const data = useSelector((state) => state.api.mutations);

  const officesRequest = (cityName, branchType) => {
    getOfficesInfo(cityName, branchType).unwrap();
  };

  const onChangeOfficeType = (e) => {
    setOfficeType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    officesRequest(city, officeType);
  };

  useEffect(() => {
    if (isSuccess) {
      const lastData = Object.values(data)[Object.values(data).length - 1];
      if (
        lastData.status ===
        "fulfilled"
      ) {
        console.log(Object.values(data));
      }
    }
  }, [data, isSuccess]);

  return {
    officesRequest,
    isLoading,
    isError,
    isSuccess,
    setCity,
    city,
    onSubmit,
    onChangeOfficeType,
    officeType
  };
};

export default useGetOfficesInfo;
