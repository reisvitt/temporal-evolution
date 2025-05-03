/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { Loading } from "../ui/loading"
import React from "react"

type TRadialChartComponent = {
  title?: string
  dataKey: string
  radialKey: string
  config: ChartConfig,
  data: any[]
  loading?: boolean
} & React.ComponentProps<"div">

export const RadialChartComponent = ({
  title,
  dataKey,
  radialKey,
  config,
  data,
  loading,
  ...props
}: TRadialChartComponent) => {
  return (
    <Card {...props}>
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
            <RadialBarChart
              data={data}
              endAngle={100}
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
              <RadialBar dataKey={dataKey} fill={data[0].color || "var(--color-primary)"} background />
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
                            {data[0][dataKey]?.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-primary"
                          >
                            {data[0][radialKey]}
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
