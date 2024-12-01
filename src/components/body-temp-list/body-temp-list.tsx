// import "./inhalation-list.css";

import { useEffect, useState } from "react";
import { Temperature } from "@/models";
import { Link } from "react-router";

type Props = {
  openTempModal: (id: number, data: any) => void;
  closeTempModal: (id: number, data: any) => void;
};

const fetchTemperature = async () => {
  const result = await fetch("http://localhost:3000/temperatures");
  const data = await result.json();
  console.log({ data });
  return data as Temperature[];
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
    <div className="daily-planing">
      <h4>Temperature List</h4>
      <div className="daily-table">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Time</th>
              <th style={{ width: "50%" }}>Temperature </th>
              <th style={{ width: "50%" }}>Info </th>
            </tr>
          </thead>
          <tbody>
            {data.map((t) => {
              const date = new Date(t.timestamp).toLocaleString();
              return (
                <tr
                  key={t.id}
                  onClick={() => {
                    handleRowClick(t);
                  }}
                >
                  <td>{date}</td>
                  <td>{t.temperature}</td>
                  <td>
                    <Link to={`/temperature/${t.id}`}>i</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
