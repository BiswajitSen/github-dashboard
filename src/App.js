import { useEffect, useState } from "react";
import getMockCommitResponse from "./mocks/mockCommitResponse";
import CommitGraph from "./components/CommitGraph/CommitGraph";
import {
  extractCommitShaAndTimeStamp,
  fetchCommits,
} from "./utils/api";

function App() {
  const [gitProfile, setGitProfile] = useState(null);
  const [gitRepo, setGitRepo] = useState(null);
  const [sha, setSha] = useState(null);
  const [commitLog, setCommitLog] = useState(null);

  useEffect(() => {
    async function getGitHubCommitData() {
      const respose = await getMockCommitResponse();
      const commits = extractCommitShaAndTimeStamp(respose);
      setCommitLog(commits);
    }
    getGitHubCommitData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "90vw",
        border: "1px solid black",
        margin: "0 auto",
        padding: "20px",
      }}>
      <h1>GitHub Commit Dashboard</h1>

      <form style={{ display: "flex", gap: "10px" }}>
        <label htmlFor='gitProfile'>User Name: </label>
        <input
          id={"gitProfile"}
          onChange={(e) => {
            const value = e.target.value;
            setGitProfile(value);
          }}></input>

        <label htmlFor='repo'>Repository: </label>
        <input
          id={"repo"}
          onChange={(e) => {
            const value = e.target.value;
            setGitRepo(value);
          }}></input>

        <label htmlFor='sha'>Last Commmit Sha: </label>
        <input
          id={"sha"}
          onChange={(e) => {
            const value = e.target.value;
            setSha(value);
          }}></input>

        <button
          type='submit'
          onClick={async (e) => {
            e.preventDefault();
            console.log({ gitProfile, gitRepo, sha });
            const commitLog = await fetchCommits({ gitProfile, gitRepo, sha });
            setCommitLog(extractCommitShaAndTimeStamp(commitLog));
          }}>
          Submit
        </button>
      </form>
      {commitLog && <CommitGraph commits={commitLog} />}
    </div>
  );
}

export default App;
