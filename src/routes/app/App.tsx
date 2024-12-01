import "./App.css";
// import { Button } from "@/components/ui/button";
import { Bar, BarChart } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { FirstLineChart } from "../../components/temp-chart/temp-chart";
import { BodyTemp } from "../../components/body-temp/body-temp";
import { InhalationList } from "../../components/inhalation-list/inhalation-list";
import { BodyTempList } from "../../components/body-temp-list/body-temp-list";
import { useState } from "react";
import { Temperature } from "@/models";
import { BodyWeigthHeight } from "@/components/body-weight-height/body-weight-height";
import { Medication } from "@/components/medication/medication";
import { AddLogModalButton } from "@/components/log-modal-button/log-modal-button";

function useModalManager() {
  const [tempModal, setTempModal] = useState(false);
  const [weigthHeigthModal, setWeigthHeigthModal] = useState(false);
  const [medicationModal, setMedicationModal] = useState(false);
  const [data, setData] = useState<Temperature>();

  //////////////
  const closeModal = () => {
    setTempModal(false);
    setWeigthHeigthModal(false);
    setMedicationModal(false);
  };
  ////////////////////////////
  const openTempModal = (id?: number, data?: Temperature) => {
    setTempModal(true);
    setData(data);
  };
  ////////////////////////////
  const openWeigthHeigthModal = () => {
    setWeigthHeigthModal(true);
  };
  ////////////////////////////
  const openMedicationModal = () => {
    setMedicationModal(true);
    setData(data);
  };
  ////////////////////////////
  return {
    data,
    tempModal,
    openTempModal,
    closeModal,
    weigthHeigthModal,
    openWeigthHeigthModal,
    medicationModal,
    openMedicationModal,
  };
}

function App() {
  const {
    data,
    tempModal,
    openTempModal,
    closeModal,
    weigthHeigthModal,
    openWeigthHeigthModal,
    medicationModal,
    openMedicationModal,
  } = useModalManager();

  return (
    <>
      <div className="flex gap-4 flex-col p-4">
        {/* <Button onClick={() => openLogModal()}>Create Log</Button> */}
        {/* <Button onClick={() => openTempModal()}>Log temperature</Button>
        <Button onClick={() => openWeigthHeigthModal()}>
          Log weigth/height
        </Button>
        <Button onClick={() => openMedicationModal()}>Log medication</Button> */}

        <FirstLineChart />

        {tempModal && <BodyTemp data={data} closeTempModal={closeModal} />}
        {weigthHeigthModal && (
          <BodyWeigthHeight closeWeigthHeigthModal={closeModal} />
        )}
        {medicationModal && <Medication closeMedicationModal={closeModal} />}

        <div className="hydration-and-planing">
          <InhalationList />
          <BodyTempList
            openTempModal={openTempModal}
            closeTempModal={closeModal}
          />
        </div>
      </div>
      <AddLogModalButton
        openTempModal={openTempModal}
        closeModal={closeModal}
        openWeigthHeigthModal={openWeigthHeigthModal}
        openMedicationModal={openMedicationModal}
      />
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
