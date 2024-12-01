import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { tempChartData } from "./data";

const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function FirstLineChart() {
  const chartData = Object.entries(tempChartData)
    .filter((item) => item[1] != null)
    .map((item) => {
      const key = item[0];
      const value = item[1];
      return { month: key, value };
    });
  const minValue = 30;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Body temperature records</CardTitle>
        <CardDescription>Chart Header Discription</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          style={{ height: 300, width: "100%" }}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const formatter = new Intl.DateTimeFormat("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  // second: "numeric",

                  hour12: false, // Use `false` for 24-hour time
                });

                return formatter.format(new Date(value));
              }}
            />
            <YAxis
              domain={[minValue, "dataMax"]}
              tickFormatter={(value) => Math.round(value)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="value"
              type="monotone"
              stroke="coral"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Body temperature <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
