import { Temperature } from "@/models";

export const fetchTemperature = async () => {
    const result = await fetch("http://localhost:3000/temperatures");
    const data = await result.json();
    return data as Temperature[];
  };