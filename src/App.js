import { useEffect, useState } from "react";
import getMockCommitResponse from "./mocks/mockCommitResponse";
import CommitGraph from "./components/CommitGraph";

function App() {
  const [, setGitData] = useState(null);
  const [commitLog, setCommitLog] = useState(null);

  useEffect(() => {
    async function getGitHubCommitData() {
      const respose = await getMockCommitResponse();
      setGitData(respose);
      const commits = respose?.map((data) => ({
        sha: data.sha,
        date: data.commit.author.date,
      }));
      setCommitLog(commits);
    }
    getGitHubCommitData();
  }, []);

  return (
    <>
      <h1>GitHub Commit Dashboard</h1>
      {commitLog && <CommitGraph commits={commitLog} />}
    </>
  );
}

export default App;
