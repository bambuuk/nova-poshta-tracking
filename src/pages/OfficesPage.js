import OfficesInfo from "../components/OfficesInfo";
import OfficesSearchPanel from "../components/OfficesSearchPanel";

const OfficesPage = () => {
  return (
    <div data-testid="offices-page">
      <OfficesSearchPanel />
      <OfficesInfo />
    </div>
  );
};

export default OfficesPage;
