import { CgCloseR } from 'react-icons/cg';

const OrdersInfo = () => {
  return (
    <div className="mt-[50px]">
      <div className="w-full p-[20px] min-h-[250px] rounded-2xl flex flex-row bg-[#373737]">
        <div className="flex-auto">
          <div className="flex flex-col max-w-[500px]">
            <p className="text-white text-base mb-3">
              <span className="text-[#11e962] mb-[5px]">Номер ТТН:</span>
              <br />
              20450745191462
            </p>

            <p className="text-white text-base mb-3">
              <span className="text-[#11e962] mb-[5px]">Статус доставки:</span>
              <br />
              Відправлення отримано
            </p>

            <p className="text-white text-base mb-3">
              <span className="text-[#11e962] mb-[5px]">Орієнтована дата:</span>
              <br />
              2023-07-21 09:19:37
            </p>

            <p className="text-white text-base mb-3">
              <span className="text-[#11e962] mb-[5px]">Відправлення:</span>
              <br />
              Харків, Тюрінська (ран. Якіра), 124 Відділення №3: вул. Тюрінська
              (ран. Якіра), 124
            </p>

            <p className="text-white text-base mb-3">
              <span className="text-[#11e962] mb-[5px]">Отриманання:</span>
              <br />
              Кропивницький, Полтавська, 60 (маг. АТБ) Поштомат "Нова Пошта"
              №5054: вул. Полтавська, 60 (маг. АТБ)
            </p>
            <button className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto max-w-[250px] hover:bg-[#454dc0] active:scale-[0.9] transition-all">Очистити дані та історію</button>
          </div>
        </div>
        <div className="w-[250px] h-[250px] bg-[#475569] self-end rounded-2xl py-3 px-2 flex flex-col items-center">
          <h3 className="text-white text-xl">Історія пошуку</h3>
          <div className="flex flex-col items-center my-[9px] overflow-y-auto flex-auto">
            <div className="flex items-center">
              <span className="text-white cursor-pointer hover:text-[#11e962] transition-colors">20450745191462</span>
              <CgCloseR size={20} color={'red'} className="cursor-pointer mx-2" />
            </div>
          </div>
          <button className="bg-[#020c2f] text-white font-medium py-[5px] px-[10px] w-auto hover:bg-[#454dc0] active:scale-[0.9] transition-all">Очистити історію</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersInfo;
