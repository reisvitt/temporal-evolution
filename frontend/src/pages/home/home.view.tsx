import { HomeViewProps } from "./home.type";

export function HomeView({ loading, periods }: HomeViewProps) {
  console.log("periods", periods)

  return (
    <div className="home-page">
      Hello, World

      {loading && <span>Carregando...</span>}
    </div>
  )
}