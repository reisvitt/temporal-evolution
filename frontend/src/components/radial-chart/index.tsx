import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { Loading } from "../ui/loading"
import React from "react"

type TRadialChartComponent = {
  title?: string
  config: ChartConfig,
  total: number
  label: string
  color?: string
  value: number
  loading?: boolean
} & React.ComponentProps<"div">

export const RadialChartComponent = ({
  title,
  config,
  value,
  total,
  label,
  color,
  loading,
  ...props
}: TRadialChartComponent) => {

  const angle = (360 * value) / total

  return (
    <Card {...props}>
      <CardHeader >
        <CardTitle>{title}</CardTitle>
        {loading && (
          <Loading />
        )}
      </CardHeader>
      <CardContent className="relative">
        <ChartContainer config={config} className="aspect-square lg:aspect-video">
          <RadialBarChart
            data={[{ value: value }]}
            startAngle={0.5}
            endAngle={angle || 100}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="value" fill={color || "var(--color-primary)"} background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-primary text-2xl font-bold"
                        >
                          {value?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-primary"
                        >
                          {label}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
