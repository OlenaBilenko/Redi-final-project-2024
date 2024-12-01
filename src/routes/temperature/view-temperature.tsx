import { Temperature } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const fetchTemperature = async (id: number) => {
  const result = await fetch(`http://localhost:3000/temperatures/${id}`);
  const data = await result.json();
  return data as Temperature;
};

export const ViewTemperature = () => {
  const params = useParams();
  const [data, setData] = useState<Temperature>();

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

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ maxWidth: 400 }} className="flex flex-col gap-4 p-4">
      <div className="flex flex-row justify-between">
        <div className="font-medium">Temperature:</div>
        <div>{data.temperature}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Date:</div>
        <div>
          {new Date(data.timestamp).toLocaleTimeString() +
            " " +
            new Date(data.timestamp).toLocaleDateString()}
        </div>
      </div>
      {data.symptoms && (
        <div className="flex flex-row justify-between">
          <div className="font-medium">Symptoms:</div>
          <div>{data.symptoms}</div>
        </div>
      )}
      {data.respiratoryFrequency && (
        <div className="flex flex-row justify-between">
          <div className="font-medium">Respiratory Frequency:</div>
          <div>{data.respiratoryFrequency}</div>
        </div>
      )}
      {data.saturation && (
        <div className="flex flex-row justify-between">
          <div className="font-medium">Saturation:</div>
          <div>{data.saturation}</div>
        </div>
      )}
      {data.comment && (
        <div className="flex flex-row justify-between">
          <div className="font-medium">Comment:</div>
          <div>{data.comment}</div>
        </div>
      )}
    </div>
  );
};
