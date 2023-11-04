import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-once="true"
      className="flex flex-col items-center sm:flex-row sm:justify-around text-white text-lg font-medium"
    >
      <div className="w-[210px]">
        <NavLink
          to="/"
          data-testid="ttn-link"
          className={({ isActive, isPending }) =>
            isPending
              ? "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
              : isActive
              ? "bg-[#DB291D] w-full block rounded-md py-[15px] text-center active:scale-[0.9] transition-all"
              : "w-full block bg-[#A4271F] rounded-md py-[15px] text-center active:scale-[0.9] hover:bg-[#DB291D] transition-all"
          }
        >
          Перевірити ТТН
        </NavLink>
      </div>
      <div className="w-[210px] mt-4 sm:mt-0">
        <NavLink
          to="/offices"
          data-testid="offices-link"
          className={({ isActive, isPending }) =>
            isPending
              ? "w-full block bg-[#A4271F] rounded-md py-[15px] text-center"
              : isActive
              ? "bg-[#DB291D] w-full block rounded-md py-[15px] text-center active:scale-[0.9] transition-all"
              : "w-full block bg-[#A4271F] rounded-md py-[15px] text-center active:scale-[0.9] hover:bg-[#DB291D] transition-all"
          }
        >
          Список відділень
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
