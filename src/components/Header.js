import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-around text-white text-lg font-medium">
      <div className="w-[210px]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
              : isActive
              ? "bg-[#DB291D] w-full block rounded-md py-[15px] text-center"
              : "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
          }
        >
          Перевірити ТТН
        </NavLink>
      </div>
      <div className="w-[210px] mt-4 sm:mt-0">
        <NavLink
          to="/offices"
          className={({ isActive, isPending }) =>
            isPending
              ? "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
              : isActive
              ? "bg-[#DB291D] w-full block rounded-md py-[15px] text-center"
              : "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
          }
        >
          Список відділень
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
