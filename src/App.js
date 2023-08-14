import { router } from "./services/routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="max-w-[1024px] p-[25px] w-full mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
