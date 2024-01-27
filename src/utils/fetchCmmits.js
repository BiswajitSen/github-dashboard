import axios from "axios";
import { GITHUB_ACCESS_TOKEN } from "../resources/env.local";

export const extractCommitShaAndTimeStamp = (commitLog) =>
  commitLog?.map((data) => ({
    sha: data.sha,
    date: data.commit.author.date,
  }));

export const fetchCommits = async ({ gitProfile, gitRepo, sha }) => {
  const url = `https://api.github.com/repos/${gitProfile}/${gitRepo}/commits?per_page=100&sha=${sha}`;
  console.log("Requesting url", url);

  const response = await axios({
    method: "get",
    url,
    headers: {
      Authorization: GITHUB_ACCESS_TOKEN,
    },
  });

  return response.data;
};
