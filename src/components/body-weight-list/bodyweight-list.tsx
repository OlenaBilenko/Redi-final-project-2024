type BodyWeightData = {
  date: string;
  weight: number;
  height: number;
};

const bodyWeightData: BodyWeightData[] = [
  { date: "2021-09-01", weight: 70, height: 1.7 },
  { date: "2021-09-02", weight: 70.2, height: 1.7 },
  { date: "2021-09-03", weight: 70.2, height: 1.7 },
  { date: "2021-09-04", weight: 70.1, height: 1.7 },
  { date: "2021-09-06", weight: 70.3, height: 1.7 },
  { date: "2021-09-07", weight: 70.1, height: 1.7 },
  { date: "2021-09-08", weight: 70.2, height: 1.7 },
  { date: "2021-09-09", weight: 70.3, height: 1.7 },
  { date: "2021-09-12", weight: 70.4, height: 1.7 },
  { date: "2021-09-13", weight: 70.4, height: 1.7 },
  { date: "2021-09-15", weight: 70.4, height: 1.7 },
  { date: "2021-09-16", weight: 70.6, height: 1.7 },
  { date: "2021-09-17", weight: 70.5, height: 1.7 },
  { date: "2021-09-18", weight: 70.7, height: 1.7 },
  { date: "2021-09-19", weight: 70.6, height: 1.7 },
  { date: "2021-09-20", weight: 70.2, height: 1.7 },
  { date: "2021-09-21", weight: 70.4, height: 1.7 },
];

export const BodyWeightList = () => {
  const Bmi = (weight: number, height: number) => {
    return (weight / (height * height)).toFixed(1);
  };
  return (
    <div>
      <h4 className="font-semibold leading-none tracking-tight">
        Body weight/height
      </h4>
      <div className="daily-table">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight, kg </th>
              <th>Height, m</th>
              <th>BMI</th>
            </tr>
          </thead>
          <tbody>
            {bodyWeightData.map((bodyWeight) => (
              <tr key={bodyWeight.date}>
                <td>{bodyWeight.date}</td>
                <td>{bodyWeight.weight}</td>
                <td>{bodyWeight.height}</td>
                <td>{Bmi(bodyWeight.weight, bodyWeight.height)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
