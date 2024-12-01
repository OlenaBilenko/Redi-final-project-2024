// import "./inhalation-list.css";

import { useEffect, useState } from "react";
import { Temperature } from "@/models";
import { Link } from "react-router";
import { fetchTemperature } from "./api";

type Props = {
  openTempModal: (id: number, data: any) => void;
  closeTempModal: (id: number, data: any) => void;
};

export const BodyTempList = (props: Props) => {
  const [data, setData] = useState<Temperature[]>([]);

  useEffect(() => {
    fetchTemperature()
      .then((data) => {
        const fetchedData = data;
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleRowClick = (element: Temperature) => {
    console.log({ element });
    props.openTempModal(element.id, element);
  };

  return (
    <div className="flex w-full flex-col sm:w-1/2">
      <h4 className="font-semibold leading-none tracking-tight">
        Temperature List
      </h4>
      <div className="daily-table">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Time</th>
              <th style={{ width: "40%" }}>Temperature, °C</th>
              <th style={{ width: "10%" }}>Info </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(-8).map((temp) => (
              <tr
                key={temp.id}
                onClick={() => {
                  handleRowClick(temp);
                }}
              >
                <td>{new Date(temp.timestamp).toLocaleString()}</td>
                <td>{temp.temperature} °C</td>
                <td>
                  <Link to={`/temperature/${temp.id}`}>i</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
