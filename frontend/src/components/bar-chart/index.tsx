/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

type TBarChartComponent = {
  title?: string
  xAxisKey: string
  barKey: string
  config: ChartConfig,
  data: any[]
  formatterTooltip?: (value: any, name: string, item: any) => string
  loading?: boolean
  className?: string,
}

export const BarChartComponent = ({
  title,
  xAxisKey,
  barKey,
  config,
  data,
  formatterTooltip,
  loading,
  className,
}: TBarChartComponent) => {
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
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xAxisKey}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
                formatter={formatterTooltip}
              />
              <Bar
                dataKey={barKey}
                fill="var(--color-primary)"
                radius={8}
              />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
