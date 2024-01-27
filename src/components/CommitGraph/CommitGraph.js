import React from "react";
import { Line } from "react-chartjs-2";
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

const CommitGraph = ({ commits }) => {
  const { labels, commitCountPerDate } = createCommitDetails(commits);

  return (
    <>
      <h1>
        <div style={{ width: "1080px", height: "720px" }}>
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "git commits",
                  data: commitCountPerDate,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
            options={options}
          />
        </div>
      </h1>
    </>
  );
};

export default CommitGraph;
