import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

const HomePage = () => {
  const { loading, periods, reload } = useHomeModel()
  return (
    <HomeView
      loading={loading}
      periods={periods}
      onSubmit={reload}
    />
  )
};

export default HomePage;
