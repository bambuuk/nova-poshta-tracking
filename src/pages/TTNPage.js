import OrdersSearchPanel from "../components/OrdersSearchPanel";
import OrdersInfo from "../components/OrdersInfo";

const TTNPage = () => {
  return (
    <div data-testid="ttn-page">
      <OrdersSearchPanel />
      <OrdersInfo />
    </div>
  );
};

export default TTNPage;
