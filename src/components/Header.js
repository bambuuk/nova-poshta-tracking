
const Header = () => {
  return (
    <header className="flex justify-around text-white text-lg font-medium">
      <div className="w-[210px]">
        <a
          href="/"
          className="w-full block bg-[#DB291D] rounded-md py-[15px] text-center"
        >
          Перевірити ТТН
        </a>
      </div>
      <div className="w-[210px]">
        <a
          href="/"
          className="w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
        >
          Список відділень
        </a>
      </div>
    </header>
  );
};

export default Header;