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
import { getThemeValue } from "@/utils/theme"

type TLineChartMultipleComponent = {
  title?: string
  xAxisKey: string
  config: ChartConfig,
  data: any[]
  formatterTooltip?: (value: any, name: string, item: any) => string
  loading?: boolean
  className?: string,
}

export const LineChartMultipleComponent = ({
  title,
  xAxisKey,
  config,
  data,
  formatterTooltip,
  loading,
  className,
}: TLineChartMultipleComponent) => {

  const getKeys = (): string[] => {
    if (!data || data.length === 0) return []

    const first = data[0]

    if (!first) return []

    delete first[xAxisKey]

    return Object.keys(first)
  }

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
                content={<ChartTooltipContent indicator="line" hideLabel />}
                formatter={formatterTooltip}
              />
              {getKeys().map(key => (
                <Line
                  key={key}
                  dataKey={key}
                  type="natural"
                  stroke={getThemeValue(`color-${key}`) || getThemeValue("color-primary")}
                  strokeWidth={2}
                  dot={{
                    fill: getThemeValue(`color-${key}`) || getThemeValue("color-primary"),
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                </Line>
              ))}
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
