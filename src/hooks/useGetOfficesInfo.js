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
  const actualOfficesList = useSelector(
    (state) => state.officesList.officesItemList
  );
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
  };

  const deleteOfficesInfo = () => {
    dispatch(deleteOfficesList());
    dispatch(deleteBranchType());
  };

  useEffect(() => {
    if (isSuccess) {
      const lastData = Object.values(data)[Object.values(data).length - 1];
      if (lastData.status === "fulfilled") {
        console.log(lastData);
        const correctData = lastData.data.data
          .map(
            ({
              CityDescription,
              CategoryOfWarehouse,
              Description,
              DistrictCode,
              Schedule,
              PlaceMaxWeightAllowed,
            }) => ({
              cityName: CityDescription,
              type: CategoryOfWarehouse,
              officeNum: Description.match(/№\s?(\d+)/)[1],
              address: Description,
              schedule: Schedule,
              maxWeight: PlaceMaxWeightAllowed,
              districtCode: DistrictCode,
            })
          )
          .filter((item) => item.maxWeight === officeType);
        dispatch(getOfficesList(correctData));
        dispatch(changeBranchType(officeType));
      }
    }
  }, [data, isSuccess, dispatch, officeType]);

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
    actualOfficesList,
    deleteOfficesInfo,
  };
};

export default useGetOfficesInfo;
