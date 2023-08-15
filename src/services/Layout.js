import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-[10px] pt-[25px] pb-[100px] max-w-[1024px] w-full mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;