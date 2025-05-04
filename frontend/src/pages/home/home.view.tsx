import { BarChartComponent } from "@/components/bar-chart";
import { HomeFiltersComponent } from "../../components/home-filters/home-filters.component";
import { HomeViewProps } from "./home.type";
import { LineChartComponent } from "@/components/line-chart";
import { PieChartComponent } from "@/components/pie-chart";
import { ORIGIN_ENUM, originEnumLabels } from "@/enums/origin.enum";
import { RadialChartComponent } from "@/components/radial-chart";
import { LineChartMultipleComponent } from "@/components/line-chart-multiple";
import { getThemeValue } from "@/utils/theme";
import { DialogInfo } from "@/components/dialog-info";
import { DevBy } from "@/components/dev-by";

export function HomeView({
  loading,
  periods,
  originPeriodCount,
  statusPeriodCount,
  origins,
  onSubmit
}: HomeViewProps) {

  return (
    <div className="page home-page px-4 lg:px-0">

      <h1 className="mt-10 text-center font-bold text-2xl text-gray-700">
        Evolução Temporal da Taxa de Conversão
      </h1>

      <div className="mb-8 mt-4 flex justify-center items-end gap-2">
        <span className="text-sm">
          Registros sobre envios de canais (E-mail, WhatsApp, e Push Notifications).
        </span>
        <DialogInfo />
      </div>

      <HomeFiltersComponent
        onSubmit={onSubmit}
        loading={loading}
      />

      <section className="flex flex-wrap justify-between mt-12 mb-12 gap-4 xl:gap-6">
        {origins.map(origin => (
          <RadialChartComponent
            config={{
              origin: {
                label: "Origem",
                color: `var(--color-${origin.origin})`,
              },
            }}
            value={origin.count}
            color={getThemeValue(`color-${origin.origin}`)}
            total={origin.total || 1}
            label={originEnumLabels[origin.origin as ORIGIN_ENUM]}
            title={`Total de Registros por: ${originEnumLabels[origin.origin as ORIGIN_ENUM]}`}
            loading={loading}
            className={`w-full md:data-[length='1']:w-[49%] md:data-[length='3']:w-[32%]`}
            data-length={origins.length}
          />
        ))}

        <LineChartMultipleComponent
          xAxisKey="period"
          config={{
            count: {
              label: "Total",
              color: "hsl(var(--chart-1))",
            },
          }}
          data={originPeriodCount}
          title="Evolução dos Registros por Origem"
          loading={loading}
          className="w-full md:w-[49%]"
        />

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
          title="Somatório"
          loading={loading}
          className="w-full md:w-[49%]"
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
          title="Evolução dos Registros"

          loading={loading}
          className="w-full md:w-[49%]"
        />

        <PieChartComponent
          dataKey="percent"
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
          data={origins.map(origin => ({
            ...origin,
            percent: Number(((100 * origin.count) / origin.total).toFixed(2))
          }))}
          title="Percentual por Canal"
          loading={loading}
          className="w-full md:w-[49%]"
          labelFormatter={(data) => {
            return `${originEnumLabels[data.origin as ORIGIN_ENUM]}: ${data['percent']}%`
          }}
        />

        <LineChartMultipleComponent
          xAxisKey="period"
          config={{
            count: {
              label: "Total",
              color: "hsl(var(--chart-1))",
            },
          }}
          data={statusPeriodCount}
          title="Evolução dos Registros por Status"
          loading={loading}
          className="w-full md:w-[49%]"
        />
      </section>

      <footer className="mt-20 mb-12">
        <DevBy />
      </footer>
    </div>
  )
}