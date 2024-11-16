// import "./inhalation-list.css";

import { useEffect, useState } from "react";

const fetchTemperature = async () => {
  const result = await fetch("http://localhost:3000/temperatures");
  const data = await result.json();
  console.log({ data });
  return data;
};
export const BodyTempList = () => {
  useEffect(() => {
    fetchTemperature().then((data) => {
      setData(data);
    });
  }, []);
  //     {
  //       id: 1,
  //       timestamp: null,
  //       temperature: 26.6,
  //       created_at: "2024-11-15T21:55:47.649Z",
  //       updated_at: "2024-11-15T21:55:47.649Z",
  //     },
  //     {
  //       id: 2,
  //       timestamp: "2024-11-15T21:51:56.695Z",
  //       temperature: 26.6,
  //       created_at: "2024-11-15T21:56:11.611Z",
  //       updated_at: "2024-11-15T21:56:11.611Z",
  //     },
  //     {
  //       id: 3,
  //       timestamp: "2024-11-15T21:55:56.695Z",
  //       temperature: 36.6,
  //       created_at: "2024-11-15T21:58:39.575Z",
  //       updated_at: "2024-11-15T21:58:39.575Z",
  //     },
  //     {
  //       id: 4,
  //       timestamp: "2024-11-15T21:55:56.695Z",
  //       temperature: 36.6,
  //       created_at: "2024-11-16T14:04:23.840Z",
  //       updated_at: "2024-11-16T14:04:23.840Z",
  //     },
  //     {
  //       id: 5,
  //       timestamp: "2024-11-15T19:55:56.695Z",
  //       temperature: 36.5,
  //       created_at: "2024-11-16T16:40:27.525Z",
  //       updated_at: "2024-11-16T16:40:27.525Z",
  //     },
  //     {
  //       id: 6,
  //       timestamp: "2024-11-15T10:55:56.695Z",
  //       temperature: 36.5,
  //       created_at: "2024-11-16T16:40:32.925Z",
  //       updated_at: "2024-11-16T16:40:32.925Z",
  //     },
  //     {
  //       id: 7,
  //       timestamp: "2024-11-15T12:55:56.695Z",
  //       temperature: 36.5,
  //       created_at: "2024-11-16T16:40:36.630Z",
  //       updated_at: "2024-11-16T16:40:36.630Z",
  //     },
  //     {
  //       id: 8,
  //       timestamp: "2024-11-15T12:55:56.695Z",
  //       temperature: 36.9,
  //       created_at: "2024-11-16T16:40:40.433Z",
  //       updated_at: "2024-11-16T16:40:40.433Z",
  //     },
  //   ];
  const [data, setData] = useState([]);
  return (
    <div className="daily-planing">
      <h4>Temperature List</h4>
      <div className="daily-table">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Time</th>
              <th style={{ width: "50%" }}>Temperature </th>
            </tr>
          </thead>
          <tbody>
            {data.map((t) => {
              const date = new Date(t.timestamp).toLocaleString();
              return (
                <tr>
                  <td>{date}</td>
                  <td>{t.temperature}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
