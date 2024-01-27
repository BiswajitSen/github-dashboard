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
import HashMap from "../utils/hashMap";
import getDateInformation, { formattedDateString } from "../utils/getDate";

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

const createCommitDetails = (commits) => {
  const commitInfo = new HashMap();

  commits.forEach(({ sha, date }) => {
    const dateInfo = getDateInformation(date);
    commitInfo.add(formattedDateString(dateInfo), sha);
  });

  const labels = commitInfo.getKeys();
  const commitCountPerDate = labels.map((label) =>
    commitInfo.getValueCount(label)
  );

  return { labels, commitCountPerDate };
};

const CommitGraph = ({ commits }) => {
  const { labels, commitCountPerDate } = createCommitDetails(commits);

  return (
    <>
      <h1>
        <div style={{ width: "500px", height: "400px" }}>
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
            options={{
              animation: true,
              plugins: {
                legend: {
                  display: true,
                  position: "right",
                },
                tooltip: {
                  enabled: true,
                },
                title: {
                  display: true,
                  text: "Git commit log",
                },
              },
            }}
          />
        </div>
      </h1>
    </>
  );
};

export default CommitGraph;
