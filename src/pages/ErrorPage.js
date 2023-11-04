import { useRouteError, NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div 
      data-testid="error-page"
      className="p-3 absolute w-full h-full flex flex-col items-center justify-center text-white font-bold "
    >
      <h1 className="text-4xl tracking-[1.6px]">Уупс!</h1>
      <p className="text-lg mt-6">Вибачте, щось пішло не так</p>
      <p className="text-lg mt-1">{error.statusText ?? error.message}</p>
      <NavLink
        to="/"
        className="text-lg mt-5 text-gray-400 hover:text-red-400 transition-colors p-3 border border-gray-400 border-1 border-solid rounded-lg hover:border-red-400 text-center"
      >
        Повернутись на головну сторінку
      </NavLink>
    </div>
  );
};

export default ErrorPage;
