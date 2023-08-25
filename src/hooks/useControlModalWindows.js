import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useControlModalWindows = () => {
  const [activeScheduleModWind, setActiveScheduleModWind] = useState(false);
  const actualOfficesList = useSelector(
    (state) => state.officesList.officesItemList
  );
  const [schedule, setSchedule] = useState("");
  const [address, setAddress] = useState("");

  const onActiveModWindow = useCallback(
    (number) => {
      let filteredSchedule = actualOfficesList.filter(
        (item) => item.officeNum === number
      );
      setSchedule(filteredSchedule[0].schedule);
      setActiveScheduleModWind(true);
      setAddress(filteredSchedule[0].address);
    },
    [actualOfficesList]
  );

  const onCloseModWindow = () => {
    setActiveScheduleModWind(false);
    setSchedule("");
    setAddress("");
  };

  return {
    activeScheduleModWind,
    onActiveModWindow,
    onCloseModWindow,
    schedule,
    address,
  };
};

export default useControlModalWindows;
