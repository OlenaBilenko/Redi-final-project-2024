import "./App.css";
import { Button } from "@/components/ui/button";
import { Bar, BarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { FirstLineChart } from "../../components/temp-chart/temp-chart";
import { BodyTemp } from "../../components/body-temp/body-temp";
import { InhalationList } from "../../components/inhalation-list/inhalation-list";
import { BodyTempList } from "../../components/body-temp-list/body-temp-list";
import { useState } from "react";
import { Temperature } from "@/models";
import { BodyWeigthHeight } from "@/components/body-weigth-height/body-weigth-height";
import { Medication } from "@/components/medication/medication";

function App() {
  const [tempModal, setTempModal] = useState(false);
  const [weigthHeigthModal, setWeigthHeigthModal] = useState(false);
  const [medicationModal, setMedicationModal] = useState(false);
  const [data, setData] = useState<Temperature>();

  // const toggleTempModal = (id?: number, data?: Temperature) => {
  //   setTempModal(!tempModal);
  // };
  // const openLogModal = (id?: number, data?: Temperature) => {
  //   setTempModal(true);
  //   setData(data);
  // };
  // const closeLogModal = () => {
  //   setTempModal(false);
  // };
  ////////////////////////////
  const openTempModal = (id?: number, data?: Temperature) => {
    setTempModal(true);
    setData(data);
  };
  const closeTempModal = () => {
    setTempModal(false);
  };
  ////////////////////////////
  const openWeigthHeigthModal = () => {
    setWeigthHeigthModal(true);
  };
  const closeWeigthHeigthModal = () => {
    setWeigthHeigthModal(false);
  };
  ////////////////////////////
  const openMedicationModal = () => {
    setMedicationModal(true);
    setData(data);
  };
  const closeMedicationModal = () => {
    setMedicationModal(false);
  };
  return (
    <>
      <div className="flex gap-4 flex-col p-4">
        {/* <Button onClick={() => openLogModal()}>Create Log</Button> */}
        <Button onClick={() => openTempModal()}>Log temperature</Button>
        <Button onClick={() => openWeigthHeigthModal()}>
          Log weigth/height
        </Button>
        <Button onClick={() => openMedicationModal()}>Log medication</Button>

        <FirstLineChart />

        {tempModal && <BodyTemp data={data} closeTempModal={closeTempModal} />}
        {weigthHeigthModal && (
          <BodyWeigthHeight closeWeigthHeigthModal={closeWeigthHeigthModal} />
        )}
        {medicationModal && (
          <Medication closeMedicationModal={closeMedicationModal} />
        )}

        <div className="hydration-and-planing">
          <InhalationList />
          <BodyTempList
            openTempModal={openTempModal}
            closeTempModal={closeTempModal}
          />
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
