/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChartComponent } from "@/components/bar-chart";
import { HomeFiltersComponent } from "../../components/home-filters/home-filters.component";
import { HomeViewProps } from "./home.type";

export function HomeView({ loading, periods, onSubmit }: HomeViewProps) {


  return (
    <div className="page home-page px-4 lg:px-0">
      <HomeFiltersComponent onSubmit={onSubmit} loading={loading} />

      {loading && <span>Carregando...</span>}


      <BarChartComponent
        xAxisKey="period"
        barKey="count"
        config={{
          count: {
            label: "Total",
            color: "hsl(var(--chart-1))",
          },
        }}
        data={periods}
        title="Respostas dos usuários"
        formatterTooltip={(_1: any, _2: any, item: any) => {
          return `Periodo: ${item.payload['period']} - Total: ${item.payload['count']}`
        }}
      />
    </div>
  )
}