/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

type TLineChartComponent = {
  title?: string
  xAxisKey: string
  lineKey: string
  config: ChartConfig,
  data: any[]
  formatterTooltip: (value: any, name: string, item: any) => string
  loading?: boolean
  className?: string,
}

export const LineChartComponent = ({
  title,
  xAxisKey,
  lineKey,
  config,
  data,
  formatterTooltip,
  loading,
  className,
}: TLineChartComponent) => {
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
            <LineChart
              accessibilityLayer
              data={data}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xAxisKey}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
                formatter={formatterTooltip}
              />
              <Line
                dataKey={lineKey}
                type="natural"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-primary)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
              </Line>
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
