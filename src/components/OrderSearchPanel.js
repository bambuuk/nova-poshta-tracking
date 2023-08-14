

const OrderSearchPanel = () => {
  return (
    <div>
      <div className="mt-28 flex flex-col">
        <h2 className="text-white text-[21px] font-medium leading-8">Знайти посилку</h2>
        <div className="mt-[38px]">
          <form className="flex flex-row gap-[40px]">
            <div className="w-full relative">
              <input type="number" className="py-1 w-full bg-transparent border-b-2 border-solid border-white outline-none text-white focus:border-green-500 transition-colors " />
              <label className="absolute left-0 text-[#9CA3AF] text-base font-normal pointer-events-none transition">Введіть ваш ТТН</label>
            </div>
            <button className="bg-[#190E6F] hover:bg-[#454dc0] min-w-[150px] py-2 text-white font-base font-medium transition-all active:scale-[0.9]">Статус ТТН</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderSearchPanel;