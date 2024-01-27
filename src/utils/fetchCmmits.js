import axios from "axios";
import { GITHUB_ACCESS_TOKEN } from "../resources/env.local";

const fetchCommits = async ({ repo, owner }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;

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

export { fetchCommits };
