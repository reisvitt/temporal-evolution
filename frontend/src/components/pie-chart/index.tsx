/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cell, Pie, PieChart, PieLabel } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Loading } from "../ui/loading"

type TPieChartComponent = {
  title?: string
  dataKey: string
  nameKey: string
  config: ChartConfig,
  data: any[]
  loading?: boolean
  className?: string,
  labelFormatter?: PieLabel
}

export const PieChartComponent = ({
  title,
  dataKey,
  nameKey,
  config,
  data,
  loading,
  className,
  labelFormatter,
}: TPieChartComponent) => {
  return (
    <Card className={className}>
      <CardHeader >
        <CardTitle>{title}</CardTitle>
        {loading && (
          <Loading />
        )}
      </CardHeader>
      <CardContent className="relative">
        {!loading && data.length === 0 && (
          <CardDescription className="text-center">Sem dados</CardDescription>
        )}

        {data && data.length > 0 && (
          <ChartContainer config={config}>
            <PieChart>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    indicator="line"
                  />}
              />
              <Pie
                data={data}
                dataKey={dataKey}
                label={labelFormatter}
                nameKey={nameKey}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={config[entry[nameKey]]?.color || '#ccc'}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
