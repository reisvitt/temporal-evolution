import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

const HomePage = () => {
  const { loading, periods, originPeriodCount, origins, reload } = useHomeModel()
  return (
    <HomeView
      loading={loading}
      periods={periods}
      onSubmit={reload}
      origins={origins}
      originPeriodCount={originPeriodCount}
    />
  )
};

export default HomePage;
