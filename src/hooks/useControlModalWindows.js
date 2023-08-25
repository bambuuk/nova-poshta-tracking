import { useCallback, useState } from "react";

const useControlModalWindows = () => {
  const [activeScheduleModWind, setActiveScheduleModWind] = useState(false);

  const onActiveModWindow = useCallback(() => {
    setActiveScheduleModWind(true);
  }, []);

  const onCloseModWindow = () => {
    setActiveScheduleModWind(false);
  };

  return { activeScheduleModWind, onActiveModWindow, onCloseModWindow };
};

export default useControlModalWindows;
