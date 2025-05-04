import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

const HomePage = () => {
  const { loading, periods, statusPeriodCount, originPeriodCount, origins, reload } = useHomeModel()
  return (
    <HomeView
      loading={loading}
      periods={periods}
      onSubmit={reload}
      origins={origins}
      originPeriodCount={originPeriodCount}
      statusPeriodCount={statusPeriodCount}
    />
  )
};

export default HomePage;
