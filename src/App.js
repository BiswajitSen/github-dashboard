import { useEffect, useState } from "react";
import getMockCommitResponse from "./mocks/mockCommitResponse";
import CommitGraph from "./components/CommitGraph/CommitGraph";
import { extractCommitShaAndTimeStamp, fetchCommits } from "./utils/api";
import Form from "./components/Form/Form";

function App() {
  const [commitLog, setCommitLog] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    const commitLog = await fetchCommits(data);
    setCommitLog(extractCommitShaAndTimeStamp(commitLog));
  };

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

      <Form onSubmit={onSubmit} />
      {commitLog && <CommitGraph commits={commitLog} />}
    </div>
  );
}

export default App;
