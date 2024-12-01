import { Temperature } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const fetchTemperature = async (id: number) => {
  const result = await fetch(`http://localhost:3000/temperatures/${id}`);
  const data = await result.json();
  console.log({ data });
  return data as Temperature;
};

export const ViewTemperature = () => {
  const params = useParams();
  const [data, setData] = useState<Temperature[]>([]);

  useEffect(() => {
    fetchTemperature(params.id)
      .then((data) => {
        const fetchedData = data;
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
