import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-[25px] max-w-[1024px] w-full mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;