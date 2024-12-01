// import "./inhalation-list.css";

import { useEffect, useState } from "react";
import { Temperature } from "@/models";
import { Link, useNavigate } from "react-router";
import { fetchTemperature } from "./api";

export const BodyTempListFull = () => {
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
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col">
      <h4 className="font-semibold leading-none tracking-tight">
        Temperature List
      </h4>
      <div className="daily-table">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature, °C</th>
              <th>Saturation, %</th>
              <th>Symptoms</th>
              <th>Info </th>
            </tr>
          </thead>
          <tbody>
            {data.map((temp) => (
              <tr
                key={temp.id}
                onClick={() => {
                  navigate(`/temperature/${temp.id}`);
                }}
              >
                <td>{new Date(temp.timestamp).toLocaleString()}</td>
                <td>{temp.temperature} °C</td>
                <td>{temp.saturation ? temp.saturation + "%" : "-"}</td>
                <td>{temp.symptoms ? temp.symptoms : "-"}</td>
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
