import "./App.css";
import { Button } from "@/components/ui/button";
import { Bar, BarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { FirstLineChart } from "./components/line-chart";
import { NavBar } from "./components/navbar/navbar";
import { BodyTemp } from "./components/body-temp/body-temp";
import { InhalationList } from "./components/inhalation-list/inhalation-list";
import { BodyTempList } from "./components/body-temp-list/body-temp-list";
import { useState } from "react";

function App() {
  const [tempModal, setTempModal] = useState(false);
  const toggleTempModal = () => {
    setTempModal(!tempModal);
  };
  return (
    <>
      <NavBar />
      <div className="flex gap-4 flex-col p-4">
        <h1 className="text-3xl font-bold underline">My healthy Life</h1>
        <Button onClick={toggleTempModal}>Log temperature</Button>
        {/* <Chart /> */}
        <div className="flex flex-row justify-evenly gap-3 bg-slate-100">
          <FirstLineChart />
          <FirstLineChart />
        </div>
        <BodyTemp toggleTempModal={toggleTempModal} tempModal={tempModal} />
        <div className="hydration-and-planing">
          <InhalationList />
          <BodyTempList />
        </div>
      </div>
    </>
  );
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
export default App;
