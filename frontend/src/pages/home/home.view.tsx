/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChartComponent } from "@/components/bar-chart";
import { HomeFiltersComponent } from "../../components/home-filters/home-filters.component";
import { HomeViewProps } from "./home.type";
import { LineChartComponent } from "@/components/line-chart";
import { PieChartComponent } from "@/components/pie-chart";
import { ORIGIN_ENUM, originEnumLabels } from "@/enums/origin.enum";
import { RadialChartComponent } from "@/components/radial-chart";

export function HomeView({ loading, periods, origins, onSubmit, }: HomeViewProps) {
  return (
    <div className="page home-page px-4 lg:px-0">

      <h1 className="my-10 text-center font-bold text-2xl text-gray-700">Evolução Temporal</h1>

      <HomeFiltersComponent onSubmit={onSubmit} loading={loading} />

      <section className="flex flex-wrap justify-between mt-12 gap-6">
        {origins.map(origin => (
          <RadialChartComponent
            dataKey="count"
            radialKey="origin"
            config={{
              origin: {
                label: "Origem",
                color: `var(--color-${origin.origin})`,
              },
            }}
            data={[{
              count: origin.count,
              origin: originEnumLabels[origin.origin as ORIGIN_ENUM],
              color: `var(--color-${origin.origin})`,
            }]}
            title={`Quantidade ${originEnumLabels[origin.origin as ORIGIN_ENUM]}`}
            loading={loading}
            className={`data-[length='1']:w-[49%] data-[length='3']:w-[32%]`}
            data-length={origins.length}
          />
        ))}
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
          loading={loading}
          className="w-[49%]"
        />
        <LineChartComponent
          xAxisKey="period"
          lineKey="count"
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
          loading={loading}
          className="w-[49%]"
        />

        <PieChartComponent
          dataKey="count"
          nameKey="origin"
          config={{
            [ORIGIN_ENUM.EMAIL]: {
              label: originEnumLabels[ORIGIN_ENUM.EMAIL],
              color: "var(--color-primary)",
            },
            [ORIGIN_ENUM.MOBILE]: {
              label: originEnumLabels[ORIGIN_ENUM.MOBILE],
              color: "var(--color-mobile)",
            },
            [ORIGIN_ENUM.WHATSAPP]: {
              label: originEnumLabels[ORIGIN_ENUM.WHATSAPP],
              color: "var(--color-wpp)",
            },
          }}
          data={origins}
          title="Respostas por origem"
          loading={loading}
          className="w-[49%]"
        />
      </section>
    </div>
  )
}