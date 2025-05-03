import { useHomeModel } from "./home.model";
import { HomeView } from "./home.view";

const HomePage = () => {
  const { loading, periods } = useHomeModel()

  return (
    <HomeView
      loading={loading}
      periods={periods}
    />
  )
};

export default HomePage;
