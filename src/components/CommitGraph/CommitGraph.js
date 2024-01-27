import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Dropdown } from "primereact/dropdown";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Colors,
  Title,
} from "chart.js";
import { options } from "./CommitGraph.config";
import { createCommitDetails } from "./CommitGraph.util";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Colors
);

const color = [
  { name: "red" },
  { name: "green" },
  { name: "blue" },
  { name: "violet" },
  { name: "yellow" },
];

const CommitGraph = ({ commits }) => {
  const { labels, commitCountPerDate } = createCommitDetails(commits);
  const [borderColor, setBorderColor] = useState("rgb(75, 192, 192)");

  return (
    <>
      <div
        style={{
          width: "100wh",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
        }}>
        <div
          style={{
            width: "1080px",
            height: "720px",
            display: "flex",
            alignItems: "center",
          }}>
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "git commits",
                  data: commitCountPerDate,
                  fill: false,
                  borderColor: borderColor.name,
                  tension: 0.1,
                },
              ],
            }}
            options={options}
          />

          <div>
            <h2>Configure</h2>
            <div className='card flex justify-content-center'>
              <Dropdown
                value={borderColor}
                onChange={(e) => setBorderColor(e.value)}
                options={color}
                optionLabel='name'
                placeholder='Select a Color'
                className='min-w-40 border-2 border-blue-300 p-2'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitGraph;
