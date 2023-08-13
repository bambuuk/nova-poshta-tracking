import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dataInfo, setDataInfo] = useState('0');
  const apiKey = "22ef24fd53de6de7a28b5d8355220d26";
  const trackNumber = "20450745191462";

  const apiUrl = `https://api.novaposhta.ua/v2.0/json/`;

  useEffect(() => {
    axios
    .post(
      apiUrl,
      {
        apiKey: "22ef24fd53de6de7a28b5d8355220d26",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: trackNumber,
            },
          ],
        },
      },
      
    )
    .then((response) => {
      const data = response.data;
      setDataInfo(data);

      if (data && data.success) {
        const documentStatus = data.data[0];
        console.log("Статус накладної:", data.data);
      } else {
        console.log("Помилка запиту:", data);
      }
    })
    .catch((error) => {
      console.error("Помилка під час запиту:", error);
    });
  }, [])
  // Виконання запиту до API "Нової Пошти"
  

  return <div className="App">appp</div>;
}

export default App;
